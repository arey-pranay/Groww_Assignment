import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { fetchMarketCapData } from "../services/cryptoService";

const GlobalMarketCapChart = () => {
  const [data, setData] = useState({ btc: [], eth: [], ltc: [] });

  useEffect(() => {
    const fetchData = async () => {
      const btcData = await fetchMarketCapData("bitcoin");
      const ethData = await fetchMarketCapData("ethereum");
      const ltcData = await fetchMarketCapData("litecoin");

      const formatData = (data) => {
        return data.map(([timestamp, value]) => ({
          x: new Date(timestamp).getHours(),
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
    labels: data.btc.map((entry) => entry.x),
    datasets: [
      {
        label: "BTC Market Cap",
        data: data.btc.map((entry) => entry.y),
        fill: false,
        borderColor: "#f7931a",
        backgroundColor: "#f7931a",
        tension: 0.1,
      },
      {
        label: "ETH Market Cap",
        data: data.eth.map((entry) => entry.y),
        fill: false,
        borderColor: "#627eea",
        backgroundColor: "#627eea",
        tension: 0.1,
      },
      {
        label: "LTC Market Cap",
        data: data.ltc.map((entry) => entry.y),
        fill: false,
        borderColor: "#b8b8b8",
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
