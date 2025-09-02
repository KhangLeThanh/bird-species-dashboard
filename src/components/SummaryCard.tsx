import { Card, CardContent, Typography, Grid } from "@mui/material";

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
            <Typography variant="subtitle2">Total Species</Typography>
            <Typography variant="h5">{total}</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={{ xs: 12, sm: 4 }}>
        <Card>
          <CardContent sx={{ backgroundColor: "#f44336" }}>
            <Typography variant="subtitle2" sx={{ color: "#fff" }}>
              Endangered
            </Typography>
            <Typography variant="h5" sx={{ color: "#fff" }}>
              {endangered}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={{ xs: 12, sm: 4 }}>
        <Card>
          <CardContent sx={{ backgroundColor: "#b71c1c" }}>
            <Typography variant="subtitle2" sx={{ color: "#fff" }}>
              Critically Endangered
            </Typography>
            <Typography variant="h5" sx={{ color: "#fff" }}>
              {criticallyEndangered}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
