import { NavOptions } from "../../shared/types";
import { motion } from "framer-motion";
import HText from "../../shared/HText";
import OpenImage from "/assets/open.png"
import { useForm } from "react-hook-form";

type Props = {
  setSelectedPage: (value: NavOptions) => void;
};

const Contact = ({ setSelectedPage }: Props) => {

const {trigger, register, formState:{errors}} = useForm();

const onSubmit = async (e:any) => {
     const  isValid = await trigger();
     if (!isValid) {
      e.preventDefault();
     }
          
}

  return (
    <section id="contact" className="mx-auto w-9/12 py-32">
      <motion.div
        onViewportEnter={() => setSelectedPage(NavOptions.Contact)}
        initial = 'hidden'
        whileInView='visible'
        viewport={{once: true, amount: 0.5}}  //once lang lalabas, 50% ng div lumabas na 
        transition={{ duration: 0.5}}
        variants={{
         hidden: {opacity: 0, x: 0},
         visible: {opacity: 1, x: 0}
       }}

        className="font-mont"
      >
        
        {/* <div className="flex justify-center mt-2 items-center gap-2 text-[#C9C0A5]">
            <EnvelopeIcon className="h-[25px]" />
            <p className="text-md">markjohnaguirre@gmail.com</p>
          </div> */}


<div className="md:flex justify-center w-full md:gap-5 xl:gap-20 ">

        {/* FORM */}
          <form onSubmit={onSubmit} target="_blank" action="https://formsubmit.co/5914e9cfc1a079cf7c8cb4dbded896be" method="POST" className=" md:basis-1/2 h-[500px] font-normal sm:px-20 md:px-0  " >
          <HText>
          <p className=" text-start mb-2  text-3xl font-bold xl:text-4xl 2xl:text-5xl ">
            GET IN TOUCH
          </p>
          <p className="text-start text-xs font-medium xl:text-xl">
            Driven by creativity and innovation, excited to join your team
          </p>
        </HText>
            
            <input  
            className="w-full rounded-lg p-2 bg-gradient-to-r from-[#C9C0A5] to-[#416A59] mt-10 outline-none placeholder:text-[#1C1F1B]/50" 
            type="text" 
            placeholder="NAME"
            {...register("name", {required: true, maxLength: 50,})}
            />
            {errors.name && <p className="text-red-500 text-sm font-mont mt-1">
              {errors.name.type === "required" && 'This field is required'}
              {errors.name.type === "maxLength" && 'Max length is 50 char'} </p>}
            <input 
            className="w-full rounded-lg p-2 bg-gradient-to-r from-[#C9C0A5] to-[#416A59] mt-3 outline-none placeholder:text-[#1C1F1B]/50" 
            type="text" 
            placeholder="EMAIL"
            {...register("email", {required:true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,})}  
            />
            {errors.email && <p className="text-red-500 text-sm font-mont mt-1">
              {errors.email.type === "required" && 'This field is required'}
              {errors.email.type === "pattern" && 'Invalid email address'} </p>}
            <textarea 
            className="w-full rounded-lg p-2 bg-gradient-to-r from-[#C9C0A5] to-[#416A59] mt-3 outline-none placeholder:text-[#1C1F1B]/50 "  
            rows={8}
            cols={50}
            placeholder="MESSAGE"
            {...register("message", {required:true, maxLength: 2000,})}
            />
            {errors.message && <p className="text-red-500 text-sm font-mont mt-1">
              {errors.message.type === "required" && 'This field is required'}
              {errors.message.type === "maxLength" && 'Max length is 2000 char'} </p>}
            <button type="submit" className="p-2 mt-5 w-full text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">SUBMIT</button>
          </form>

          {/* Image */}
          <div className="md:basis-1/2 w-full flex justify-center items-center pt-12">
            <img className=" md:h-[350px] 2xl:h-[450px]" src={OpenImage} alt="open-gif" />
          </div>

          </div>



      </motion.div>
    </section>
  );
};

export default Contact;
