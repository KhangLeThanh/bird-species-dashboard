import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { colorsChart } from "../constants/colorChart";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

type BarChartData = {
  data: {
    acronym: string;
    status: string;
    count: number;
    percentage: number;
  }[];
};

export default function BarChartIUCN({ data }: BarChartData) {
  const chartData = {
    labels: data.map((d) => d.status),
    datasets: [
      {
        label: "Count",
        data: data.map((d) => d.count),
        backgroundColor: data.map(
          (d) =>
            colorsChart[d.acronym as keyof typeof colorsChart] ||
            colorsChart.default
        ),
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        title: {
          display: false,
        },
        beginAtZero: true,
      },
      x: {
        title: {
          display: false,
        },
      },
    },
  };

  return (
    <div style={{ height: 300 }}>
      <Bar data={chartData} options={options} />
    </div>
  );
}
