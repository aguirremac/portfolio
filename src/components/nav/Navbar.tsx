import { useState } from "react";
import { ArrowDownTrayIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "./Link";
import useMediaQuery from "../../hooks/useMediaQuery";
import { NavOptions } from "../../shared/types";

type Props = {
  isTopOfPage: boolean;
  selectedPage: NavOptions;
  setSelectedPage: (value: NavOptions) => void;
};

const style = {
  flexBetween: `flex items-center justify-between`,
  hoverBlue: `transition duration-100 ease-in-out hover:bg-gradient-to-r hover:from-[#1C1F1B] hover:to-[#2877b5] hover:border-[#1C1F1B]  cursor-pointer  hover:text-[#c9c0a5] active:scale-110`,
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");
  const NavbarBG = `${isTopOfPage ? "" : "bg-[#C9C0A5]/90 duration-500  "}`;

  return (
    <div
      className={` ${style.flexBetween} ${NavbarBG} drop-shadow-md fixed top-0 z-30 h-[60px] md:h-[80px] w-full px-1 md:px-10 font-mont`}
    >
      <div className={`${style.flexBetween} mx-auto w-11/12 md:w-5/6`}>
        <div>
          {isTopOfPage ? (
            <div className="flex gap-1 md:gap-5 items-center">
            <img
              src="\assets\mac-agr-icon-slate.png"
              className="h-[60px] md:h-[100px] cursor-pointer duration-300 ease-in-out active:scale-110 pr-5 md:pr-10"
              alt="logo"
            ></img>
            <a href="https://www.linkedin.com/in/mark-john-aguirre-66464a136/"><img className="h-[20px] md:h-[30px] cursor-pointer" src="\assets\linkedin-slate.png"></img></a>
            <a href="https://github.com/aguirremac"><img className="h-[25px] md:h-[35px] cursor-pointer" src="\assets\github-slate.png"></img></a>
            </div>
          ) : (
            <div className="flex gap-1 md:gap-5 items-center">
            <img
              src="\assets\mac-agr-icon.png"
              className="h-[60px] md:h-[100px] cursor-pointer duration-300 ease-in-out active:scale-110 pr-5 md:pr-10"
              alt="logo"
            ></img>
            <a href="https://www.linkedin.com/in/mark-john-aguirre-66464a136/"><img className="h-[20px] md:h-[30px] cursor-pointer" src="\assets\linkedin-green.png"></img></a>
            <a href="https://github.com/aguirremac"><img className="h-[25px] md:h-[35px] cursor-pointer" src="\assets\github-green.png"></img></a>
            </div>
          )}
        </div>

        {isAboveMediumScreen ? (
          <div className={`${style.flexBetween} gap-5 ${isTopOfPage ? "text-[#C9C0A5]" : "text-[#416A59]"}`}>
            <Link
              page="HOME"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="ABOUT"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="SKILLS"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="PROJECTS"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="CONTACT"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />

            <button
              className={` flex gap-2 rounded-xl border-2 ${isTopOfPage ? "border-[#C9C0A5]/60 text-[#C9C0A5]" : "border-[#416A59] text-[#416A59]"} py-2 px-3 text-sm  ${style.hoverBlue}`}
            >
              <ArrowDownTrayIcon className="h-[20px]" />Résumé
            </button>
          </div>
        ) : (
          <div
            onClick={() => setShowSidebar(!showSidebar)}
            className={`flex h-[30px] md:h-[40px] cursor-pointer  rounded-full p-2 ${
              isTopOfPage
                ? "bg-[#C9C0A5] text-[#416A59]"
                : "bg-[#416A59] text-[#C9C0A5]"
            }`}
          >
            <Bars3Icon />
          </div>
        )}

        {/* backdrop */}
        {showSidebar && (
          <div className="fixed top-0 left-0 h-screen w-full bg-black/80"></div>
        )}
        <div
          className={
            showSidebar
              ? "fixed top-0 right-0 h-screen w-[200px] md:w-[300px] bg-[#C9C0A5] duration-300"
              : "fixed top-0 right-[-100%] h-screen w-[200px] md:w-[300px] bg-[#C9C0A5]  duration-300"
          }
        >
          <div
            onClick={() => setShowSidebar(false)}
            className="m-4 flex h-[25px] cursor-pointer justify-end text-gray-500"
          >
            <XMarkIcon />
          </div>

          <div className=" flex flex-col items-center justify-center  gap-10 pt-20 text-[#416A59]">
            <Link
              page="HOME"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="ABOUT"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="SKILLS"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="PROJECTS"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="CONTACT"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />

          <button
              className={` flex gap-2 rounded-xl border-2 ${isTopOfPage ? "border-[#C9C0A5]/60 text-[#C9C0A5]" : "border-[#416A59] text-[#416A59]"} py-2 px-3 text-sm  ${style.hoverBlue}`}
            >
              <ArrowDownTrayIcon className="h-[20px]" />Résumé
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
