import { useRouter } from "next/router";
import { getCryptoDetails } from "../../services/cryptoService";
import Header from "../../components/Header";

const CryptoDetails = ({ crypto }) => {
  const router = useRouter();
  const { id } = router.query;
  // alert(id);
  if (!crypto) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <main className="p-4">
        <h1>{crypto.name}</h1>
        <p>Current Price: ${crypto.market_data.current_price.usd}</p>
        {/* Add more details and charts as needed */}
      </main>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.params;
  const crypto = await getCryptoDetails(id);

  return {
    props: {
      crypto,
    },
  };
}

export default CryptoDetails;
