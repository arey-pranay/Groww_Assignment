import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="p-4 bg-primary-light dark:bg-primary-dark text-white flex justify-between">
      <h1 className="text-2xl">Crypto Tracker</h1>
      <ThemeToggle />
    </header>
  );
};

export default Header;
