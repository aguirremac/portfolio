import { NavOptions } from "../../shared/types";
import useMediaQuery from "../../hooks/useMediaQuery";
import TypewriterComponent from "typewriter-effect";
import {
  CheckCircleIcon,
  ChevronDoubleDownIcon,
} from "@heroicons/react/24/solid";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  setSelectedPage: (value: NavOptions) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");

  return (
    <section
      className={`mx-auto flex items-center h-screen justify-center  w-full md:w-5/6 md:gap-10  ${
        isAboveMediumScreen ? "xl:gap-20 " : "flex-col"
      } `}
    >
      {/* LEFT SECTION */}

      <div className="flex xl:basis-2/5 flex-col items-center justify-center rounded-xl bg-black/20 font-mont text-[#C9C0A5] md:min-h-[35%]  md:p-10">
        <img
          className="h-[170px] md:h-[200px]"
          src="\assets\profile.png"
          alt="profile-photo"
        />
        <p className="flex items-center justify-center gap-2 text-2xl font-bold md:text-2xl lg:4xl">
          Mark John Aguirre{" "}
          <CheckCircleIcon className="h-[20px] text-[#39709B] md:h-[30px]" />
        </p>
        <p className="text-xs font-light md:text-lg ">
          FRONT-END DEVELOPER • VIDEO EDITOR
        </p>
      </div>

      {/* RIGHT SECTION */}
      <div className={`mt-14 flex xl:basis-3/5 flex-col ${isAboveMediumScreen ? 'items-start' : 'items-center'}  justify-start px-5   md:justify-center`}>
        <p className="flex flex-col  items-center justify-center  italic text-[#C9C0A5] text-3xl md:text-4xl lg:text-5xl xl:text-7xl lg:items-start">
          Bringing your
          <span className="text-start lg:text-4xl xl:text-6xl">online vision to life.</span>
        </p>
        <div className="mt-5 flex gap-2 bg-gradient-to-r from-[#C9C0A5] to-[#2877b5] bg-clip-text text-xl md:text-2xl lg:text-3xl xl:text-5xl font-bold text-transparent">
          I
          <TypewriterComponent
            options={{
              strings: ["create.", "innovate.", "accomplish."],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className={`flex w-full ${isAboveMediumScreen ? "justify-end" : "justify-center"} `}>
          <AnchorLink
          onClick={()=>setSelectedPage(NavOptions.About)}
          href={`${NavOptions.About}`}
            className={`mt-10 flex  cursor-pointer gap-2 rounded-xl border-2 border-[#2877b5]/20 py-3 px-5 text-sm text-[#C9C0A5] transition duration-100 ease-in-out hover:border-[#1C1F1B] hover:bg-gradient-to-r hover:from-[#1C1F1B]  hover:to-[#2877b5]  hover:text-[#c9c0a5] active:scale-110 `}
          >
            Explore More
            <ChevronDoubleDownIcon className="h-[20px]" />
          </AnchorLink>
        </div>
      </div>

      <div className="bg-red absolute top-[100%] h-screen w-full"></div>
    </section>
  );
};

export default Home;
