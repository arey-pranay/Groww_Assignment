import React from "react";
import { useDrag } from "react-dnd";

export default function WatchlistItem({ coin }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "COIN",
    item: { coin },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  const formatDecimalNumber = (num, digit) => {
    return parseFloat(num).toFixed(digit).toLocaleString("en-US");
  };

  return (
    <div
      ref={drag}
      className={`p-2 border rounded mb-2 ${
        isDragging ? "bg-gray-200" : "bg-white"
      }`}
    >
      <div className="flex items-center text-center justify-between">
        {/* {console.log(coin)}{" "} */}
        <div className="flex gap-2">
          <img src={coin.image} alt={coin.name} className="w-6 h-6 mr-2" />
          <p className="dark:text-black"> {coin.name}</p>
        </div>
        <p className="dark:text-black">
          {" "}
          $ {formatDecimalNumber(coin.current_price, 3)}
        </p>
        {/* {coin.roi ? (
          <p className="dark:text-black">
            {" "}
            {formatDecimalNumber(coin.roi?.percentage, 2)}%
          </p>
        ) : (
          <p className="text-black">ROI not Known</p>
        )} */}
      </div>
    </div>
  );
}
