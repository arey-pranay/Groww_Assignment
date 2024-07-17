import React, { useEffect, useState } from "react";

const TrendingCryptos = () => {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    const fetchTopCryptos = async () => {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1`
      );
      const data = await response.json();
      setCryptos(data);
    };

    fetchTopCryptos();
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Top Trending Cryptocurrencies
      </h2>
      <ul>
        {cryptos.map((crypto) => (
          <li key={crypto.id} className="flex items-center mb-4">
            <img
              src={crypto.image}
              alt={crypto.name}
              className="w-10 h-10 mr-3"
            />
            <div>
              <h3 className="text-lg font-semibold">{crypto.name}</h3>
              <p className="text-gray-600">{crypto.symbol.toUpperCase()}</p>
              <p className="text-gray-500">
                ${crypto.current_price.toLocaleString()}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingCryptos;
