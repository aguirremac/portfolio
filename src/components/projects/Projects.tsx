import { NavOptions, ProjectsType } from "../../shared/types";
import { motion } from "framer-motion";
import { projectData } from "./projectData";
import {useState} from 'react'

type Props = {
  setSelectedPage: (value: NavOptions) => void;
};

const Projects = ({ setSelectedPage }: Props) => {
    const [hoveredProjectIndex, setHoveredProjectIndex] = useState<number | null>(null)
    const [clickedIndex, setClickedIndex] = useState<number | null>(null)
    
  return (
    <section onClick={(e)=> setClickedIndex(null)} >
      <motion.div
        className="relative mx-auto flex h-fit w-11/12 md:w-9/12 flex-col  py-32 font-mont"
        onViewportEnter={() => setSelectedPage(NavOptions.Projects)}
      >
        {/* container of project cards */}
        <div className="mx-auto flex w-full flex-col items-center justify-center gap-8 rounded-xl bg-black/50 py-10">
          <div className="bg-gradient-to-r from-[#C9C0A5] to-[#2877b5] bg-clip-text px-5 text-xl text-transparent md:text-2xl ">
            <p className="mb-2 text-3xl xl:text-4xl 2xl:text-5xl font-bold">PROJECTS</p>
            <p className="text-xs xl:text-xl font-medium">
              HERE ARE SOME THINGS I'VE BUILT:
            </p>
          </div>
          {/* LISTA PROJECT */}
          {projectData.map((project: ProjectsType, index: number) => (
            <motion.div onClick={(e)=> {
                e.stopPropagation();  //to excempt the div to the onClick event on the parent div
                setClickedIndex(index) }} 
                key={index} className="flex w-[80%] flex-col  md:flex-row items-center justify-between md:justify-center  bg-gradient-to-r from-[#C9C0A5] to-[#2877b5] drop-shadow-xl  rounded-md cursor-pointer"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                >
              
              {/* project image */}
              <div className="flex w-full md:basis-1/2 justify-center border-b-2 md:border-b-0 md:border-r-2  border-[#2877b5]  md:border-[#2877b5]/50 ">
                
                {/* nested demo/code */}
                {clickedIndex === index && 
                <div className="flex gap-5 justify-center items-center w-full absolute top-0 right-0 bg-black/90 h-full z-30 font-semibold">
                    <a href={project.liveURL}><p className=" rounded-md px-2 py-1 cursor-pointer btn-grad-light ">DEMO</p> </a>
                    <a href={project.githubLink}><p className=" rounded-md px-2 py-1 cursor-pointer btn-grad-light ">CODE</p></a>
                </div>}

                
                <img  onMouseEnter={()=>setHoveredProjectIndex(index)} onMouseLeave={()=>setHoveredProjectIndex(null)}
                  className=" h-[200px] md:h-[250px] lg:h-[300px] cursor-pointer hover:scale-105   duration-300"
                  src={hoveredProjectIndex === index ? project.imgHovered : project.img}
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
                <p className="w-[90%] text-[10px] lg:text-[15px]  font-light md:font-normal">
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
