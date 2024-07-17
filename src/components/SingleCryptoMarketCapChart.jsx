import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { fetchSingleCryptoMarketCapData } from "../services/cryptoService";

const SingleCryptoMarketCapChart = ({ cryptoId, cryptoName }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const marketCapData = await fetchSingleCryptoMarketCapData(cryptoId);
      const formatData = (data) => {
        return data.map(([timestamp, value]) => ({
          x: new Date(timestamp).toLocaleDateString(), // Format the date as a string
          y: value,
        }));
      };

      setData(formatData(marketCapData));
      console.log(data);
    };

    fetchData();
  }, [cryptoId]);

  const chartData = {
    labels: data?.map((entry) => entry.x),
    datasets: [
      {
        label: `${cryptoName} Market Cap`,
        data: data.map((entry) => entry.y),
        fill: false,
        borderColor: "#ff9900", // Example color
        backgroundColor: "#ff9900",
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="bg-background-light w-full  dark:bg-background-dark p-6 rounded shadow">
      {/* <h2 className="text-xl font-semibold mb-4">{cryptoName} Market Cap</h2> */}
      <Line data={chartData} />
    </div>
  );
};

export default SingleCryptoMarketCapChart;
