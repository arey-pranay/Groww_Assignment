import { useState, useEffect, useRef } from "react";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";
import darkLogo from "@/components/assets/DarkLogo.gif";
import lightLogo from "@/components/assets/LightLogo.gif";
import Link from "next/link";
import axios from "axios";

const Header = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [recentlyClicked, setRecentlyClicked] = useState([]);
  const searchRef = useRef(null);

  const handleSearch = async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 0) {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/coins/markets?vs_currency=usd&per_page=200&x_cg_demo_api_key=${process.env.NEXT_PUBLIC_API_KEY}`
      );

      const filteredResults = response.data.filter((coin) =>
        coin.name.toLowerCase().includes(value.toLowerCase())
      );

      setResults(filteredResults.slice(0, 5)); // Show top 5 results
      setShowResults(true);
    } else {
      // If query is empty, show recently clicked items
      setResults(recentlyClicked.slice(0, 5));
      setShowResults(true);
    }
  };

  const handleClickOutside = (e) => {
    if (searchRef.current && !searchRef.current.contains(e.target)) {
      if (
        e.target.closest(".search-results") === null &&
        e.target.closest(".search-input") === null
      ) {
        setShowResults(false);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleResultClick = (result) => {
    // Add clicked result to recently clicked items
    setRecentlyClicked([result, ...recentlyClicked.slice(0, 4)]);
    console.log(recentlyClicked);
    // Navigate to result's link
    window.location.href = `/crypto/${result.id}`;
  };

  return (
    <div className="flex flex-col gap-4">
      <header className="p-0 bg-primary-light dark:bg-primary-dark text-white flex justify-between items-center px-4 py-1">
        <Link href={"/"}>
          <div>
            <Image
              alt=""
              className="hidden dark:block"
              src={darkLogo}
              width={120}
              height={40}
            />
            <Image
              alt=""
              className="dark:hidden"
              src={lightLogo}
              width={120}
              height={40}
            />
          </div>
        </Link>

        <div className="hidden sm:block relative">
          <input
            type="text"
            value={query}
            onChange={handleSearch}
            className="search-input p-2 rounded border border-gray-300 text-black dark:text-white dark:bg-gray-800"
            placeholder="Search..."
          />
          {showResults && results.length > 0 && (
            <ul className="search-results absolute mt-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded shadow-lg w-full max-h-60 overflow-y-auto z-10">
              {results.map((result) => (
                <li key={result.id}>
                  {/* <Link href={`/crypto/${result.id}`}> */}
                  <h1
                    className="block text-black dark:text-white px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                    onClick={() => handleResultClick(result)}
                  >
                    {result.name}
                  </h1>
                  {/* </Link> */}
                </li>
              ))}
            </ul>
          )}
        </div>

        <ThemeToggle />
      </header>
      <div className="sm:hidden block relative w-[90%] mx-4" ref={searchRef}>
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          className="p-2 w-full rounded border border-gray-300 text-black dark:text-white dark:bg-gray-800"
          placeholder="Search..."
        />
        {showResults && results.length > 0 && (
          <ul className="absolute mt-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded shadow-lg w-full max-h-60 overflow-y-auto z-10">
            {results.map((result) => (
              <li key={result.id}>
                <Link href={`/crypto/${result.id}`}>
                  <h1
                    className="block text-black dark:text-white px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                    onClick={() => handleResultClick(result)}
                  >
                    {result.name}
                  </h1>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
