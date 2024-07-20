import React from "react";
import Link from "next/link";
import { useDrag } from "react-dnd";

const formatNumber = (num) => {
  return num.toLocaleString("en-US");
};

const HomeCoinRow = ({ coin }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "COIN",
    item: { coin },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <tr
      ref={drag}
      key={coin.id}
      className={`dark:bg-gray-700 text-gray-900 dark:text-white text-left hover:scale-95 duration-200 ${
        isDragging ? "opacity-50" : ""
      }`}
    >
      <td className="py-3 px-4 border-b text-left">
        <Link href={`/crypto/${coin.id}`}>
          <h1 className="flex items-center space-x-2  hover:underline">
            <img src={coin.image} alt={coin.name} className="w-6 h-6" />
            <span className="font-medium">{coin.name}</span>
          </h1>
        </Link>
      </td>
      <td className="py-3 px-4 border-b">${formatNumber(coin.market_cap)}</td>
      <td className="py-3 px-4 border-b">
        ${formatNumber(coin.current_price)}
      </td>
      <td
        className={`py-3 px-4 border-b ${
          coin.price_change_percentage_24h >= 0
            ? "text-green-500"
            : "text-red-500"
        }`}
      >
        {coin.price_change_percentage_24h.toFixed(2)}%
      </td>
    </tr>
  );
};

export default HomeCoinRow;
