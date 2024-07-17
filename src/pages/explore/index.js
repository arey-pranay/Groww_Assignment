import { useEffect, useState } from "react";
import axios from "axios";
import Header from "@/components/Header";
import CoinTable from "@/components/CoinTable";
import Pagination from "@/components/Pagination";
import Watchlist from "@/components/WatchList";
import RecentlyViewed from "@/components/RecentlyViewed";

export default function Explore() {
  const [coins, setCoins] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const coinsPerPage = 20;
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/coins/list?x_cg_demo_api_key=${API_KEY}`
        );
        setCoins(response.data);
      } catch (error) {
        console.error("Error fetching coins:", error);
        // Handle error state if needed
      }
    };
    fetchCoins();
  }, [API_URL, API_KEY]);

  const indexOfLastCoin = currentPage * coinsPerPage;
  const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
  const currentCoins = coins.slice(indexOfFirstCoin, indexOfLastCoin);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Header />
      <main className="p-4">
        <section className="mb-8">
          <h1 className="text-2xl font-bold mb-4">Explore Cryptocurrencies</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="col-span-2">
              <CoinTable coins={currentCoins} />
              <div className="max-w-screen-sm">
                <Pagination
                  coinsPerPage={coinsPerPage}
                  totalCoins={coins.length}
                  paginate={paginate}
                  currentPage={currentPage}
                />
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-4">Watchlist</h2>
              <Watchlist />
              <h2 className="text-xl font-bold mb-4 mt-8">Recently Viewed</h2>
              <RecentlyViewed />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
