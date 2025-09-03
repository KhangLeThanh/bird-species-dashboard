import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableSortLabel,
} from "@mui/material";
import { BirdStatus } from "../enum";

type Species = {
  acronym: string;
  status: string;
  count: number;
  percentage: number;
};

type SpeciesTableType = {
  data: Species[];
};

type Order = "asc" | "desc";

const rowColors: Record<string, { bg: string; color: string }> = {
  EN: { bg: "#f44336", color: "#fff" },
  CR: { bg: "#b71c1c", color: "#fff" },
  ZERO: { bg: "#e8e3e3", color: "#000" },
  DEFAULT: { bg: "#fff", color: "#000" },
};
export default function SpeciesTable({ data }: SpeciesTableType) {
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof Species>("count");

  const handleSort = (property: keyof Species) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const sortedData = [...data].sort((a, b) => {
    if (orderBy === "count" || orderBy === "percentage") {
      return order === "asc"
        ? a[orderBy] - b[orderBy]
        : b[orderBy] - a[orderBy];
    }
    return 0;
  });

  return (
    <TableContainer component={Paper} sx={{ mt: 3 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>IUCN Acronym</TableCell>
            <TableCell>Status</TableCell>
            <TableCell sortDirection={orderBy === "count" ? order : false}>
              <TableSortLabel
                active={orderBy === "count"}
                direction={orderBy === "count" ? order : "asc"}
                onClick={() => handleSort("count")}
              >
                Count
              </TableSortLabel>
            </TableCell>
            <TableCell sortDirection={orderBy === "percentage" ? order : false}>
              <TableSortLabel
                active={orderBy === "percentage"}
                direction={orderBy === "percentage" ? order : "asc"}
                onClick={() => handleSort("percentage")}
              >
                Percentage
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedData.map((d) => {
            let { bg, color } = rowColors.DEFAULT;

            if (d.count === 0) {
              ({ bg, color } = rowColors.ZERO);
            } else if (d.acronym === BirdStatus.EN) {
              ({ bg, color } = rowColors.EN);
            } else if (d.acronym === BirdStatus.CR) {
              ({ bg, color } = rowColors.CR);
            }

            return (
              <TableRow key={d.acronym} sx={{ bgcolor: bg }}>
                <TableCell sx={{ color: color }}>{d.acronym}</TableCell>
                <TableCell sx={{ color: color }}>{d.status}</TableCell>
                <TableCell sx={{ color: color }}>{d.count}</TableCell>
                <TableCell sx={{ color: color }}>{d.percentage}%</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
