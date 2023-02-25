import { NavOptions } from "../../shared/types"
import {motion} from 'framer-motion';
import { projectData } from "./projectData";


type Props = {
setSelectedPage: (value:NavOptions) => void;

}

const Projects = ({setSelectedPage}: Props) => {
  return (
    <section>
        <motion.div className="mx-auto py-32 w-9/12 flex flex-col gap-5 font-mont"
        onViewportEnter={()=>setSelectedPage(NavOptions.Projects)}
        >
        <div className="bg-gradient-to-r from-black/50 to-[#2877b5] w-[9/12] rounded-xl h-[250px] py-5 flex flex-col text-[#C9C0A5]">
            <p className="font-semibold text-xl mb-2">PROJECTS</p>
            <p className="text-sm font-medium">HERE ARE SOME THINGS I'VE BUILT</p>
        </div>


        {/* container of project cards */}
        <div className="flex flex-col justify-center items-center">
            {/* LISTA PROJECT */}

            <div className="bg-[#C9C0A5] w-[90%] p-5 pb-10 rounded-xl flex flex-col justify-between items-center drop-shadow-xl ">
                    <div className="">
                        <img className=" h-[200px] md:h-[300px]" src={projectData[0].img} alt="" />
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <p>{projectData[0].title}</p>
                        <p className="font-light text-[10px] w-[90%]">{projectData[0].description}</p>
                    </div>
            </div>

            {/* PROJECT 2 */}

            </div>
        </motion.div>
        <hr className="w-9/12 mx-auto text-[#C9C0A5] opacity-20" />
    </section>
  )
}

export default Projects;