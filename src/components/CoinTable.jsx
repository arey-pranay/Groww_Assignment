import React from "react";
import { useDrag } from "react-dnd";
import { useDispatch } from "react-redux";
import { addToWatchlist } from "../store/slices/watchlistSlice";

const CoinRow = ({ coin }) => {
  const dispatch = useDispatch();
  const formatNumber = (num) => {
    return num.toLocaleString("en-US");
  };

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "COIN",
    item: { coin },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <tr ref={drag} className={`text-center ${isDragging ? "opacity-50" : ""}`}>
      <td className="py-2 px-4 border-b flex items-center">
        <img src={coin.image} alt={coin.name} className="w-6 h-6 mr-2" />
        {coin.name}
      </td>
      <td className="py-2 px-4 border-b">{coin.market_cap_rank}</td>
      <td className="py-2 px-4 border-b">${formatNumber(coin.market_cap)}</td>
      <td className="py-2 px-4 border-b">
        ${formatNumber(coin.current_price)}
      </td>
      <td
        className={`py-2 px-4 border-b ${
          coin.price_change_percentage_24h < 0
            ? "text-red-500"
            : "text-green-500"
        }`}
      >
        {coin.price_change_percentage_24h}%
      </td>
      <td className="py-2 px-4 border-b">{coin.ath}</td>
      <td className="py-2 px-4 border-b">{coin.atl}</td>
    </tr>
  );
};

export default function CoinTable({ coins }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white dark:bg-transparent border border-gray-200 rounded-lg">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">MC Rank</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Market Cap</th>
            <th className="py-2 px-4 border-b">Price</th>
            <th className="py-2 px-4 border-b">Change % in 1h</th>
            <th className="py-2 px-4 border-b">ATH</th>
            <th className="py-2 px-4 border-b">ATL</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => (
            <CoinRow key={coin.id} coin={coin} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
