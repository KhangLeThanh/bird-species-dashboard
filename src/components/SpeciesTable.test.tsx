import { render, screen } from "@testing-library/react";
import SpeciesTable from "./SpeciesTable";

const mockData = [
  { acronym: "LC", status: "Least Concern", count: 634, percentage: 91.09 },
  { acronym: "EN", status: "Endangered", count: 7, percentage: 1.01 },
  {
    acronym: "CR",
    status: "Critically Endangered",
    count: 2,
    percentage: 0.29,
  },
];

describe("SpeciesTable", () => {
  it("renders rows for each species", () => {
    render(<SpeciesTable data={mockData} />);

    expect(screen.getByText("LC")).toBeInTheDocument();
    expect(screen.getByText("Endangered")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument(); // CR count
  });

  it("applies special background color for endangered", () => {
    render(<SpeciesTable data={mockData} />);
    const endangeredRow = screen.getByText("Endangered").closest("tr");

    expect(endangeredRow).toHaveStyle("background-color: #f44336");
  });
});
