import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";


import EmiCalculator from "./pages/EmiCalculator";
import ContactUs from "./pages/ContactUs";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";

import WasChikana from "./pages/projects/Chikana";
import WasDhamana from "./pages/projects/Dhamana";
import Chatbot from "./components/Chatbot";


import AboutUs from "./pages/AboutUs";
import WasTumdi from "./pages/projects/Tumdi";



function App() {
  return (
    <Router>
  <div className="w-full overflow-x-hidden">
    <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/chikana" element={<WasChikana />} />
      <Route path="/projects/dhamana" element={<WasDhamana />} />
      <Route path="/projects/tumdi" element={<WasTumdi />} />
      <Route path="/emi" element={<EmiCalculator />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blogs/:id" element={<BlogDetails />} />
    </Routes>

    <Chatbot />
  </div>
</Router>
  );
}

export default App;
