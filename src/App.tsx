import { useState } from "react";
import { Grid, Box, Tab, Tabs, Typography } from "@mui/material";
import { L1 } from "./data/L1";
import { L3, L3UniqueSpecies } from "./data/L3";
import L1Species from "./data/L1Species.json";
import L3Species from "./data/L3Species.json";
import SummaryCard from "./components/SummaryCard";
import PieChartWithDialog from "./components/PieChartWithDialog";
import BarChartIUCN from "./components/BarChartIUCN";
import SpeciesTable from "./components/SpeciesTable";
import { BirdStatus } from "./enum";

function App() {
  const [tab, setTab] = useState("1");
  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue);
  };
  const totalL1Species = L1.reduce((sum, bird) => sum + bird.count, 0);

  const endangeredL1Count =
    L1.find((bird) => bird.acronym === BirdStatus.EN)?.count || 0;
  const criticallyEndangeredL1Count =
    L1.find((bird) => bird.acronym === BirdStatus.CR)?.count || 0;

  const endangeredL3Count =
    L3.find((bird) => bird.acronym === BirdStatus.EN)?.count || 0;
  const criticallyEndangeredL3Count =
    L3.find((bird) => bird.acronym === BirdStatus.CR)?.count || 0;
  return (
    <Grid container spacing={2} mb={3} justifyContent="center">
      <Grid size={{ xs: 12, sm: 10, md: 8, lg: 6 }}>
        <Box p={2}>
          <Typography variant="h4" mb={2}>
            Bird Acoustic Capture Dashboard
          </Typography>

          <Tabs value={tab} onChange={handleChange}>
            <Tab label="L1 - All Species" value="1" />
            <Tab label="L3 - Captured by 2+ Models" value="2" />
          </Tabs>

          {tab === "1" && (
            <Box mt={3}>
              <Typography variant="h6" mb={1}>
                Summary Statistics
              </Typography>
              <SummaryCard
                total={totalL1Species}
                endangered={endangeredL1Count}
                criticallyEndangered={criticallyEndangeredL1Count}
              />
              <Typography variant="h6" mt={3} mb={1}>
                Distribution by IUCN Status (Bar Chart)
              </Typography>
              <BarChartIUCN data={L1} />
              <Typography variant="h6" mt={3} mb={1}>
                Distribution by IUCN Status (Pie Chart)
              </Typography>
              <PieChartWithDialog data={L1} species={L1Species} />
              <Typography variant="h6" mt={3} mb={1}>
                Detailed Counts by Status
              </Typography>
              <SpeciesTable data={L1} />
            </Box>
          )}

          {tab === "2" && (
            <Box mt={3}>
              <Typography variant="h6" mb={1}>
                Summary Statistics
              </Typography>
              <SummaryCard
                total={L3UniqueSpecies}
                endangered={endangeredL3Count}
                criticallyEndangered={criticallyEndangeredL3Count}
              />
              <Typography variant="h6" mt={3} mb={1}>
                Distribution by IUCN Status (Bar Chart)
              </Typography>
              <BarChartIUCN data={L3} />
              <Typography variant="h6" mt={3} mb={1}>
                Distribution by IUCN Status (Pie Chart)
              </Typography>
              <PieChartWithDialog data={L3} species={L3Species} />
              <Typography variant="h6" mt={3} mb={1}>
                Detailed Counts by Status
              </Typography>
              <SpeciesTable data={L3} />
            </Box>
          )}
        </Box>
      </Grid>
    </Grid>
  );
}

export default App;
