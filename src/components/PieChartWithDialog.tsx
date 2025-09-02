import { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import type { ChartEvent, ActiveElement } from "chart.js";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Button,
  Grid,
  Box,
} from "@mui/material";

ChartJS.register(ArcElement, Tooltip, Legend);

type StatusData = {
  status: string;
  acronym: string;
  count: number;
  percentage: number;
};

type PieChartData = {
  data: StatusData[];
};

export default function PieChartWithDialog({ data }: PieChartData) {
  const [open, setOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<StatusData | null>(null);

  const colors = {
    LC: "#4caf50",
    NT: "#ffeb3b",
    VU: "#ff9800",
    EN: "#f44336",
    CR: "#b71c1c",
    default: "#9e9e9e",
  };

  const chartData = {
    labels: data.map((d) => d.status),
    datasets: [
      {
        data: data.map((d) => d.count),
        backgroundColor: data.map(
          (d) => colors[d.acronym as keyof typeof colors] || colors.default
        ),
      },
    ],
  };

  const options = {
    onClick: (event: ChartEvent, elements: ActiveElement[]) => {
      if (elements.length > 0) {
        const index = elements[0].index;
        setSelectedStatus(data[index]);
        setOpen(true);
      }
    },
    onHover: (event: ChartEvent, elements: ActiveElement[]) => {
      const canvas = event.native?.target as HTMLCanvasElement;
      if (elements.length > 0) {
        canvas.style.cursor = "pointer";
      } else {
        canvas.style.cursor = "default";
      }
    },
  };

  return (
    <Grid container justifyContent="center" spacing={2}>
      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <Box>
          <Pie data={chartData} options={options} />
          <Dialog
            open={open}
            onClose={() => setOpen(false)}
            fullWidth
            maxWidth="xs"
          >
            <DialogTitle>{selectedStatus?.status}</DialogTitle>
            <DialogContent>
              <Typography>Count: {selectedStatus?.count}</Typography>
              <Typography>Percentage: {selectedStatus?.percentage}%</Typography>
              {selectedStatus?.count === 0 && (
                <Typography>No species recorded</Typography>
              )}
            </DialogContent>
            <Button onClick={() => setOpen(false)}>Close</Button>
          </Dialog>
        </Box>
      </Grid>
    </Grid>
  );
}
