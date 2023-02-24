import { NavOptions } from "../../shared/types";
import useMediaQuery from "../../hooks/useMediaQuery";
import TypewriterComponent from "typewriter-effect";
import { CheckCircleIcon } from "@heroicons/react/24/solid";



type Props = {
  setSelectedPage: (value: NavOptions) => void;
};

const Home = ({ setSelectedPage }: Props) => {

    const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");


  return (
    <section className={`mx-auto  w-full md:w-5/6  h-screen flex  ${isAboveMediumScreen ? 'gap-20' : 'flex-col  '} items-center justify-center `}>
        
        {/* LEFT SECTION */}
    
    <div className="text-[#C9C0A5] h-screen md:h-[35%] md:p-10 rounded-xl bg-black/20 flex flex-col items-center justify-end md:justify-center  font-mont">
    <img className="h-[170px] md:h-[200px]" src="\assets\profile.png" alt="profile-photo" />
    <p className="flex gap-2 items-center justify-center text-2xl md:text-4xl font-bold">Mark John Aguirre <CheckCircleIcon className="text-[#39709B] h-[20px] md:h-[30px]" /></p>
    <p className="font-light text-xs md:text-lg ">FRONT-END DEVELOPER  •  VIDEO EDITOR</p>
    </div> 
        
        
        {/* RIGHT SECTION */}
      <div className="h-screen flex flex-col items-center md:items-start justify-start md:justify-center px-5 mt-14">
        <p className="flex flex-col items-center md:items-start justify-center text-2xl italic sm:text-7xl text-[#C9C0A5]">
          Bringing your 
          <span>online vision to life.</span>
        </p>
        <div className="mt-5 flex gap-2 bg-gradient-to-r from-[#C9C0A5] to-[#2877b5] bg-clip-text text-2xl font-bold text-transparent md:text-5xl">
        I
        <TypewriterComponent
          options={{
            strings: ["create.", "innovate.", "accomplish."],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <div className="flex justify-center md:justify-end w-full ">
      <button className={`mt-10 flex  gap-2 rounded-xl border-2 border-[#2877b5]/20 text-[#C9C0A5] py-2 px-3 text-sm transition duration-100 ease-in-out hover:bg-gradient-to-r hover:from-[#1C1F1B] hover:to-[#2877b5] hover:border-[#1C1F1B]  cursor-pointer  hover:text-[#c9c0a5] active:scale-110 `}
            >Explore More
    </button>
    </div> 
    </div>

    <div className="h-screen w-full bg-red absolute top-[100%]">

    </div>

     



    
    </section>
  );
};

export default Home;
