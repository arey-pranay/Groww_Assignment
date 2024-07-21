import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { fetchMarketCapData } from "../services/cryptoService";
import "chartjs-adapter-date-fns";
import customLoader from "@/components/assets/customLoader.svg";
import Image from "next/image";
const GlobalMarketCapChart = () => {
  const [data, setData] = useState({ btc: [], eth: [], ltc: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
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
      } catch (error) {
        console.error("Error fetching market cap data:", error);
      } finally {
        setLoading(false);
      }
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
        tension: 0.1,
      },
      {
        label: "Solana Market Cap",
        data: data.eth,
        fill: false,
        borderColor: "#627eea",
        backgroundColor: "#627eea",
        tension: 0.1,
      },
      {
        label: "USDC Market Cap",
        data: data.ltc,
        fill: false,
        borderColor: "#b8b8b8",
        backgroundColor: "#b8b8b8",
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
          unit: "day",
          tooltipFormat: "PP",
        },
        title: {
          display: true,
          text: "Date",
        },
        ticks: {
          maxRotation: 45,
          minRotation: 30,
        },
      },
      y: {
        ticks: {
          callback: function (value) {
            const isMobile = window.innerWidth <= 768;
            if (isMobile) {
              return `${(value / 1e9).toFixed(2)} B`;
            } else {
              return `${(value / 1e6).toFixed(2)} M`;
            }
          },
        },
        title: {
          display: true,
          text: "Market Cap (USD)",
        },
      },
    },
  };

  return (
    <div className="bg-background-light dark:bg-background-dark p-4 sm:p-6 md:p-8 lg:p-10 rounded shadow">
      <div className="relative h-64 sm:h-80 md:h-96 lg:h-112 flex items-center justify-center">
        {loading ? (
          <div className="flex flex-col gap-4 items-center justify-center">
            <Image src={customLoader} alt="CustomLoader" />
            <h1 className="font-bold text-primary-dark">
              Just a sec, huge data being processed
            </h1>
          </div>
        ) : (
          <Line data={chartData} options={options} />
        )}
      </div>
    </div>
  );
};

export default GlobalMarketCapChart;
