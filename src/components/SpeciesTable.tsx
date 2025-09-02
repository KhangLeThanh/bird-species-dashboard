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
            let fontColor = "#000";

            if (d.count > 0) {
              if (d.acronym === "EN") {
                bgColor = "#f44336";
                fontColor = "#fff";
              }
              if (d.acronym === "CR") {
                bgColor = "#b71c1c";
                fontColor = "#fff";
              }
            } else if (d.count === 0) {
              bgColor = "#f5f5f5";
            }

            return (
              <TableRow key={d.acronym} sx={{ bgcolor: bgColor }}>
                <TableCell sx={{ color: fontColor }}>{d.acronym}</TableCell>
                <TableCell sx={{ color: fontColor }}>{d.status}</TableCell>
                <TableCell sx={{ color: fontColor }}>{d.count}</TableCell>
                <TableCell sx={{ color: fontColor }}>{d.percentage}%</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
