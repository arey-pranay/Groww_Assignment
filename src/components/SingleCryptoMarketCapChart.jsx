import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { fetchSingleCryptoMarketCapData } from "../services/cryptoService";
import { Chart, TimeScale } from "chart.js";
import "chartjs-adapter-date-fns";

Chart.register(TimeScale);

const SingleCryptoMarketCapChart = ({ cryptoId, cryptoName }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const marketCapData = await fetchSingleCryptoMarketCapData(cryptoId);
      const formatData = (data) => {
        return data.map(([timestamp, value]) => ({
          x: new Date(timestamp),
          y: value,
        }));
      };

      setData(formatData(marketCapData));
    };

    fetchData();
  }, [cryptoId]);

  const chartData = {
    datasets: [
      {
        label: `${cryptoName} Market Cap (Last 24 Hours)`,
        data: data,
        fill: false,
        borderColor: "#ff9900",
        backgroundColor: "#ff9900",
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: "time",
        time: {
          unit: "hour",
          tooltipFormat: "PPpp",
        },
        title: {
          display: true,
          text: "Time",
        },
      },
      y: {
        title: {
          display: true,
          text: "Market Cap",
        },
        ticks: {
          callback: function (value) {
            return `${(value / 1e6).toFixed(2)} M`;
          },
        },
      },
    },
  };

  return (
    <div className="bg-background-light w-full dark:bg-background-dark p-6 rounded shadow">
      <div className="relative h-64 sm:h-80 lg:h-96">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default SingleCryptoMarketCapChart;
