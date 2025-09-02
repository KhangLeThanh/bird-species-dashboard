import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

type SpeciesTableType = {
  data: {
    acronym: string;
    status: string;
    count: number;
    percentage: number;
  }[];
};

export default function SpeciesTable({ data }: SpeciesTableType) {
  return (
    <TableContainer component={Paper} sx={{ mt: 3 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>IUCN Acronym</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Count</TableCell>
            <TableCell>Percentage</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((d) => {
            let bgColor = "#fff";

            if (d.count > 0) {
              if (d.acronym === "EN") bgColor = "#ffcccc";
              if (d.acronym === "CR") bgColor = "#ff9999";
            } else if (d.count === 0) {
              bgColor = "#f5f5f5";
            }

            return (
              <TableRow key={d.acronym} sx={{ bgcolor: bgColor }}>
                <TableCell>{d.acronym}</TableCell>
                <TableCell>{d.status}</TableCell>
                <TableCell>{d.count}</TableCell>
                <TableCell>{d.percentage}%</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
