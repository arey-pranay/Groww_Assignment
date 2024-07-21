import { useEffect, useState } from "react";
import axios from "axios";
import Header from "@/components/Header";
import CoinTable from "@/components/CoinTable";
import Pagination from "@/components/Pagination";
import Watchlist from "@/components/WatchList";
import RecentlyViewed from "@/components/RecentlyViewed";
import TrashBin from "@/components/TrashBin";
import { useRouter } from "next/router";
import Loading from "@/components/Loading";
import Footer from "@/components/Footer";

export default function Explore() {
  const [coins, setCoins] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const coinsPerPage = 20;

  useEffect(() => {
    const fetchCoins = async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/coins/markets?vs_currency=usd&per_page=200&x_cg_demo_api_key=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      // console.log(response.data);
      setCoins(response.data);
    };
    fetchCoins();
  }, []);

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastCoin = currentPage * coinsPerPage;
  const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
  const currentCoins = filteredCoins.slice(indexOfFirstCoin, indexOfLastCoin);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);
  return (
    <div>
      <Header />
      {loading && <Loading />}

      <main className="p-4">
        <section className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between mb-8">
            <h1 className="text-2xl font-bold">Explore Cryptocurrencies</h1>
            <input
              type="text"
              placeholder="Type and see the table change"
              className="w-full sm:w-1/3 p-2 border outline-none border-gray-300 rounded text-black"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="col-span-2 ">
              <CoinTable coins={currentCoins} />
              <div className="">
                <Pagination
                  coinsPerPage={coinsPerPage}
                  totalCoins={filteredCoins.length}
                  paginate={paginate}
                  currentPage={currentPage}
                />
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-4">Watchlist</h2>
              <Watchlist />
              <TrashBin />
              <h2 className="text-xl font-bold mb-4 mt-8">Recently Viewed</h2>
              <RecentlyViewed />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
