import { Card, CardContent, Typography, Grid, Box } from "@mui/material";
import FlutterDashIcon from "@mui/icons-material/FlutterDash";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";

type SummaryCardType = {
  total: number;
  endangered: number;
  criticallyEndangered: number;
};

export default function SummaryCard({
  total,
  endangered,
  criticallyEndangered,
}: SummaryCardType) {
  return (
    <Grid container spacing={2} mb={3}>
      <Grid size={{ xs: 12, sm: 4 }}>
        <Card>
          <CardContent>
            <Box display="flex" alignItems="center" gap={1}>
              <FlutterDashIcon color="primary" />

              <Typography variant="subtitle2">Total Species</Typography>
            </Box>
            <Typography variant="h5">{total}</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={{ xs: 12, sm: 4 }}>
        <Card>
          <CardContent sx={{ backgroundColor: "#f44336" }}>
            <Box display="flex" alignItems="center" gap={1}>
              <WarningAmberIcon sx={{ color: "#fff" }} />
              <Typography variant="subtitle2" sx={{ color: "#fff" }}>
                Endangered
              </Typography>
            </Box>
            <Typography variant="h5" sx={{ color: "#fff" }}>
              {endangered}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={{ xs: 12, sm: 4 }}>
        <Card>
          <CardContent sx={{ backgroundColor: "#b71c1c" }}>
            <Box display="flex" alignItems="center" gap={1}>
              <ReportProblemIcon sx={{ color: "#fff" }} />
              <Typography variant="subtitle2" sx={{ color: "#fff" }}>
                Critically Endangered
              </Typography>
            </Box>
            <Typography variant="h5" sx={{ color: "#fff" }}>
              {criticallyEndangered}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
