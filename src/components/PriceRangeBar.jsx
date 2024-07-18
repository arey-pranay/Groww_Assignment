import React from "react";

const PriceRangeBar = ({ currentPrice, highPrice, lowPrice }) => {
  const getPercentage = (current, low, high) => {
    if (high === low) return 50;
    return ((current - low) / (high - low)) * 100;
  };

  const percentage = getPercentage(currentPrice, lowPrice, highPrice);

  return (
    <div className="w-full my-5">
      <div className="relative h-4 bg-gray-300 rounded-full">
        <div
          className="absolute top-0 h-4 bg-green-500 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
        <div
          className="absolute top-0 left-0 transform -translate-x-1/2"
          style={{ left: `${percentage}%` }}
        >
          <div className="relative group">
            <div className="bg-yellow-500 h-4 w-4 rounded-full"></div>
            <span className="absolute bottom-full mb-2 w-max p-1 text-sm text-white bg-primary-light dark:bg-primary-dark rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Current Price: ${currentPrice.toLocaleString("en-US")}
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-between text-lg text-gray-800 dark:text-white my-2">
        <span className="font-bold ">
          Today's Low:{" "}
          <span className="text-red-500">
            ${lowPrice.toLocaleString("en-US")}
          </span>
        </span>
        <span className="font-bold  ">
          Today's High:{" "}
          <span className="text-green-500">
            ${highPrice.toLocaleString("en-US")}
          </span>
        </span>
      </div>
    </div>
  );
};

export default PriceRangeBar;
