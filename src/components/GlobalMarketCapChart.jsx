import { Line } from "react-chartjs-2";
import "chart.js/auto";

const GlobalMarketCapChart = ({ data }) => {
  const chartData = {
    labels: data.btc.map((entry) => entry.x),
    datasets: [
      {
        label: "BTC Market Cap",
        data: data.btc.map((entry) => entry.y),
        fill: false,
        borderColor: "#f7931a", // Orange color for BTC
        backgroundColor: "#f7931a",
        tension: 0.1,
      },
      {
        label: "ETH Market Cap",
        data: data.eth.map((entry) => entry.y),
        fill: false,
        borderColor: "#627eea", // Blue color for ETH
        backgroundColor: "#627eea",
        tension: 0.1,
      },
      {
        label: "LTC Market Cap",
        data: data.ltc.map((entry) => entry.y),
        fill: false,
        borderColor: "#b8b8b8", // Gray color for LTC
        backgroundColor: "#b8b8b8",
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="bg-background-light dark:bg-background-dark p-20 rounded shadow">
      <Line data={chartData} />
    </div>
  );
};

export default GlobalMarketCapChart;
