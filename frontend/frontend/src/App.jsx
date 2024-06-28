import {BrowserRouter, Route, Routes} from "react-router-dom"

import { Landing } from "./pages/landing";
import Home from "./pages/home";

function App() {
  return (<>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<div className="bg-black"><Landing></Landing></div>}></Route>
    <Route path="/home" element={<Home/>}></Route>
  </Routes>
  
  </BrowserRouter>
    



  
  </>



    
  );
}

export default App;
