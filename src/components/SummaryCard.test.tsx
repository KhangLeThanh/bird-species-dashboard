import { render, screen } from "@testing-library/react";
import SummaryCard from "./SummaryCard";

describe("SummaryCard", () => {
  it("renders total, endangered, and critically endangered values", () => {
    render(<SummaryCard total={100} endangered={7} criticallyEndangered={2} />);

    expect(screen.getByText("Total Species")).toBeInTheDocument();
    expect(screen.getByText("100")).toBeInTheDocument();

    expect(screen.getByText("Endangered")).toBeInTheDocument();
    expect(screen.getByText("7")).toBeInTheDocument();

    expect(screen.getByText("Critically Endangered")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
  });
});
