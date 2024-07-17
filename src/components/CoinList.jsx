import Link from "next/link";

const CoinList = ({ coins }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {coins.map((coin) => (
        <Link key={coin.id} href={`/crypto/${coin.id}`}>
          <div className="border p-4 rounded cursor-pointer hover:bg-secondary-light dark:hover:bg-secondary-dark">
            <h2 className="text-xl font-bold">{coin.name}</h2>
            <p className="text-sm">${coin.current_price.toLocaleString()}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CoinList;
