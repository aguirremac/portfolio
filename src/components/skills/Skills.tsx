import { NavOptions } from "../../shared/types";
import { motion } from "framer-motion";
import { StacksType } from "../../shared/types";
import { useState } from "react";
import { stacks, learningStacks } from "./Stacks";
import HText from "../../shared/HText";

type Props = {
  setSelectedPage: (value: NavOptions) => void;
};

const Skills = ({ setSelectedPage }: Props) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoveredIndexLearning, setHoveredIndexLearning] = useState<
    number | null
  >(null);

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const childVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section>
      <motion.div
        id="skills"
        className="md:9/12 mx-auto flex  flex-col content-center items-center justify-center py-32 font-mont text-[#C9C0A5]"
        onViewportEnter={() => setSelectedPage(NavOptions.Skills)}
      >
        {/* TITLE TAG */}
        <HText>
          {" "}
          <motion.p
            className="px-5 text-xl  md:text-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 0 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            TECHNOLOGIES THAT I'VE BEEN WORKING WITH:
          </motion.p>
        </HText>

        {/* STACKS DIV */}
        <motion.div
          className=" mx-auto flex h-auto w-9/12 flex-wrap content-center items-center justify-between gap-5 rounded-3xl md:justify-center  md:gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {stacks.map((stack: StacksType, index: number) => {
            return (
              <motion.div
                key={index}
                className="item-center mt-10 flex h-[160px] w-[130px]  flex-col justify-items-center rounded-lg bg-[#C9C0A5] "
                variants={childVariant}
              >
                <div>
                  <img
                    onTouchStart={() => setHoveredIndex(index)}
                    onTouchEnd={() => setHoveredIndex(null)}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="rounded-t-lg"
                    src={
                      hoveredIndex === index ? stack.imgOrig : stack.imgGreen
                    }
                    alt={stack.title}
                  />
                  <p className="text-md pb-2 text-[#1C1F1B]">
                    {stack.title.toLocaleUpperCase()}
                  </p>
                </div>
                <div
                  className={`${
                    hoveredIndex === index && "border-bottom-spaced mt-2 w-full"
                  }`}
                ></div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CURRENTLY LEARNING */}
        <HText>
          {" "}
          <motion.p
            className="mt-20 px-5 text-xl  md:text-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 0 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            CURRENTLY LEARNING:
          </motion.p>
        </HText>

        {/* mapped learning stacks */}
        <motion.div
          className=" mx-auto flex h-auto w-9/12 flex-wrap  items-center justify-center gap-5 rounded-3xl md:justify-center  md:gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {learningStacks.map((stack: StacksType, qindex: number) => {
            return (
              <motion.div
                key={qindex}
                className="item-center mt-10 flex h-[160px] w-[130px]  flex-col justify-items-center rounded-lg bg-[#C9C0A5] "
                variants={childVariant}
              >
                <div>
                  <img
                    onTouchStart={() => setHoveredIndexLearning(qindex)}
                    onTouchEnd={() => setHoveredIndexLearning(null)}
                    onMouseEnter={() => setHoveredIndexLearning(qindex)}
                    onMouseLeave={() => setHoveredIndexLearning(null)}
                    className="rounded-t-lg"
                    src={
                      hoveredIndexLearning === qindex
                        ? stack.imgOrig
                        : stack.imgGreen
                    }
                    alt={stack.title}
                  />
                  <p className="text-md pb-2 text-[#1C1F1B]">
                    {stack.title.toLocaleUpperCase()}
                  </p>
                </div>

                <div
                  className={`${
                    hoveredIndexLearning === qindex &&
                    "border-bottom-spaced mt-2 w-full"
                  }`}
                ></div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
      <hr className="mx-auto w-9/12 text-[#C9C0A5] opacity-20" />
    </section>
  );
};

export default Skills;
