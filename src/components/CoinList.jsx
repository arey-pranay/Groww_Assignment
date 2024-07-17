import React from "react";
import Link from "next/link"; // Assuming you're using Next.js

// Utility function to format numbers consistently
const formatNumber = (num) => {
  return num.toLocaleString("en-US"); // Use "en-IN" locale for Indian numbering system
};

export default function CoinList({ coins }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white dark:bg-transparent border border-gray-200 rounded-lg">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Market Cap</th>
            <th className="py-2 px-4 border-b">Price</th>
            <th className="py-2 px-4 border-b">24h Change</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => (
            <tr key={coin.id} className="text-center">
              <td className="py-2 px-4 border-b flex items-center">
                <Link href={`/crypto/${coin.id}`}>
                  <div className="flex items-center">
                    <img
                      src={coin.image}
                      alt={coin.name}
                      className="w-6 h-6 mr-2"
                    />
                    {coin.name}
                  </div>
                </Link>
              </td>
              <td className="py-2 px-4 border-b">
                ${formatNumber(coin.market_cap)}
              </td>
              <td className="py-2 px-4 border-b">
                ${formatNumber(coin.current_price)}
              </td>
              <td
                className={`py-2 px-4 border-b ${
                  coin.price_change_percentage_24h >= 0
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {coin.price_change_percentage_24h.toFixed(2)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
