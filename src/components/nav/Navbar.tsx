import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
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
  hoverBlue: `transition duration-100 ease-in-out hover:bg-gradient-to-r hover:from-[#1C1F1B] hover:to-[#2877b5]  cursor-pointer  hover:text-[#c9c0a5] active:scale-110`,
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");
  const NavbarBG = `${isTopOfPage ? "" : "bg-[#C9C0A5]"}`;

  return (
    <div
      className={` ${style.flexBetween} ${NavbarBG} drop-shadow-md fixed top-0 z-30  h-[80px] w-full px-10 font-mont`}
    >
      <div className={`${style.flexBetween} mx-auto w-5/6`}>
        <div>
          {isTopOfPage ? (
            <img
              src=".\src\assets\mac-agr-icon-slate.png"
              className="h-[100px] cursor-pointer duration-300 ease-in-out active:scale-110"
              alt="logo"
            ></img>
          ) : (
            <img
              src=".\src\assets\mac-agr-icon.png"
              className="h-[100px] cursor-pointer duration-300 ease-in-out active:scale-110"
              alt="logo"
            ></img>
          )}
        </div>

        {isAboveMediumScreen ? (
          <div className={`${style.flexBetween} gap-5 text-[#416A59]`}>
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
              className={`rounded-3xl border-2 border-[#416A59] py-2 px-3 text-sm text-[#416A59] ${style.hoverBlue}`}
            >
              Download CV
            </button>
          </div>
        ) : (
          <div
            onClick={() => setShowSidebar(!showSidebar)}
            className={`flex h-[40px] cursor-pointer  rounded-full p-2 ${
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
              ? "fixed top-0 right-0 h-screen w-[300px] bg-[#C9C0A5] duration-300"
              : "fixed top-0 right-[-100%] h-screen w-[300px] bg-[#C9C0A5]  duration-300"
          }
        >
          <div
            onClick={() => setShowSidebar(false)}
            className="m-4 flex h-[30px] cursor-pointer justify-end text-gray-500"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
