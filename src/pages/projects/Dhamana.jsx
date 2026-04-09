import { useState } from "react";
import {
  FaRoad,
  FaTree,
  FaBolt,
  FaTint,
  FaShieldAlt,
  FaMapMarkedAlt,
} from "react-icons/fa";

import hero from "../../assets/projects/dhamana/hero.jpg";
import gal1 from "../../assets/projects/dhamana/dh1.jpeg";
import gal2 from "../../assets/projects/dhamana/dh2.jpeg";
import gal3 from "../../assets/projects/dhamana/dh3.jpeg";
import gal4 from "../../assets/projects/dhamana/dh4.jpeg";

import ContactParallax from "../../components/ContactParallax";

export default function WasDhamana() {
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
          alt="Dhamana Project"
          className="w-full h-[420px] object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            Dhamana
          </h1>
        </div>
      </div>

      {/* ================= TAGLINE ================= */}
      <div className="text-center my-12 px-6">
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          A fast-growing plotted development opportunity designed for smart investors
          and future-ready living.
        </p>
      </div>

      {/* ================= PROJECT OVERVIEW ================= */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold mb-6">Project Overview</h2>

          <p className="text-gray-700 leading-relaxed">
            Dhamana is an emerging plotted development located near key infrastructure
            and connectivity zones in Nagpur. With increasing demand and growth potential,
            this project offers an excellent opportunity for both residential and investment purposes.
          </p>

          <p className="text-gray-700 leading-relaxed mt-4">
            Whether you're planning to build your home or invest early in a promising location,
            Dhamana ensures long-term value, convenience, and peace of mind.
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
              ["📍", "Strategic Location"],
              ["📄", "Clear Legal Title"],
              ["🤝", "Customer Support"],
              ["⚡", "Easy Ownership Process"],
              ["🌱", "Ready-to-Build Plots"],
              ["📈", "High Growth Potential"],
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
          <Facility icon={<FaMapMarkedAlt />} title="Plot Marking" />

        </div>
      </section>

      {/* ================= PRICING CTA ================= */}
      <section className="py-20 px-6 text-center bg-white">
        <h2 className="text-3xl font-bold mb-4">
          Invest in Dhamana Today
        </h2>
        <p className="text-gray-600 mb-6">
          Limited plots available in a high-growth location.
        </p>

        <button className="bg-[#e30613] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#c9000c] transition">
          Get Pricing Details
        </button>
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
                  alt="Dhamana Project"
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
          src="https://www.google.com/maps?q=Nagpur Dhamana&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
          title="Dhamana Location"
        />
      </section>

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