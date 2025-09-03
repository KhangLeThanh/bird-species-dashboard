import { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import type { ChartEvent, ActiveElement } from "chart.js";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
  Grid,
  Box,
  TextField,
} from "@mui/material";
import { colorsChart } from "../constants/colorChart";

ChartJS.register(ArcElement, Tooltip, Legend);

type StatusData = {
  status: string;
  acronym: string;
  count: number;
  percentage: number;
};

type Species = {
  name: string;
  status: string;
};

type PieChartData = {
  data: StatusData[];
  species: Species[];
};

export default function PieChartWithDialog({ data, species }: PieChartData) {
  const [open, setOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<StatusData | null>(null);
  const [speciesList, setSpeciesList] = useState<Species[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const chartData = {
    labels: data.map((d) => d.status),
    datasets: [
      {
        data: data.map((d) => d.count),
        backgroundColor: data.map(
          (d) =>
            colorsChart[d.acronym as keyof typeof colorsChart] ||
            colorsChart.default
        ),
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "bottom" as const,
      },
    },
    onClick: (_event: ChartEvent, elements: ActiveElement[]) => {
      if (elements.length > 0) {
        const index = elements[0].index;
        const clickedStatus = data[index];
        const list = species.filter(
          (s) =>
            s.status.trim().toLowerCase() ===
            clickedStatus.acronym.trim().toLowerCase()
        );
        setSelectedStatus(clickedStatus);
        setSpeciesList(list);
        setSearchTerm("");
        setOpen(true);
      }
    },
    onHover: (event: ChartEvent, elements: ActiveElement[]) => {
      const canvas = event.native?.target as HTMLCanvasElement;
      canvas.style.cursor = elements.length ? "pointer" : "default";
    },
  };

  // Filter and remove duplicates
  const filteredSpecies = Array.from(
    new Set(
      speciesList
        .filter((s) => {
          const name = s.name.trim().toLowerCase();
          const search = searchTerm.trim().toLowerCase();
          return search === "" ? true : name.includes(search);
        })
        .map((s) => s.name.trim())
    )
  ).map((name) => ({ name }));

  return (
    <Grid container justifyContent="center" spacing={2}>
      <Grid size={{ xs: 12, sm: 8, md: 6 }}>
        <Box sx={{ height: 300 }}>
          <Pie data={chartData} options={options} />
          <Dialog
            open={open}
            onClose={() => setOpen(false)}
            fullWidth
            maxWidth="sm"
          >
            <DialogTitle>Status: {selectedStatus?.status}</DialogTitle>
            <DialogContent dividers>
              <Typography gutterBottom>
                Count: {selectedStatus?.count}
              </Typography>
              <Typography gutterBottom>
                Percentage: {selectedStatus?.percentage}%
              </Typography>

              {speciesList.length > 0 ? (
                <>
                  <Typography variant="subtitle1" gutterBottom>
                    Species List:
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="Search species..."
                    variant="outlined"
                    size="small"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    sx={{ mb: 1 }}
                  />
                  <Box
                    component="ul"
                    sx={{ pl: 2, maxHeight: 300, overflowY: "auto" }}
                  >
                    {filteredSpecies.length > 0 ? (
                      filteredSpecies.map((s) => <li key={s.name}>{s.name}</li>)
                    ) : (
                      <Typography>No matching species found</Typography>
                    )}
                  </Box>
                </>
              ) : (
                <Typography>No species recorded</Typography>
              )}
            </DialogContent>
            <DialogActions>
              <Button variant="contained" onClick={() => setOpen(false)}>
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
      </Grid>
    </Grid>
  );
}
