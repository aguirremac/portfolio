import { useState } from "react";
import Navbar from "./components/nav/Navbar";
import { NavOptions } from "./shared/types";

function App() {
  const [selectedPage, setSelectedPage] = useState<NavOptions>(NavOptions.Home);


  return (
    <div className="app font-mont font-bold text-center bg-gradient-to-b from-[#1C1F1B] to-[#416A59] ">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
