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
          <CardContent>
            <Typography variant="subtitle2">Endangered</Typography>
            <Typography variant="h5">{endangered}</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={{ xs: 12, sm: 4 }}>
        <Card>
          <CardContent>
            <Typography variant="subtitle2">Critically Endangered</Typography>
            <Typography variant="h5">{criticallyEndangered}</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
