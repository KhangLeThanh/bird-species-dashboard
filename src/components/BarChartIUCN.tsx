import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

type BarChartData = {
  data: { acronym: string; status: string; count: number }[];
};

export default function BarChartIUCN({ data }: BarChartData) {
  const colors: Record<string, string> = {
    LC: "#4caf50",
    NT: "#ffeb3b",
    VU: "#ff9800",
    EN: "#f44336",
    CR: "#b71c1c",
    default: "#9e9e9e",
  };

  const chartData = {
    labels: data.map((d) => d.status),
    datasets: [
      {
        label: "Count",
        data: data.map((d) => d.count),
        backgroundColor: data.map((d) => colors[d.acronym] || colors.default),
      },
    ],
  };

  return <Bar data={chartData} />;
}
