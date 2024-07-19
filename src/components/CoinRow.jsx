import React from "react";
import { useDrag } from "react-dnd";
import { useDispatch } from "react-redux";
import Link from "next/link";

const CoinRow = ({ coin }) => {
  const dispatch = useDispatch();

  const formatNumberInt = (num) => {
    return num.toLocaleString("en-US");
  };

  const formatDecimalNumber = (num, digit) => {
    return parseFloat(num).toFixed(digit);
  };

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
      className={`hover:scale-95 duration-200 text-center ${
        isDragging ? "opacity-50" : ""
      }`}
    >
      <td className="py-3 px-4 border-b">{coin.market_cap_rank}</td>

      <td className="py-3 px-4 border-b hover:underline">
        <Link href={`/crypto/${coin.id}`}>
          <h1 className="flex items-center space-x-2">
            <img src={coin.image} alt={coin.name} className="w-6 h-6" />
            <span className="font-medium">{coin.name}</span>
          </h1>
        </Link>
      </td>

      <td className="py-3 px-4 border-b">
        ${formatNumberInt(coin.market_cap)}
      </td>

      <td className="py-3 px-4 border-b">
        ${formatNumberInt(coin.current_price)}
      </td>

      <td
        className={`py-3 px-4 border-b ${
          coin.price_change_percentage_24h < 0
            ? "text-red-500"
            : "text-green-500"
        }`}
      >
        {formatDecimalNumber(coin.price_change_percentage_24h, 2)}%
      </td>

      <td className="py-3 px-4 border-b">
        ${formatDecimalNumber(coin.ath, 2)}
      </td>

      <td className="py-3 px-4 border-b">
        ${formatDecimalNumber(coin.atl, 2)}
      </td>
    </tr>
  );
};

export default CoinRow;
