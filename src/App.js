import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AmbikaAnanda from "./pages/projects/AmbikaAnanda";
import AmbikaDevendra from "./pages/projects/AmbikaDevendra";
import AmbikaShree from "./pages/projects/AmbikaShree"

import AmbikaHeritage from "./pages/projects/AmbikaHeritage";
import EmiCalculator from "./pages/EmiCalculator";
import ContactUs from "./pages/ContactUs";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";


import DiamondHome from "./pages/projects/DiamondHome"; 

import AmbikaShrine from "./pages/projects/AmbikaShrine";

import AmbikaGreen from "./pages/projects/AmbikaGreen";
import AmbikaDhanna from "./pages/projects/AmbikaDhanna";
import AmbikaChikana from "./pages/projects/AmbikaChikana";

import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <Router>
      <div className="w-full overflow-x-hidden"></div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/ambika-ananda" element={<AmbikaAnanda />} />
        <Route path="/projects/ambika-devendra" element={<AmbikaDevendra />} />
        <Route path="/projects/ambika-shree" element={<AmbikaShree />} />
<Route path="/projects/ambika-heritage" element={<AmbikaHeritage />} />

<Route path="/projects/ambika-dhanna" element={<AmbikaDhanna />} />
<Route path="/projects/ambika-chikana" element={<AmbikaChikana />} />

<Route path="/projects/ambika-green" element={<AmbikaGreen />} />
<Route path="/projects/ambika-shrine" element={<AmbikaShrine />} />
<Route path="/projects/diamond-home" element={<DiamondHome />} />
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
