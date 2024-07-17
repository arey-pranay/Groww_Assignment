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

  return (
    <div
      ref={drag}
      className={`p-2 border rounded mb-2 ${
        isDragging ? "bg-gray-200" : "bg-white"
      }`}
    >
      <div className="flex items-center">
        <img src={coin.image} alt={coin.name} className="w-6 h-6 mr-2" />
        <p className="dark:text-black"> {coin.name}</p>
      </div>
    </div>
  );
}
