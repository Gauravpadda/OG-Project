import { Children } from "react";
import { AnimatedDiv } from "../components/AnimatedDiv";
import { AnimatedoneD } from "../components/animate1d";
import { ScrollEffect } from "../components/scrolleffect";
import { Footer } from "../components/footer";
import ParticleRing from "../components/particleRing";

export function Landing() {
  return (
    <div className="scroll-smooth bg-black h-dvh w-fit">
      
        <div className="bg-black h-dvh flex justify-center items-center">
          
          <div className="bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent">
           <p className="font-bold text-9xl">OG PROJECT</p>
          </div>
          
        </div>
        
       
        <div className="bg-black h-screen grid grid-cols-2"><ScrollEffect> 
          <div className="ml-4 mt-[200px] flex justify-center items-center bg-gradient-to-r from-indigo-400 via-purple-800 to-pink-300 bg-clip-text text-transparent">
            <p className="font-bold text-6xl ">
              We provide the best guidance and content for your college exams preparation.
            </p>
          </div></ScrollEffect><ScrollEffect> 
          <div className="h-[580px] w-[730px] mt-[80px] ml-auto">
            <AnimatedoneD side={"l"} />
          </div></ScrollEffect>
        </div>
      
      
        <div className="bg-black h-screen flex items-center justify-center"><ScrollEffect>
          <div className="h-[630px] w-[1230px] rounded-full">
            <AnimatedDiv />
          </div></ScrollEffect>
        </div>
      
      
        <div className="bg-black h-screen grid grid-cols-2"><ScrollEffect>
          <div className="h-[580px] w-[730px] mt-[80px] mr-auto ">
            <ParticleRing/>
            
          </div></ScrollEffect>
          <ScrollEffect>
          <div className="ml-4 mt-[200px] flex justify-center items-center bg-gradient-to-r from-indigo-400 via-purple-800 to-pink-300 bg-clip-text text-transparent">
            <p className="font-bold text-6xl">
              Ace your preparation with good content and understanding the exam patterns.
            </p>
          </div></ScrollEffect>
        </div>
        <Footer/>
      
    </div>
  );
}
