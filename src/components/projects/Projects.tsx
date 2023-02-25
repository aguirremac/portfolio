import { NavOptions } from "../../shared/types"


type Props = {
setSelectedPage: (value:NavOptions) => void;

}

const Projects = ({setSelectedPage}: Props) => {
  return (
    <section>
        <div className="mx-auto py-32 w-9/12 flex flex-col gap-5">

            {/* LISTA PROJECT */}

            <div className="">
                    <div>
                        <img src="/assets/lista-1.png" alt="" />
                    </div>

                    <div>
                        <p></p>
                        <p></p>
                    </div>
            </div>

            {/* PROJECT 2 */}


        </div>

        <hr className="w-9/12 mx-auto text-[#C9C0A5] opacity-20" />
    </section>
  )
}

export default Projects;