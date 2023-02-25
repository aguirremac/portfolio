import {useState} from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import { NavOptions } from "../../shared/types";
import { motion } from "framer-motion";


type Props = {
  setSelectedPage: (value: NavOptions) => void;
  
};

const About = ({ setSelectedPage }: Props) => {
  const [hovered, setHovered] = useState<boolean>(false);
  const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");
  const isMobileView = useMediaQuery("(max-width:640px)");

  return (
    <section>
    <motion.div className="mx-auto py-32 flex flex-col justify-center items-center  w-9/12  font-mont text-[#C9C0A5]"
    onViewportEnter={()=>setSelectedPage(NavOptions.About)}
    >
      <motion.div className="flex justify-center w-full xl:mb-14"
      initial = 'hidden'
      whileInView='visible'
      viewport={{once: true, amount: 0.5}}  //once lang lalabas, 50% ng div lumabas na 
      transition={{duration: 1}}
      variants={{
       hidden: {opacity: 0, x: 0},
       visible: {opacity: 1, x: 0}
     }}
      >
          <h1 className="text-3xl md:text-5xl xl:text-7xl font-bold text-[#C9C0A5] ">
            <span className="inline-block hover:text-[#39709B] text-jelly">{"{"}</span>
            <span className="inline-block hover:text-[#39709B] text-jelly">.</span>
            <span className="inline-block hover:text-[#39709B] text-jelly">.</span>
            <span className="inline-block hover:text-[#39709B] text-jelly">.</span>
            <span className="inline-block hover:text-[#39709B] text-jelly">a</span>
            <span className="inline-block hover:text-[#39709B] text-jelly">b</span>
            <span className="inline-block hover:text-[#39709B] text-jelly">o</span>
            <span className="inline-block hover:text-[#39709B] text-jelly">u</span>
            <span className="inline-block hover:text-[#39709B] text-jelly">t</span>
            <span className="inline-block hover:text-[#39709B] text-jelly">&nbsp;</span>
            <span className="inline-block hover:text-[#39709B] text-jelly">m</span>
            <span className="inline-block hover:text-[#39709B] text-jelly">e</span>
            <span className="inline-block hover:text-[#39709B] text-jelly">{"}"}</span>
          </h1>
</motion.div>

      
      <div className={`flex ${isAboveMediumScreen ? '' : 'flex-col'} justify-center items-center gap-5 mt-12`}>

        {/* LEFT SECTION */}
        <motion.div   className="basis-1/2 flex justify-center cursor-pointer"
          initial = 'hidden'
          whileInView='visible'
          viewport={{once: true, amount: 0.5}}  //once lang lalabas, 50% ng div lumabas na 
          transition={{delay:0.2,  duration: 1}}
          variants={{
           hidden: {opacity: 0, y: 50},
           visible: {opacity: 1, y: 0}
         }}
        >
        {hovered ? <img onTouchStart={()=>setHovered(true)} onTouchEnd={()=>setHovered(false)} onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}
          className={`h-[170px] md:h-[400px] hover:scale-105 duration-300`}
          src="\assets\prof2-v2.png"
          alt="profile-photo"
        /> : <img onTouchStart={()=>setHovered(true)} onTouchEnd={()=>setHovered(false)} onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}
        className={` h-[170px] md:h-[400px] hover:scale-105 duration-300`}
        src="\assets\prof2-colored.png"
        alt="profile-photo"
      /> }
        </motion.div>



        {/* RIGHT SECTION */}
        <motion.div className="flex justify-center xl:p-12 basis-1/2 gap-5 text-3xl font-normal"
        initial = 'hidden'
        whileInView='visible'
        viewport={{once: true, amount: 0.5}}  //once lang lalabas, 50% ng div lumabas na 
        transition={{delay:0.2,  duration: 1}}
        variants={{
         hidden: {opacity: 0, y: 50},
         visible: {opacity: 1, y: 0}
       }}
        >
          <p className="text-sm md:text-xl xl:text-2xl">
          Hello! My name is <span className="font-bold text-[#39709B] hover:scale-110">Mac</span> and I enjoy creating things that live on the internet. My interest in web development started back in 2021 when I decided to try creating a landing page for my family's business.
          Fast-forward to today, I decided to pursue my passion for constructing and developing innovative solutions through web development.
          I am committed to continuous learning and self-improvement in order to become a game-changer in the industry.
          </p>
        </motion.div>
      </div>
      
        <motion.div className="mt-5 flex flex-col items-center justify-center gap-1  w-full  "
        initial = 'hidden'
        whileInView='visible'
        viewport={{once: true, amount: 0.5}}  //once lang lalabas, 50% ng div lumabas na 
        transition={{delay:0.2, duration: 1}}
        variants={{
         hidden: {opacity: 0, x: 0},
         visible: {opacity: 1, x: 0}
       }}
        >
      <p className="font-normal ">currently working on both</p>
      <p className=" text-xl md:text-3xl bg-gradient-to-r from-[#C9C0A5] to-[#2877b5] bg-clip-text text-transparent ">FRONT-END and BACK-END development.</p>
        </motion.div>
        
    </motion.div>
    <hr className="w-9/12  mx-auto text-[#C9C0A5] opacity-20" />
    </section>
  );
}

export default About;
