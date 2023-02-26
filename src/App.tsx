import { useEffect, useState } from "react";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Navbar from "./components/nav/Navbar";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import { NavOptions } from "./shared/types";
import Loading from "./components/loading/Loading";


function App() {
  const [selectedPage, setSelectedPage] = useState<NavOptions>(NavOptions.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);


  useEffect(() => {

    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(NavOptions.Home);
      } else setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    }  //to remove data history
  }, []);

  return (
    <div className="app min-h-screen bg-gradient-to-br from-black via-black to-emerald-900 text-center font-mont font-bold ">
      
     {isLoading ? <Loading  /> : <>
     <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      
      <Home setSelectedPage={setSelectedPage} />
      <About setSelectedPage={setSelectedPage} />
      <Skills setSelectedPage={setSelectedPage} />
      <Projects setSelectedPage={setSelectedPage} />
      <Contact setSelectedPage={setSelectedPage} />

     </> } 
      
      
      
     
    </div>
  );
}

export default App;
