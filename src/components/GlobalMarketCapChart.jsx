import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { fetchMarketCapData } from "../services/cryptoService";
import "chartjs-adapter-date-fns";

const GlobalMarketCapChart = () => {
  const [data, setData] = useState({ btc: [], eth: [], ltc: [] });

  useEffect(() => {
    const fetchData = async () => {
      const btcData = await fetchMarketCapData("binancecoin");
      const ethData = await fetchMarketCapData("solana");
      const ltcData = await fetchMarketCapData("usd-coin");

      const formatData = (data) => {
        return data.map(([timestamp, value]) => ({
          x: new Date(timestamp),
          y: value,
        }));
      };

      setData({
        btc: formatData(btcData),
        eth: formatData(ethData),
        ltc: formatData(ltcData),
      });
    };

    fetchData();
  }, []);

  const chartData = {
    datasets: [
      {
        label: "BNB Market Cap",
        data: data.btc,
        fill: false,
        borderColor: "#f7931a",
        backgroundColor: "#f7931a",
        tension: 0.01,
      },
      {
        label: "Solana Market Cap",
        data: data.eth,
        fill: false,
        borderColor: "#627eea",
        backgroundColor: "#627eea",
        tension: 0.01,
      },
      {
        label: "USDC Market Cap",
        data: data.ltc,
        fill: false,
        borderColor: "#b8b8b8",
        backgroundColor: "#b8b8b8",
        tension: 0.01,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: "time",
        time: {
          unit: "day",
          tooltipFormat: "PP",
        },
        title: {
          display: true,
          text: "Date",
        },
      },
      y: {
        title: {
          display: true,
          text: "Market Cap (USD)",
        },
      },
    },
  };

  return (
    <div className="bg-background-light dark:bg-background-dark p-20 rounded shadow">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default GlobalMarketCapChart;
