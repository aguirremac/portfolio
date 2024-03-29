import { NavOptions } from "../../shared/types";
import useMediaQuery from "../../hooks/useMediaQuery";
import TypewriterComponent from "typewriter-effect";
import {
  CheckCircleIcon,
  ChevronDoubleDownIcon,
} from "@heroicons/react/24/solid";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import HText from "../../shared/HText";

type Props = {
  setSelectedPage: (value: NavOptions) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");

  return (
    <section id="home">

      <div className={`mx-auto flex items-center h-screen justify-center  w-full md:w-9/12 gap-5 lg:gap-10   ${
        isAboveMediumScreen ? "2xl:gap-32 " : "flex-col"
      } `}>
      {/* LEFT SECTION */}

      <motion.div
       className="flex xl:basis-1/3 flex-col items-center justify-center rounded-xl lg:bg-slate-800/10 font-mont text-[#C9C0A5] md:min-h-[35%]  md:p-10"
       initial = 'hidden'
       whileInView='visible'
       viewport={{once: true, amount: 0.5}}  //once lang lalabas, 50% ng div lumabas na 
       transition={{duration: 0.5}}
       variants={{
        hidden: {opacity: 0, x: -50},
        visible: {opacity: 1, x: 0}
      }}
       
       
       >
        <img
          className="h-[120px] md:h-[150px]"
          src="\assets\profile.png"
          alt="profile-photo"
        />
        <p className="flex items-center justify-center  gap-2 text-2xl font-bold md:text-2xl  relative">
          Mark John Aguirre{" "}
          <CheckCircleIcon className="absolute -right-6 md:-right-8 h-[20px] text-[#39709B] md:h-[25px]" />
        </p>
        <p className="text-xs font-light md:text-lg ">
          FRONTEND DEVELOPER
        </p>
      </motion.div>

      {/* RIGHT SECTION */}
      <div className={`mt-5  flex xl:basis-2/3 flex-col ${isAboveMediumScreen ? 'items-start' : 'items-center'}  justify-start px-5   md:justify-center`}
      
      >
        <motion.div className="flex flex-col  items-center justify-center  italic text-[#C9C0A5] text-3xl md:text-4xl lg:text-5xl xl:text-[70px] lg:items-start"
        initial = 'hidden'
        whileInView='visible'
        viewport={{once: true, amount: 0.5}}  //once lang lalabas, 50% ng div lumabas na 
        transition={{duration: 1}}
        variants={{
         hidden: {opacity: 0, x: 50},
         visible: {opacity: 1, x: 0}
        }}>
          Bringing your
          <p className="text-start lg:text-4xl xl:text-[70px] mt-2 flex">   
            <span className="inline-block hover:text-red-500 text-jelly">o</span>
            <span className="inline-block hover:text-red-500 text-jelly">n</span>
            <span className="inline-block hover:text-red-500 text-jelly">l</span>
            <span className="inline-block hover:text-red-500 text-jelly">i</span>
            <span className="inline-block hover:text-red-500 text-jelly">n</span>
            <span className="inline-block hover:text-red-500 text-jelly">e</span>
            <span className="inline-block hover:text-red-500 text-jelly">&nbsp;</span>
            <span className="inline-block hover:text-red-500 text-jelly">v</span>
            <span className="inline-block hover:text-red-500 text-jelly">i</span>
            <span className="inline-block hover:text-red-500 text-jelly">s</span>
            <span className="inline-block hover:text-red-500 text-jelly">i</span>
            <span className="inline-block hover:text-red-500 text-jelly">o</span>
            <span className="inline-block hover:text-red-500 text-jelly">n</span>
            <span className="inline-block hover:text-red-500 text-jelly">&nbsp;</span>
            <span className="inline-block hover:text-red-500 text-jelly">t</span>
            <span className="inline-block hover:text-red-500 text-jelly">o</span>
            <span className="inline-block hover:text-red-500 text-jelly">&nbsp;</span>
            <span className="inline-block hover:text-red-500 text-jelly">l</span>
            <span className="inline-block hover:text-red-500 text-jelly">i</span>
            <span className="inline-block hover:text-red-500 text-jelly">f</span>
            <span className="inline-block hover:text-red-500 text-jelly">e</span>
            <span className="inline-block hover:text-red-500 text-jelly">.</span>
            </p>
        </motion.div>
        <HText>
        <motion.div className="mt-10 flex gap-2  text-xl md:text-2xl lg:text-xl xl:text-4xl font-bold"
        initial = 'hidden'
        whileInView='visible'
        viewport={{once: true, amount: 1}}  //once lang lalabas, 50% ng div lumabas na 
        transition={{duration: 1}}
        variants={{
         hidden: {opacity: 0, y: 50},
         visible: {opacity: 1, y: 0}
        }}>
          I create with 
          <TypewriterComponent
            options={{
              strings: ["TypeScript.", "Vue/NuxtJS.", "ReactJS.", "TailwindCSS.", "better UI/UX in mind."],
              autoStart: true,
              loop: true,
            }}
          />
        </motion.div>
        </HText>
        <motion.div className={`flex w-full ${isAboveMediumScreen ? "justify-start" : "justify-center"} `}
        initial = 'hidden'
        whileInView='visible'
        viewport={{once: true, amount: 0.5}}  //once lang lalabas, 50% ng div lumabas na 
        transition={{delay: 0.4, duration: 1}}
        variants={{
         hidden: {opacity: 0, y: 20},
         visible: {opacity: 1, y: 0}
        }}>
          <AnchorLink
          onClick={()=>setSelectedPage(NavOptions.About)}
          href={`#${NavOptions.About}`}
            className={`mt-10 flex  cursor-pointer gap-2 btn-grad `}
          >
            Explore More
            <ChevronDoubleDownIcon className="h-[20px]" />
          </AnchorLink>
        </motion.div>
      </div>
      </div>
      <hr className="w-9/12 mx-auto text-[#C9C0A5] opacity-20" />
    </section>
    
  );
};

export default Home;
