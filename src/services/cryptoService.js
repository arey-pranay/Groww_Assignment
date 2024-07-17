import axios from "axios";

export const getCryptos = async () => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/coins/markets?x_cg_demo_api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    {
      params: {
        vs_currency: "usd",
        order: "market_cap_desc",
        per_page: 20,
        page: 1,
        sparkline: false,
      },
    }
  );
  // console.log(response.data);
  return response.data;
};

export const getCryptoDetails = async (id) => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/coins/${id}`
  );
  return response.data;
};
