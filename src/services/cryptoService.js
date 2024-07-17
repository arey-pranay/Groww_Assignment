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
      `${process.env.NEXT_PUBLIC_API_URL}/coins/markets?x_cg_demo_api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
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
    `${process.env.NEXT_PUBLIC_API_URL}/coins/${coinId}`,
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
