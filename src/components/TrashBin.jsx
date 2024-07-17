import React from "react";
import { useDrop } from "react-dnd";
import { useDispatch } from "react-redux";
import { removeFromWatchlist } from "../store/slices/watchlistSlice";

export default function TrashBin() {
  const dispatch = useDispatch();

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "COIN",
    drop: (item) => dispatch(removeFromWatchlist(item.coin)),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`p-4 border rounded mt-2 ${
        isOver ? "bg-red-800 dark:bg-red-500" : "bg-red-200 dark:bg-red-800"
      }`}
    >
      <h2 className="text-xl font-bold mb-4">Trash Bin 🥫</h2>
      <p className="text-xs">Drag here to remove from watchlist</p>
    </div>
  );
}
