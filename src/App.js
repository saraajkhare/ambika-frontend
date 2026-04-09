import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";


import EmiCalculator from "./pages/EmiCalculator";
import ContactUs from "./pages/ContactUs";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";

import WasChikana from "./pages/projects/WasChikana";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <Router>
      <div className="w-full overflow-x-hidden"></div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        
<Route path="/projects/chikana" element={<WasChikana />} />
<Route path="/emi" element={<EmiCalculator />} />
<Route path="/emi-calculator" element={<EmiCalculator />} />
<Route path="/contact" element={<ContactUs />} />
<Route path="/about" element={<AboutUs />} />
<Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />



      </Routes>
<div/>
    </Router>
  );
}

export default App;
