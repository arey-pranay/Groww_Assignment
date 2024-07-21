import { useState, useEffect } from "react";
const ThemeToggle = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    // if (localStorage.theme) {
    //   document.documentElement.classList.add(localStorage.theme);
    //   setTheme(localStorage.theme);
    // } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    // }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  return (
    <>
      <div
        onClick={toggleTheme}
        className={`${
          theme === "light" ? "bg-white  " : "bg-black"
        } flex cursor-pointer w-16 h-8 px-2 rounded-2xl py-0.5 justify-center items-center transition-all duration-500`}
      >
        <div
          className={`${
            theme === "light"
              ? " -translate-x-2  rounded-full"
              : "translate-x-4 "
          } w-8 h-6   transition-all duration-500 flex`}
        >
          <div className={`${theme === "light" ? "flex" : "hidden"} `}>🌄</div>

          <div className={`${theme === "light" ? "hidden" : "block"}`}>🌃 </div>
        </div>
      </div>
    </>
  );
};

export default ThemeToggle;
