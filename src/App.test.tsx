import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders dashboard title", () => {
    render(<App />);
    expect(
      screen.getByText("Bird Acoustic Capture Dashboard")
    ).toBeInTheDocument();
  });

  it("renders tabs for L1 and L3", () => {
    render(<App />);
    expect(screen.getByText("L1 - All Species")).toBeInTheDocument();
    expect(screen.getByText("L3 - Captured by 2+ Models")).toBeInTheDocument();
  });
});
