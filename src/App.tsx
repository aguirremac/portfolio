import { useEffect, useState } from "react";
import Home from "./components/home/Home";
import Navbar from "./components/nav/Navbar";
import { NavOptions } from "./shared/types";

function App() {
  const [selectedPage, setSelectedPage] = useState<NavOptions>(NavOptions.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(NavOptions.Home);
      } else setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); //to remove data history
  }, []);

  return (
    <div className="app bg-gradient-to-b from-black via-black to-emerald-900 text-center font-mont font-bold ">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      <Home setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
