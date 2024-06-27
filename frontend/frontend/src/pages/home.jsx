
// import Sidebar from "../components/sidebar";
// import { Appbar } from "../components/appbar";
// import HomeFooter from "../components/HomeFooter";
// // Basic Home component for demonstration
// function Home() {
//     return <div className="flex bg-black  w-screen h-screen">
//       <Appbar/>
//       <Sidebar/>
//       <div className="mb-0">
//       <HomeFooter/>
//       </div>

//       </div>;
//   }

//   export default Home;

import Sidebar from "../components/sidebar";
import { Appbar } from "../components/appbar";
import HomeFooter from "../components/HomeFooter";
import App from "../App";
import { Footer } from "../components/footer";

// Basic Home component for demonstration
function Home() {
  return (
    <div className="bg-black flex">
      {/* <div className="bg-slate-700">
        <Sidebar />
      </div> */}
      <div className="z-10 h-screen">
      <Sidebar/>
      </div>
      
      
        <div className="flex flex-col w-full">
          <div className="fixed top-0 right-0 left-10 z-0">
          <Appbar />
          </div>
        
        <div className="flex-1 text-white w-full mt-60 text-center">{/* mt-12*/}
        
          MAIN CONTENT HERE
          
        </div>
        <div className="text-white fixed bottom-0 left-10 right-0">
        <HomeFooter/>
        </div>
        
        </div>
      
        

      </div>
    
  );
}

export default Home;
