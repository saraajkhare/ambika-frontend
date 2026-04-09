import { useState } from "react";
import {
  FaRoad,
  FaTree,
  FaBolt,
  FaTint,
  FaShieldAlt,
  FaMapMarkedAlt,
} from "react-icons/fa";

/* ===== IMAGES (CHANGE PATHS IF NEEDED) ===== */
import hero from "../../assets/projects/chikana/hero.jpg";
import gal1 from "../../assets/projects/chikana/gal1.jpg";
import gal2 from "../../assets/projects/chikana/gal2.jpg";
import gal3 from "../../assets/projects/chikana/gal3.jpg";
import gal4 from "../../assets/projects/chikana/gal4.jpg";

import ContactParalax from "../../components/ContactParallax";

export default function WasChikana() {
  const [active, setActive] = useState(0);

  const gallery = [
    [gal1, gal2],
    [gal3, gal4],
  ];

  return (
    <div className="w-full">

      {/* ================= HERO ================= */}
      <div className="max-w-7xl mx-auto mt-10 rounded-2xl overflow-hidden shadow-2xl">
        <img
          src={hero}
          alt="Was Chikana"
          className="w-full h-[420px] object-cover"
        />
      </div>

      {/* ================= TITLE ================= */}
      <div className="text-center my-10">
        <h1 className="text-4xl font-bold">Was Chikana</h1>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Premium plotted development designed for long-term growth, smart investment,
          and future-ready living near emerging infrastructure corridors.
        </p>
      </div>

      {/* ================= PROJECT OVERVIEW ================= */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold mb-6">Project Overview</h2>

          <p className="text-gray-700 leading-relaxed">
            Was Chikana is a strategically located plotted development designed for
            both end-users and investors. With upcoming infrastructure like highways,
            industrial corridors, and regional growth hubs, this project offers strong
            appreciation potential and long-term value.
          </p>

          <p className="text-gray-700 leading-relaxed mt-4">
            Whether you want to build your dream home or invest early in a high-growth
            zone, Was Chikana gives you flexibility, security, and a future-ready location.
          </p>

        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl font-bold mb-10 text-center">
            Why Choose This Project
          </h2>

          <div className="border border-black">

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
                className="grid grid-cols-[70px_1fr] border-b border-black"
              >
                <div className="flex items-center justify-center text-2xl p-4">
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
      <section className="bg-green-900 py-20 text-white px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Project Facilities
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          <Facility icon={<FaRoad />} title="Internal Roads" />
          <Facility icon={<FaBolt />} title="Electricity" />
          <Facility icon={<FaTint />} title="Water Supply" />
          <Facility icon={<FaTree />} title="Green Spaces" />
          <Facility icon={<FaShieldAlt />} title="Gated Layout" />
          <Facility icon={<FaMapMarkedAlt />} title="Clear Demarcation" />

        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section className="py-20 text-center">
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
                  alt="Gallery"
                  className="w-[48%] rounded-xl shadow-xl object-cover"
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

      {/* ================= CTA ================= */}
      <ContactParalax />

     {/* ================= MAP ================= */}
<section className="w-full h-[420px]">
  <iframe
    src="https://www.google.com/maps?q=SAP CONTROL SYSTEMS AND ENGG PVT LTD, Information Technology Park, Salt Lake SMS India Rd, Parsodi, Subhash Nagar, Trimurti Nagar, Nagpur, Maharashtra 440022&output=embed"
    className="w-full h-full border-0"
    loading="lazy"
    title="Was Chikana Location Map"
  />
</section>

    </div>
  );
}

/* ===== FACILITY CARD ===== */
function Facility({ icon, title }) {
  return (
    <div className="bg-white text-black rounded-xl p-6 text-center shadow-xl">
      <div className="text-3xl text-green-700 mb-3">{icon}</div>
      <h4 className="font-semibold">{title}</h4>
    </div>
  );
}