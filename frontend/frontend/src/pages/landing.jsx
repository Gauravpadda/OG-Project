import { AnimatedDiv } from "../components/AnimatedDiv";
import { AnimatedoneD } from "../components/animate1d";

export function Landing() {
  return (
    <div className="scroll-smooth">
        <div className="bg-black h-screen flex justify-center items-center">
            <div className="bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent">
                 <p className="font-bold  text-9xl">OG PROJECT</p>
            </div>
           
      </div>
      <div className="bg-black h-screen grid grid-cols-2 animate-scroll">
        <div className="ml-4 flex justify-center items-center bg-gradient-to-r from-indigo-400 via-purple-800 to-pink-300 bg-clip-text text-transparent">
            <p className="font-bold text-6xl">we provide the best guidance and content for your college exams preparation</p>
             </div>
        <div className="h-[580px] w-[730px] mt-[80px] ml-auto">
          <AnimatedoneD side={"l"} />
        </div>
      </div>
      <div className="bg-black h-screen flex items-center justify-center">
        <div className="h-[630px] w-[1230px] rounded-full">
          <AnimatedDiv />
        </div>
        
      </div>
      <div className="bg-black h-screen grid grid-cols-2 animate-scroll">
        
        <div className="h-[580px] w-[730px] mt-[80px] mr-auto">
          <AnimatedoneD side={"r"} />
        </div>
        <div className="ml-4 flex justify-center items-center bg-gradient-to-r from-indigo-400 via-purple-800 to-pink-300 bg-clip-text text-transparent">
            <p className="font-bold text-6xl">Ace your preparation with good content and understanding the exam patterns</p>
             </div>
      </div>
    </div>
  );
}
