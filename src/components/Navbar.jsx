import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-[1000] bg-white border-b-[3px] border-[#e30613]">
      <div className="max-w-[1400px] mx-auto px-8 py-[14px] flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center">
          <img src={logo} alt="Ambika" className="h-12" />
        </div>

        {/* MENU */}
        <nav className="flex items-center gap-7">

          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-semibold text-[#333] relative ${
                isActive ? "text-[#e30613]" : ""
              }`
            }
          >
            Home
          </NavLink>

          {/* PROJECTS DROPDOWN */}
          <div className="relative group flex items-center">

            <span className="font-semibold text-[#333] cursor-pointer select-none">
              Projects ▾
            </span>

            {/* Hover buffer */}
            <span className="absolute top-full left-0 w-full h-3"></span>

            {/* Dropdown */}
            <div className="absolute top-full left-0 mt-3 hidden min-w-[240px] flex-col rounded-lg bg-white py-2 shadow-[0_12px_30px_rgba(0,0,0,0.15)] group-hover:flex z-[999]">
{[
  ["Chikana", "/projects/chikana"],
  ["Dhamana", "/projects/dhamana"],
  ["Tumdi", "/projects/tumdi"],
].map(([label, path]) => (
  <NavLink
    key={path}
    to={path}
    className={({ isActive }) =>
      `px-[18px] py-[10px] text-[15px] font-medium transition-all
      ${
        isActive
          ? "text-[#e10600] font-semibold"
          : "text-[#111] hover:bg-[#fff1f1] hover:text-[#e10600]"
      }`
    }
  >
    {label}
  </NavLink>
))}
            </div>
          </div>

          <NavLink
            to="/emi"
            className={({ isActive }) =>
              `font-semibold text-[#333] ${
                isActive ? "text-[#e30613]" : ""
              }`
            }
          >
            EMI Calculator
          </NavLink>

          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              `font-semibold text-[#333] ${
                isActive ? "text-[#e30613]" : ""
              }`
            }
          >
            Blogs
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `font-semibold text-[#333] ${
                isActive ? "text-[#e30613]" : ""
              }`
            }
          >
            Contact Us
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `font-semibold text-[#333] ${
                isActive ? "text-[#e30613]" : ""
              }`
            }
          >
            About Us
          </NavLink>
              
        </nav>

        {/* RIGHT */}
       <div className="flex items-center gap-4">
  <span className="font-semibold">+91-70990-62888</span>

  <Link to="/contact">
    <button className="bg-[#e30613] text-white font-semibold px-[18px] py-[10px] rounded-md hover:bg-[#c9000c] transition">
      CONTACT TODAY
    </button>
  </Link>
</div>

      </div>
    </header>
  );
};

export default Navbar;
