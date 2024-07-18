import Image from "next/image";
import { useSelector } from "react-redux";

const RecentlyViewed = () => {
  const recentlyViewed = useSelector((state) => state.recentlyViewed);

  const formatNumber = (num) => {
    return num.toLocaleString("en-US");
  };

  return (
    <div className="recently-viewed">
      {/* <h2>Recently Viewed</h2> */}
      {recentlyViewed && recentlyViewed.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-transparent border border-gray-200 rounded-lg">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Price</th>
                <th className="py-2 px-4 border-b">Change % 1h</th>
              </tr>
            </thead>
            <tbody>
              {recentlyViewed.map((crypto) => (
                <tr key={crypto.id} className="text-center">
                  <td className="py-2 px-4 border-b flex">
                    {" "}
                    <Image
                      src={crypto.image.small}
                      alt={crypto.name}
                      width={20}
                      height={20}
                      layout="fixed"
                      className="w-6 h-6 mr-2"
                    />{" "}
                    {crypto.name}
                  </td>
                  <td className="py-2 px-4 border-b">
                    ${formatNumber(crypto.market_data.current_price.usd)}
                  </td>
                  <td
                    className={`py-2 px-4 border-b ${
                      crypto.market_data.price_change_percentage_1h_in_currency
                        .usd < 0
                        ? "text-red-500"
                        : "text-green-500"
                    }`}
                  >
                    {
                      crypto.market_data.price_change_percentage_1h_in_currency
                        .usd
                    }
                    %
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>View a currency and then check back here. </p>
      )}
    </div>
  );
};

export default RecentlyViewed;
