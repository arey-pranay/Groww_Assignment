import { Line } from "react-chartjs-2";
import "chart.js/auto";

const GlobalMarketCapChart = ({ data }) => {
  const chartData = {
    labels: data.dates,
    datasets: [
      {
        label: "Global Market Cap",
        data: data.values,
        fill: false,
        borderColor: "#10b981", // Green color
        backgroundColor: "#7c3aed", // Purple color
        tension: 0.1,
        // responsive: true,
      },
    ],
  };

  return (
    <div className="bg-background-light dark:bg-background-dark p-4 rounded shadow">
      <Line data={chartData} />
    </div>
  );
};

export default GlobalMarketCapChart;
