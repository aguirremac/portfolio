import {useState} from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import { NavOptions } from "../../shared/types";


type Props = {
  setSelectedPage: (value: NavOptions) => void;
  
};

function About({ setSelectedPage }: Props) {
  const [hovered, setHovered] = useState<boolean>(false);
  const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");
  const isMobileView = useMediaQuery("(max-width:640px)");

  return (
    <section className="mx-auto flex flex-col justify-center items-center h-screen w-9/12  font-mont text-[#C9C0A5]">
      <div className="flex justify-center w-full xl:mb-14">
          <h1 className="text-3xl lg:text-5xl xl:text-7xl font-bold text-[#C9C0A5] ">
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
</div>

      
      <div className={`flex ${isAboveMediumScreen ? '' : 'flex-col'} justify-center items-center gap-5 mt-12`}>

        {/* LEFT SECTION */}
        <div   className="basis-1/2 flex justify-center cursor-pointer">
        {hovered ? <img onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}
          className={`h-[170px] md:h-[400px] hover:scale-105 duration-300`}
          src="\assets\prof2-v2.png"
          alt="profile-photo"
        /> : <img onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}
        className={` h-[170px] md:h-[400px] hover:scale-105 duration-300`}
        src="\assets\prof2-colored.png"
        alt="profile-photo"
      /> }
        </div>



        {/* RIGHT SECTION */}
        <div className="flex justify-center xl:p-12 basis-1/2 gap-5 text-3xl font-normal">
          <p className="text-sm md:text-xl xl:text-2xl">
          Hello! My name is Mac and I enjoy creating things that live on the internet. My interest in web development started back in 2021 when I decided to try creating a landing page for my family's business.
          Fast-forward to today, I decided to pursue my passion for constructing and developing innovative solutions through web development.
          I am committed to continuous learning and self-improvement in order to become a game-changer in the industry.
          </p>
        </div>
      </div>
      
        <div className="mt-5 flex flex-col items-center justify-center gap-1  w-full  ">
      <p className="font-normal ">currently working on both</p>
      <p className=" text-xl md:text-3xl bg-gradient-to-r from-[#C9C0A5] to-[#2877b5] bg-clip-text text-transparent ">FRONT-END and BACK-END development.</p>
        </div>
      
    </section>
  );
}

export default About;
