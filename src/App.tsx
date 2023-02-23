import { useEffect, useState } from "react";
import Navbar from "./components/nav/Navbar";
import { NavOptions } from "./shared/types";

function App() {
  const [selectedPage, setSelectedPage] = useState<NavOptions>(NavOptions.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect (()=> {
    
    const handleScroll = () => {
      if(window.scrollY === 0) {
        setIsTopOfPage(true)
        setSelectedPage(NavOptions.Home)
      } else setIsTopOfPage(false)
    }; window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)  //to remove data history
  },[])



  return (
    <div className="app font-mont font-bold text-center bg-gradient-to-b from-[#1C1F1B] to-[#416A59] ">
      <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
