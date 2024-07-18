import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { fetchCoinData } from "../../services/cryptoService";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import RecentlyViewed from "../../components/RecentlyViewed";
import TrendingMarket from "../../components/TrendingMarket";
import PriceRangeBar from "../../components/PriceRangeBar";
import LinksComponent from "../../components/LinksComponent";
import SingleCryptoMarketCapChart from "../../components/SingleCryptoMarketCapChart";
import { addRecentlyViewed } from "@/store/slices/recentlyViewedSlice";
import { addToWatchlist } from "@/store/slices/watchlistSlice";

const CryptoDetails = ({ crypto }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { id } = router.query;

  useEffect(() => {
    if (crypto) {
      dispatch(addRecentlyViewed(crypto));
    }
  }, [crypto, dispatch]);
  // console.log(crypto);
  if (!crypto) {
    return <div>Loading...</div>;
  }

  const formatNumber = (num) => {
    return num.toLocaleString("en-US");
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-GB", options);
  };

  const getInitialSentences = (text, count) => {
    const sentences = text.split(".").filter(Boolean);
    return sentences.slice(0, count).join(". ") + ".";
  };
  const [notAdded, setNotAdded] = useState(true);
  const addToWatchlistFunc = () => {
    if (notAdded)
      dispatch(
        addToWatchlist({
          id: crypto.id,
          image: crypto.image.small,
          name: crypto.name,
          current_price: crypto.market_data.current_price.usd,
        })
      );
    setNotAdded(false);
  };

  return (
    <div className="overflow-hidden">
      <Header />
      <div className="container mx-auto p-4">
        <div className="flex flex-col items-center shadow-lg rounded-lg p-6">
          <div className="flex justify-between items-center w-full mb-12">
            <h1 className="hidden sm:block text-3xl font-bold mt-4 hover:tracking-widest transition-all duration-150">
              {crypto.name}
            </h1>
            <img
              src={crypto.image.large}
              alt={crypto.name}
              className="w-20 h-20 rotate-slow"
            />
            <button
              onClick={addToWatchlistFunc}
              className="rounded  font-semibold p-3 text-white bg-primary-light dark:bg-primary-light hover:bg-primary-dark hover:dark:bg-primary-dark  hover-border-2 border-primary-dark"
            >
              {notAdded ? "Add to Watchlist ⌚" : "Successfully Added"}
            </button>
          </div>
          <SingleCryptoMarketCapChart
            cryptoId={crypto.id}
            cryptoName={crypto.name}
          />
          <div className="flex justify-start w-full my-4">
            <div className="flex gap-2 items-center">
              <h2 className="text-xl font-semibold">Market Cap:</h2>
              <p>${formatNumber(crypto.market_data.market_cap.usd)}</p>
            </div>
          </div>
          <p className="dark:text-gray-50 text-gray-800">
            {getInitialSentences(crypto.description.en, 4)}
          </p>
          <div className="flex w-full my-7 justify-between">
            <div className="">
              <h1>
                Total Supply: {formatNumber(crypto.market_data.total_supply)}
              </h1>
              <h1>
                Circulating Supply:{" "}
                {formatNumber(crypto.market_data.circulating_supply)}
              </h1>
            </div>
            <div className="">
              <h1>
                Positive Votes 👍🏼: {crypto.sentiment_votes_up_percentage}%
              </h1>
              <h1>
                Negative Votes 👎🏼: {crypto.sentiment_votes_down_percentage}%
              </h1>
            </div>
          </div>
          <PriceRangeBar
            currentPrice={crypto.market_data.current_price.usd}
            highPrice={crypto.market_data.high_24h.usd}
            lowPrice={crypto.market_data.low_24h.usd}
          />
          <div className="flex w-full justify-between p-4">
            <div>
              <h2 className="text-sm font-semibold">All-Time Low</h2>
              <p className="text-sm text-red-400">
                ${formatNumber(crypto.market_data.atl.usd)} (on{" "}
                {formatDate(crypto.market_data.atl_date.usd)})
              </p>
            </div>
            <div>
              <h2 className="text-sm font-semibold">All-Time High</h2>
              <p className="text-sm text-green-400">
                ${formatNumber(crypto.market_data.ath.usd)} (on{" "}
                {formatDate(crypto.market_data.ath_date.usd)})
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-4">
        <LinksComponent crypto={crypto} />
      </div>
      {/* <div className="flex justify-around p-10">
        <div className="w-1/3">
          <h1>Recently Viewed</h1>
          <RecentlyViewed />
        </div>
        <div className="w-1/3">
          <h1>Trending Market</h1>
          <TrendingMarket />
        </div>
      </div> */}
      <Footer />
    </div>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.params;
  const crypto = await fetchCoinData(id);
  return {
    props: {
      crypto,
    },
  };
}

export default CryptoDetails;
