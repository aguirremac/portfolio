import { NavOptions } from "../../shared/types";
import { motion } from "framer-motion";
import { StacksType } from "../../shared/types";
import { useState } from "react";
import { stacks } from "./Stacks";

type Props = {
  setSelectedPage: (value: NavOptions) => void;
};

const Skills = ({ setSelectedPage }: Props) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    
  return (
    <section>
    <motion.div
      className="md:9/12 mx-auto py-16 h-[60%] font-mont text-[#C9C0A5] flex flex-col justify-center items-center content-center"
      onViewportEnter={() => setSelectedPage(NavOptions.Skills)}
    >

        <p className="text-xl md:text-2xl bg-gradient-to-r from-[#C9C0A5] to-[#2877b5] bg-clip-text text-transparent p-5 md:mt-10 ">TECHNOLOGIES THAT I'VE BEEN WORKING WITH:</p>
      <div className=" w-9/12 h-auto rounded-3xl mx-auto flex justify-between md:justify-center gap-2 md:gap-10 items-center content-center  flex-wrap ">
        
        {stacks.map((stack, index) => {
            return (
            <div key={index} className="bg-[#C9C0A5] rounded-lg w-[130px] h-[160px] mt-10 cursor-pointer flex flex-col justify-items-center item-center ">
          <img onMouseEnter={()=>setHoveredIndex(index)} onMouseLeave={()=>setHoveredIndex(null)} className="rounded-t-lg" src={hoveredIndex === index ? stack.imgOrig : stack.imgGreen} alt={stack.title} />
          <p className="text-[#1C1F1B] text-md pb-2">{stack.title.toLocaleUpperCase()}</p>
        </div>
        )})
        
        }

        </div>
    </motion.div>
    </section>
  );
};

export default Skills;
