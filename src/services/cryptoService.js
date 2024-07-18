import axios from "axios";

export const fetchMarketCapData = async (coinId) => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/coins/${coinId}/market_chart?x_cg_demo_api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    {
      params: {
        vs_currency: "usd",
        days: "30",
      },
    }
  );
  return response.data.market_caps;
};

export const getCryptos = async () => {
  const N = 10;

  const fetchTopCryptos = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/coins/markets?vs_currency=usd&x_cg_demo_api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
      {
        params: {
          vs_currency: "usd",
          order: "market_cap_desc",
          per_page: N,
          page: 1,
        },
      }
    );
    return response.data;
  };

  const [topCryptos, btcData, ethData, ltcData] = await Promise.all([
    fetchTopCryptos(),
    fetchMarketCapData("bitcoin"),
    fetchMarketCapData("ethereum"),
    fetchMarketCapData("litecoin"),
  ]);

  return {
    topCryptos,
    btc: btcData,
    eth: ethData,
    ltc: ltcData,
  };
};
export const fetchCoinData = async (coinId) => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/coins/${coinId}?x_cg_demo_api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    {
      params: {
        localization: false,
        tickers: false,
        market_data: true,
        community_data: false,
        developer_data: false,
        sparkline: false,
        x_cg_demo_api_key: process.env.NEXT_PUBLIC_API_KEY,
      },
    }
  );
  return response.data;
};
const getUnixTimestamp = (date) => Math.floor(date.getTime() / 1000);

export const fetchSingleCryptoMarketCapData = async (cryptoId) => {
  const now = new Date();
  const startOfDay = new Date(now.setHours(0, 0, 0, 0));
  const oneDayAgo = new Date(startOfDay.getTime() - 24 * 60 * 60 * 1000);

  const startTimestamp = getUnixTimestamp(oneDayAgo);
  const endTimestamp = getUnixTimestamp(startOfDay);

  const response = await axios.get(
    `https://api.coingecko.com/api/v3/coins/${cryptoId}/market_chart/range?x_cg_demo_api_key=${process.env.NEXT_PUBLIC_API_KEY}&vs_currency=usd&from=${startTimestamp}&to=${endTimestamp}`
  );
  // console.log(response.data.market_caps);
  return response.data.market_caps;
};
