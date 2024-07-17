import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setCryptos } from "../store/slices/cryptoSlice";
import { getCryptos } from "../services/cryptoService";
import Header from "../components/Header";
import GlobalMarketCapChart from "../components/GlobalMarketCapChart";
import CoinList from "../components/CoinList";
import Watchlist from "@/components/WatchList";
import RecentlyViewed from "../components/RecentlyViewed";
import TrendingMarket from "../components/TrendingMarket";
import Footer from "@/components/Footer";
import TrashBin from "@/components/TrashBin";
import Link from "next/link";

export default function Home({ topCryptos, btc, eth, ltc }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCryptos([topCryptos]));
  }, [topCryptos, dispatch]);

  const formatChartData = (data) => {
    return data.map(([timestamp, value]) => ({
      x: new Date(timestamp).toLocaleDateString(),
      y: value,
    }));
  };

  const chartData = {
    btc: formatChartData(btc),
    eth: formatChartData(eth),
    ltc: formatChartData(ltc),
  };

  return (
    <div>
      <Header />
      <main className="p-4">
        <section className="mb-8">
          <div className="flex justify-between">
            {" "}
            <h1 className="text-2xl font-bold mb-4">Global Market Cap</h1>
            <Link href="/explore">
              <button className="p-2 rounded border-2 border-primary-light dark:border-primary-dark hover:text-white  hover:bg-primary-light dark:hover:bg-primary-dark ">
                Explore New Cryptos
              </button>
            </Link>
          </div>

          <GlobalMarketCapChart data={chartData} />
        </section>
        <section className="grid grid-cols-1 sm:grid-cols-3 sm:gap-4">
          <div className="col-span-2">
            <h1 className="text-2xl font-bold mb-4">Top Cryptocurrencies</h1>
            <CoinList coins={topCryptos} />
          </div>
          <div className=" ">
            <h1 className="text-2xl font-bold mb-4">WatchList</h1>
            <Watchlist />
            <TrashBin />
          </div>
        </section>
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
          <div className="col-span-2">
            <h1 className="text-2xl font-bold mb-4">Trending Market</h1>
            <TrendingMarket />
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-4">Recently Viewed</h1>
            <RecentlyViewed />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const { topCryptos, btc, eth, ltc } = await getCryptos();

  return {
    props: {
      topCryptos,
      btc,
      eth,
      ltc,
    },
  };
}
