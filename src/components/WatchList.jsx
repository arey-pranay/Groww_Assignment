import React from "react";
import { useDrop } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { addToWatchlist } from "../store/slices/watchlistSlice";
import WatchlistItem from "./WatchListItem";

export default function Watchlist() {
  const dispatch = useDispatch();
  const watchlist = useSelector((state) => state.watchlist);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "COIN",
    drop: (item) => dispatch(addToWatchlist(item.coin)),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`p-4 border rounded min-h-40 ${
        isOver ? "bg-purple-900" : "bg-primary-light dark:bg-primary-dark"
      }`}
    >
      <div className="flex justify-between">
        {watchlist.length > 0 ? (
          <>
            <h2 className="text-xl font-bold mb-4">Cryptocurrency </h2>
            <h2 className="text-xl font-bold mb-4"> Price </h2>
          </>
        ) : (
          <h2 className="text-sm">
            Drop a currency here, to add it to your watchlist.{" "}
          </h2>
        )}
      </div>

      <ul>
        {watchlist.map((coin) => (
          <WatchlistItem key={coin.id} coin={coin} />
        ))}
      </ul>
    </div>
  );
}
