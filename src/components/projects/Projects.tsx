import { NavOptions, ProjectsType } from "../../shared/types";
import { motion } from "framer-motion";
import { projectData } from "./projectData";
import {useState} from 'react'
import HText from "../../shared/HText";

type Props = {
  setSelectedPage: (value: NavOptions) => void;
};

const Projects = ({ setSelectedPage }: Props) => {
    const [hoveredProjIndex, setHoveredProjIndex] = useState<number | null>(null)
    

    // looped animation variants
    const animationVariants = {
      start: { scale: 1 },
      end: { scale: 1.1 },
    };
  
    const animationTransition = {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    };


  return (
    <section id="projects" >
      <motion.div
        className="relative mx-auto flex h-fit w-11/12 md:w-9/12 flex-col  py-32 font-mont"
        onViewportEnter={() => setSelectedPage(NavOptions.Projects)}
      >
        {/* container of project cards */}
        <div className="mx-auto flex w-full flex-col items-center justify-center gap-8 rounded-xl bg-black/50 py-10">
          <HText>
            <div className="px-5 text-xl md:text-2xl ">
            <p className="mb-2 text-3xl xl:text-4xl 2xl:text-5xl font-bold">PROJECTS</p>
            <p className="text-xs xl:text-xl font-medium">
              HERE ARE SOME THINGS I'VE BUILT:
            </p>
          </div>
          </HText> 
          {/* LISTA PROJECT */}
          {projectData.map((project: ProjectsType, index: number) => (
            <motion.div
                 onMouseEnter={(e)=> setHoveredProjIndex(index) }
                 onMouseLeave={(e)=> setHoveredProjIndex(null) }  
                key={index} className="flex w-[80%] flex-col  md:flex-row items-center justify-between md:justify-center  bg-gradient-to-r from-[#C9C0A5] to-[#2877b5] drop-shadow-xl  rounded-md cursor-pointer"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                >
              
              {/* project image */}
              <div className="flex w-full md:basis-1/2 justify-center border-b-2 md:border-b-0 md:border-r-2  border-[#2877b5]  md:border-[#2877b5]/50 ">
                
                {/* backdrop demo/code */}
                {hoveredProjIndex === index && 
                <div className="flex gap-5 justify-center items-center absolute top-0 right-0 left-0 bottom-0 bg-black/90  z-30 font-semibold ">
                    <a href={project.liveURL}><p className=" rounded-md px-2 py-1 cursor-pointer btn-grad-light ">DEMO</p> </a>
                    <a href={project.githubLink}><p className=" rounded-md px-2 py-1 cursor-pointer btn-grad-light ">CODE</p></a>
                </div>}

                
                <motion.img
                  variants={animationVariants}
                  transition={animationTransition}
                  initial="start"
                  animate="end" 
                  className=" h-[200px] md:h-[250px] lg:h-[300px] cursor-pointer hover:scale-105   duration-300"
                  src={project.imgHovered}
                  alt={project.title}
                />
              </div>
                    {/* project text */}
              <div className="flex md:basis-1/2 flex-col items-center justify-center py-5 px-5">
                <p className="text-xl lg:text-2xl ">{project.title}</p>
                <div className="flex gap-2 pb-3 pt-2 ">
                {project.stacks.map((stack, stackIndex)=> (
                    
                        <p key={stackIndex} className="bg-red-500/70 hover:bg-red-500 hover:text-white cursor-pointer text-[#A3BCB6] rounded-lg text-[8px] lg:text-[10px] px-2 py-1">{stack}</p>   
                ))}
                    </div>
                <p className="w-[90%] text-[13px] lg:text-[15px]  font-normal md:font-normal">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
          {/* PROJECT 2 */}
        </div>
      </motion.div>
      <hr className="mx-auto w-9/12 text-[#C9C0A5] opacity-20" />
    </section>
  );
};

export default Projects;
