import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import EmiCalculator from "./pages/EmiCalculator";
import ContactUs from "./pages/ContactUs";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";

import WasChikana from "./pages/projects/Chikana";
import WasDhamana from "./pages/projects/Dhamana";
import WasTumdi from "./pages/projects/Tumdi";

import Chatbot from "./components/Chatbot";
import AboutUs from "./pages/AboutUs";

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -15 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/projects/chikana" element={<PageWrapper><WasChikana /></PageWrapper>} />
        <Route path="/projects/dhamana" element={<PageWrapper><WasDhamana /></PageWrapper>} />
        <Route path="/projects/tumdi" element={<PageWrapper><WasTumdi /></PageWrapper>} />
        <Route path="/emi" element={<PageWrapper><EmiCalculator /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><ContactUs /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><AboutUs /></PageWrapper>} />
        <Route path="/blogs" element={<PageWrapper><Blogs /></PageWrapper>} />
        <Route path="/blogs/:id" element={<PageWrapper><BlogDetails /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <div className="w-full overflow-x-hidden min-h-screen bg-white transition-colors duration-300 dark:bg-darkblue">
        <Toaster position="top-center" />
        <Navbar />
        <AnimatedRoutes />
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;
