// components/RecentlyViewed.js
import { useSelector } from "react-redux";

const RecentlyViewed = () => {
  const recentlyViewed = useSelector((state) => state.recentlyViewed);

  return (
    <div className="recently-viewed">
      <h2>Recently Viewed</h2>
      {recentlyViewed.length > 0 ? (
        <ul>
          {recentlyViewed.map((crypto) => (
            <li key={crypto.id}>
              <a href={`/crypto/${crypto.id}`}>{crypto.name}</a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No recently viewed cryptocurrencies.</p>
      )}
    </div>
  );
};

export default RecentlyViewed;
