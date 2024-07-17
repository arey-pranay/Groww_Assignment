// components/TrendingMarket.jsx
export default function TrendingMarket() {
  // Example data for Trending Market
  const trendingMarketData = [
    {
      token: "BNB",
      symbol: "BNB",
      lastPrice: "$41,263.00",
      change: "+35.74%",
      marketCap: "$784.393M",
    },
    {
      token: "Bitcoin",
      symbol: "BTC",
      lastPrice: "$41,263.00",
      change: "+35.74%",
      marketCap: "$784.393M",
    },
    {
      token: "Ethereum",
      symbol: "ETH",
      lastPrice: "$41,263.00",
      change: "+35.74%",
      marketCap: "$784.393M",
    },
    {
      token: "Terra",
      symbol: "LUNA",
      lastPrice: "$41,263.00",
      change: "+35.74%",
      marketCap: "$784.393M",
    },
    {
      token: "Cardano",
      symbol: "ADA",
      lastPrice: "$41,263.00",
      change: "+35.74%",
      marketCap: "$784.393M",
    },
  ];

  return (
    <div>
      <div className="space-y-4">
        {trendingMarketData.map((coin) => (
          <div
            key={coin.token}
            className="flex justify-between p-4 border rounded-lg shadow-sm"
          >
            <div className="flex items-center">
              <div className="mr-4">{/* Token Icon */}</div>
              <div>
                <h2 className="font-bold">{coin.token}</h2>
                <p className="text-sm">{coin.symbol}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <p className="text-green-500">{coin.change}</p>
              <p>{coin.marketCap}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
