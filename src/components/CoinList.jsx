import React from "react";
import HomeCoinRow from "./HomeCoinRow";

const CoinList = ({ coins }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-center bg-white dark:bg-transparent border border-gray-200 rounded-lg">
        <thead>
          <tr className="bg-gray-50 dark:bg-gray-800">
            <th className="py-3 px-4 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="py-3 px-4 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Market Cap
            </th>
            <th className="py-3 px-4 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price
            </th>
            <th className="py-3 px-4 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              24h Change
            </th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => (
            <HomeCoinRow key={coin.id} coin={coin} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinList;
