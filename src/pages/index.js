import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setCryptos } from "../store/slices/cryptoSlice";
import { getCryptos } from "../services/cryptoService";
import Header from "../components/Header";
import GlobalMarketCapChart from "../components/GlobalMarketCapChart";
import CoinList from "../components/CoinList";
// import Watchlist from "../components/Watchlist";
import RecentlyViewed from "../components/RecentlyViewed";
import TrendingMarket from "../components/TrendingMarket";
import Watchlist from "@/components/WatchList";

export default function Home({ cryptos }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCryptos(cryptos));
  }, [cryptos, dispatch]);

  // Example data for the Global Market Cap Chart
  const globalMarketCapData = {
    dates: [
      "2024-07-01",
      "2024-07-02",
      "2024-07-03",
      "2024-07-04",
      "2024-07-05",
    ],
    values: [1.2e12, 1.25e12, 1.3e12, 1.28e12, 1.35e12],
  };
  return (
    <div>
      <Header />
      <main className="p-4">
        <section className="mb-8">
          <h1 className="text-2xl font-bold mb-4">Global Market Cap</h1>
          <GlobalMarketCapChart data={globalMarketCapData} />
        </section>
        <section className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <h1 className="text-2xl font-bold mb-4">Top Cryptocurrencies</h1>
            <CoinList coins={cryptos} />
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-4">Watchlist</h1>
            <Watchlist />
          </div>
        </section>
        <section className="grid grid-cols-3 gap-4 mt-8">
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
    </div>
  );
}

export async function getStaticProps() {
  const cryptos = await getCryptos();

  return {
    props: {
      cryptos,
    },
  };
}
