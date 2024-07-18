import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";
import darkLogo from "@/components/assets/DarkLogo.gif";
import lightLogo from "@/components/assets/LightLogo.gif";
import Link from "next/link";

const Header = () => {
  return (
    <header className="p-0 bg-primary-light dark:bg-primary-dark text-white flex justify-between items-center px-4 py-1">
      {/* <h1 className="text-2xl">Crypto Tracker</h1> */}
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

      {/* <SearchBar /> */}
      <ThemeToggle />
    </header>
  );
};

export default Header;
