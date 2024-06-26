import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar"; // Adjust the import path as needed
import Home from "./pages/home"; // Adjust the import path as needed
import Signup from "./pages/signup"; // Adjust the import path as needed

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
