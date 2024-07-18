// pages/crypto/[id].js
import { useEffect } from "react";
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

const CryptoDetails = ({ crypto }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { id } = router.query;

  useEffect(() => {
    if (crypto) {
      dispatch(addRecentlyViewed(crypto));
    }
  }, [crypto, dispatch]);

  if (!crypto) {
    return <div>Loading...</div>;
  }

  const formatNumber = (num) => {
    return num.toLocaleString("en-US");
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-GB", options); // "en-GB" for DD/MM/YYYY format
  };

  const getInitialSentences = (text, count) => {
    const sentences = text.split(".").filter(Boolean);
    return sentences.slice(0, count).join(". ") + ".";
  };

  return (
    <div className="overflow-hidden">
      <Header />
      <div className="container mx-auto p-4">
        <div className="flex flex-col items-center shadow-lg rounded-lg p-6">
          <div className="flex justify-between items-center w-full mb-12">
            <img
              src={crypto.image.large}
              alt={crypto.name}
              className="w-20 h-20 rotate-slow"
            />
            <h1 className="text-3xl font-bold mt-4 hover:tracking-widest transition-all duration-150">
              {crypto.name}
            </h1>
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
