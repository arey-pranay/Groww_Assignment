export default function Watchlist() {
  const watchlistData = [
    {
      token: "BNB",
      lastPrice: "$41,263.00",
      change: "+35.74%",
      marketCap: "$784.393M",
    },
    {
      token: "Bitcoin",
      lastPrice: "$41,263.00",
      change: "+35.74%",
      marketCap: "$784.393M",
    },
    {
      token: "Ethereum",
      lastPrice: "$41,263.00",
      change: "+35.74%",
      marketCap: "$784.393M",
    },
    {
      token: "Terra",
      lastPrice: "$41,263.00",
      change: "+35.74%",
      marketCap: "$784.393M",
    },
    {
      token: "Cardano",
      lastPrice: "$41,263.00",
      change: "+35.74%",
      marketCap: "$784.393M",
    },
  ];

  return (
    <div>
      <div className="space-y-4">
        {watchlistData.map((coin) => (
          <div
            key={coin.token}
            className="flex justify-between p-4 border rounded-lg shadow-sm"
          >
            <div className="flex items-center">
              <div className="mr-4">{/* Token Icon */}</div>
              <div>
                <h2 className="font-bold">{coin.token}</h2>
                <p className="text-sm">{coin.lastPrice}</p>
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
