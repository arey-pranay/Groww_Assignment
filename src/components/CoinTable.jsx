import React from "react";

export default function CoinTable({ coins }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white dark:bg-transparent border border-gray-200 rounded-lg">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Market Cap</th>
            <th className="py-2 px-4 border-b">Balance</th>
            <th className="py-2 px-4 border-b">Price</th>
            <th className="py-2 px-4 border-b">7D</th>
            <th className="py-2 px-4 border-b">30D</th>
            <th className="py-2 px-4 border-b">1Y</th>
            <th className="py-2 px-4 border-b">Today</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => (
            <tr key={coin.id} className="text-center">
              <td className="py-2 px-4 border-b flex items-center">
                {/* <img
                  // src={coin.image}
                  alt={coin.name}
                  className="w-6 h-6 mr-2"
                /> */}
                {coin.name}
              </td>
              <td className="py-2 px-4 border-b">{coin.market_cap}</td>
              <td className="py-2 px-4 border-b">$5,777</td>
              <td className="py-2 px-4 border-b">{coin.current_price}</td>
              <td className="py-2 px-4 border-b text-green-500">+5.1%</td>
              <td className="py-2 px-4 border-b text-red-500">-27.4%</td>
              <td className="py-2 px-4 border-b text-green-500">+1M%</td>
              <td className="py-2 px-4 border-b text-green-500">+7.7%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
