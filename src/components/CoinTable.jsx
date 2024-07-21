import React from "react";
import CoinRow from "./CoinRow";
import { Radio } from "react-loader-spinner";
import Image from "next/image";
import customLoader from "@/components/assets/customLoader.svg";
const CoinTable = ({ coins }) => {
  return coins.length > 0 ? (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white dark:bg-transparent border border-gray-200 rounded-lg">
        <thead>
          <tr className="bg-gray-50 dark:bg-gray-800">
            <th className="py-3 px-4 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              MC Rank
            </th>
            <th className="py-3 px-4 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="py-3 px-4 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Market Cap
            </th>
            <th className="py-3 px-4 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price
            </th>
            <th className="py-3 px-4 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Change % in 24h
            </th>
            <th className="py-3 px-4 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ATH
            </th>
            <th className="py-3 px-4 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ATL
            </th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => (
            <CoinRow key={coin.id} coin={coin} />
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <div className="h-full w-full flex justify-center items-center">
      {" "}
      {/* <Radio
        visible={true}
        height="200"
        width="200"
        color="#3d0066"
        ariaLabel="radio-loading"
        wrapperStyle={{}}
        wrapperClass=""
      /> */}
      <Image src={customLoader} alt="customLoader" />
    </div>
  );
};

export default CoinTable;
