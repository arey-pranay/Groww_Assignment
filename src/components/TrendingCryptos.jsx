import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const TrendingCryptos = () => {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    const fetchTopCryptos = async () => {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=volume_desc&per_page=5&page=1&sparkline=false&price_change_percentage=24h`
        );
        setCryptos(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchTopCryptos();
  }, []);

  const formatDecimalNumber = (num, digit) => {
    return parseFloat(num).toFixed(digit);
  };
  const formatNumber = (num) => {
    return num.toLocaleString("en-US");
  };
  return (
    <div className="rounded-lg shadow-md">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Crypto
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Total Volume
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price (USD)
            </th>
            <th className="hidden sm:block px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              24h Change
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 dark:bg-transparent">
          {/* {console.log(cryptos)} */}
          {cryptos.map((crypto) => (
            <tr key={crypto.id} className="bg-white dark:bg-gray-700">
              <td className="px-6 py-4 whitespace-nowrap">
                <Link href={`/crypto/${crypto.id}`}>
                  <div className="flex hover:underline items-center">
                    <div className="flex-shrink-0">
                      <img
                        src={crypto.image}
                        alt={crypto.name}
                        className="hidden sm:block w-10 h-10 rounded-full"
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        {crypto.symbol.toUpperCase()}
                      </div>
                    </div>
                  </div>
                </Link>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                {formatNumber(crypto.total_volume)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                ${formatDecimalNumber(crypto.current_price, 2)}
              </td>
              <td
                className={`hidden sm:block px-6 py-4 whitespace-nowrap text-sm ${
                  crypto.price_change_percentage_24h > 0
                    ? "text-green-600"
                    : "text-red-600"
                } dark:text-gray-400`}
              >
                {formatDecimalNumber(crypto.price_change_percentage_24h, 2)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrendingCryptos;
