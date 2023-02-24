import { NavOptions } from "../../shared/types";
import useMediaQuery from "../../hooks/useMediaQuery";
import TypewriterComponent from "typewriter-effect";
import {
  CheckCircleIcon,
  ChevronDoubleDownIcon,
} from "@heroicons/react/24/solid";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: NavOptions) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");

  return (
    <section>

      <div className={`mx-auto flex items-center h-screen justify-center  w-full md:w-9/12 gap-5 lg:gap-20   ${
        isAboveMediumScreen ? "xl:gap-15 " : "flex-col"
      } `}>
      {/* LEFT SECTION */}

      <motion.div
       className="flex xl:basis-1/3 flex-col items-center justify-center rounded-xl lg:bg-slate-800/10 font-mont text-[#C9C0A5] md:min-h-[35%]  md:p-10"
       initial = 'hidden'
       whileInView='visible'
       viewport={{once: true, amount: 0.5}}  //once lang lalabas, 50% ng div lumabas na 
       transition={{duration: 0.5}}
       variants={{
        hidden: {opacity: 0, x: -200},
        visible: {opacity: 1, x: 0}
      }}
       
       
       >
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
      </motion.div>

      {/* RIGHT SECTION */}
      <div className={`mt-5  xl:pl-20 flex xl:basis-2/3 flex-col ${isAboveMediumScreen ? 'items-start' : 'items-center'}  justify-start px-5   md:justify-center`}
      
      >
        <motion.div className="flex flex-col  items-center justify-center  italic text-[#C9C0A5] text-3xl md:text-4xl lg:text-5xl xl:text-[100px] lg:items-start"
        initial = 'hidden'
        whileInView='visible'
        viewport={{once: true, amount: 0.5}}  //once lang lalabas, 50% ng div lumabas na 
        transition={{duration: 1}}
        variants={{
         hidden: {opacity: 0, x: 200},
         visible: {opacity: 1, x: 0}
        }}>
          Bringing your
          <p className="text-start lg:text-4xl xl:text-[70px] mt-2 flex">   
            <span className="inline-block hover:text-[#39709B] text-jelly">o</span>
            <span className="inline-block hover:text-[#39709B] text-jelly">n</span>
            <span className="inline-block hover:text-[#39709B] text-jelly">l</span>
            <span className="inline-block hover:text-[#39709B] text-jelly">i</span>
            <span className="inline-block hover:text-[#39709B] text-jelly">n</span>
            <span className="inline-block hover:text-[#39709B] text-jelly">e</span>
            <span className="inline-block hover:text-[#39709B] text-jelly">&nbsp;</span>
            <span className="inline-block hover:text-[#39709B] text-jelly">v</span>
            <span className="inline-block hover:text-[#39709B] text-jelly">i</span>
            <span className="inline-block hover:text-[#39709B] text-jelly">s</span>
            <span className="inline-block hover:text-[#39709B] text-jelly">i</span>
            <span className="inline-block hover:text-[#39709B] text-jelly">o</span>
            <span className="inline-block hover:text-[#39709B] text-jelly">n</span>
            <span className="inline-block hover:text-[#39709B] text-jelly">&nbsp;</span>
            <span className="inline-block hover:text-[#39709B] text-jelly">t</span>
            <span className="inline-block hover:text-[#39709B] text-jelly">o</span>
            <span className="inline-block hover:text-[#39709B] text-jelly">&nbsp;</span>
            <span className="inline-block hover:text-[#39709B] text-jelly">l</span>
            <span className="inline-block hover:text-[#39709B] text-jelly">i</span>
            <span className="inline-block hover:text-[#39709B] text-jelly">f</span>
            <span className="inline-block hover:text-[#39709B] text-jelly">e</span>
            <span className="inline-block hover:text-[#39709B] text-jelly">.</span>
            </p>
        </motion.div>
        <motion.div className="mt-10 flex gap-2 bg-gradient-to-r from-[#C9C0A5] to-[#2877b5] bg-clip-text text-xl md:text-2xl lg:text-3xl xl:text-5xl font-bold text-transparent"
        initial = 'hidden'
        whileInView='visible'
        viewport={{once: true, amount: 0.5}}  //once lang lalabas, 50% ng div lumabas na 
        transition={{duration: 1}}
        variants={{
         hidden: {opacity: 0, x: 200},
         visible: {opacity: 1, x: 0}
        }}>
          I&nbsp; 
          <TypewriterComponent
            options={{
              strings: ["create.", "innovate.", "accomplish."],
              autoStart: true,
              loop: true,
            }}
          />
        </motion.div>
        <motion.div className={`flex w-full ${isAboveMediumScreen ? "justify-start" : "justify-center"} `}
        initial = 'hidden'
        whileInView='visible'
        viewport={{once: true, amount: 0.5}}  //once lang lalabas, 50% ng div lumabas na 
        transition={{delay: 0.2, duration: 1.5}}
        variants={{
         hidden: {opacity: 0, x: 200},
         visible: {opacity: 1, x: 0}
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
      <hr className="w-5/6 mx-auto text-[#C9C0A5] opacity-20" />
    </section>
    
  );
};

export default Home;
