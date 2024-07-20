import Image from "next/image";
import React from "react";
import { Radio } from "react-loader-spinner";
import logoImage from "@/components/assets/DarkLogo.gif";
const Loading = () => {
  return (
    <div className="w-screen flex justify-center items-center h-screen fixed bg-purple-50 opacity-80 top-0 left-0 text-4xl z-10">
      {/* <Radio
        visible={true}
        height="200"
        width="200"
        color="#3d0066"
        ariaLabel="radio-loading"
        wrapperStyle={{}}
        wrapperClass=""
      /> */}
      <Image src={logoImage} height={200} />
    </div>
  );
};

export default Loading;
