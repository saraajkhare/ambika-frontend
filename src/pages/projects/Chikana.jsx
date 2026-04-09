import { useState } from "react";
import {
  FaRoad,
  FaTree,
  FaBolt,
  FaTint,
  FaShieldAlt,
  FaMapMarkedAlt,
} from "react-icons/fa";

import hero from "../../assets/projects/chikana/hero.jpg";
import gal1 from "../../assets/projects/chikana/ch1.jpeg";
import gal2 from "../../assets/projects/chikana/ch2.jpeg";
import gal3 from "../../assets/projects/chikana/ch3.jpeg";
import gal4 from "../../assets/projects/chikana/ch4.jpeg";

import ContactParallax from "../../components/ContactParallax";
import Footer from "../../components/Footer";

export default function WasChikana() {
  const [active, setActive] = useState(0);

  const gallery = [
    [gal1, gal2],
    [gal3, gal4],
  ];

  return (
    <div className="w-full bg-[#fafafa]">

      {/* ================= HERO ================= */}
      <div className="max-w-7xl mx-auto mt-10 rounded-2xl overflow-hidden shadow-2xl relative">
        <img
          src={hero}
          alt="Chikana Project"
          className="w-full h-[420px] object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            Chikana
          </h1>
        </div>
      </div>

      {/* ================= TAGLINE ================= */}
      <div className="text-center my-12 px-6">
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Premium plotted development designed for long-term growth, smart investment,
          and future-ready living.
        </p>
      </div>

      {/* ================= PROJECT OVERVIEW ================= */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold mb-6">Project Overview</h2>

          <p className="text-gray-700 leading-relaxed">
            Chikana is a strategically located plotted development near rapidly growing
            infrastructure zones in Nagpur. With proximity to key roads, upcoming hubs,
            and investment corridors, this project is ideal for both home buyers and investors.
          </p>

          <p className="text-gray-700 leading-relaxed mt-4">
            Whether you're planning to build your dream home or secure a high-growth asset,
            Chikana offers a perfect balance of affordability, location advantage, and future appreciation.
          </p>

        </div>
      </section>

      {/* ================= WHY CHOOSE ================= */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl font-bold mb-10 text-center">
            Why Choose This Project
          </h2>

          <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">

            {[
              ["🏡", "Residential Focus"],
              ["📍", "Strategic Site Selection"],
              ["📄", "Complete Legal Clarity"],
              ["🤝", "Dedicated Relationship Managers"],
              ["⚡", "Seamless Ownership Process"],
              ["🌱", "Development-Ready Plots"],
              ["📈", "Proven Track Record"],
            ].map((item, i) => (
              <div
                key={i}
                className="grid grid-cols-[70px_1fr] border-b last:border-none"
              >
                <div className="flex items-center justify-center text-xl bg-gray-50 p-4">
                  {item[0]}
                </div>
                <div className="flex items-center font-semibold text-lg p-4">
                  {item[1]}
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= FACILITIES ================= */}
      <section className="bg-gradient-to-r from-[#0f3b22] to-[#0b2e1a] py-20 text-white px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Project Facilities
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          <Facility icon={<FaRoad />} title="Internal Roads" />
          <Facility icon={<FaBolt />} title="Electricity" />
          <Facility icon={<FaTint />} title="Water Supply" />
          <Facility icon={<FaTree />} title="Green Spaces" />
          <Facility icon={<FaShieldAlt />} title="Secure Layout" />
          <Facility icon={<FaMapMarkedAlt />} title="Plot Demarcation" />

        </div>
      </section>

     

      {/* ================= GALLERY ================= */}
      <section className="py-20 text-center bg-[#fafafa]">
        <h2 className="text-3xl font-semibold mb-10">Project Gallery</h2>

        <div className="max-w-6xl mx-auto">
          {gallery.map((slide, i) => (
            <div
              key={i}
              className={`${i === active ? "flex" : "hidden"} gap-6 justify-center`}
            >
              {slide.map((img, j) => (
                <img
                  key={j}
                  src={img}
                  alt="Chikana Project"
                  className="w-[48%] h-[260px] rounded-xl shadow-xl object-cover"
                />
              ))}
            </div>
          ))}
        </div>

        <div className="mt-6">
          {gallery.map((_, i) => (
            <span
              key={i}
              onClick={() => setActive(i)}
              className={`inline-block w-2 h-2 mx-1 rounded-full cursor-pointer ${
                i === active ? "bg-green-700" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <ContactParallax />

      {/* ================= MAP ================= */}
      <section className="w-full h-[420px]">
        <iframe
          src="https://www.google.com/maps?q=SAP CONTROL SYSTEMS AND ENGG PVT LTD, Information Technology Park, Salt Lake SMS India Rd, Parsodi, Subhash Nagar, Trimurti Nagar, Nagpur, Maharashtra 440022&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
          title="Chikana Location"
        />
      </section>
<Footer/>
    </div>
  );
}

/* ===== FACILITY CARD ===== */
function Facility({ icon, title }) {
  return (
    <div className="bg-white text-black rounded-xl p-6 text-center shadow-xl hover:scale-105 transition">
      <div className="text-3xl text-green-700 mb-3">{icon}</div>
      <h4 className="font-semibold">{title}</h4>
    </div>
  );
}