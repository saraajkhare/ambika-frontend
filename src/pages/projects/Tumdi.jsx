import { useState } from "react";
import {
  FaRoad,
  FaTree,
  FaBolt,
  FaTint,
  FaShieldAlt,
  FaMapMarkedAlt,
} from "react-icons/fa";

import hero from "../../assets/projects/tumdi/tum1.jpeg";
import gal1 from "../../assets/projects/tumdi/tum1.jpeg";
import gal2 from "../../assets/projects/tumdi/tum2.jpeg";
import gal3 from "../../assets/projects/tumdi/tum3.jpeg";

import ContactParallax from "../../components/ContactParallax";
import Footer from "../../components/Footer";

export default function WasTumdi() {
  const [active, setActive] = useState(0);

  // ✅ 3 images handled properly
  const gallery = [
    [gal1],
    [gal2],
    [gal3],
  ];

  return (
    <div className="w-full bg-[#fafafa]">

      {/* HERO */}
      <div className="max-w-7xl mx-auto mt-10 rounded-2xl overflow-hidden shadow-2xl relative">
        <img
          src={hero}
          alt="Tumdi Project"
          className="w-full h-[420px] object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            Tumdi
          </h1>
        </div>
      </div>

      {/* TAGLINE */}
      <div className="text-center my-12 px-6">
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          A promising plotted development offering affordability, growth potential,
          and a peaceful environment for future living.
        </p>
      </div>

      {/* OVERVIEW */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Project Overview</h2>

          <p className="text-gray-700 leading-relaxed">
            Tumdi is a strategically located plotted development designed for buyers
            looking for affordable entry into a high-growth real estate market.
          </p>

          <p className="text-gray-700 leading-relaxed mt-4">
            With clear titles, planned layout, and future-ready infrastructure,
            it’s perfect for both end-users and investors.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Why Choose This Project
          </h2>

          <div className="rounded-xl overflow-hidden border shadow-sm">
            {[
              ["🏡", "Residential Focus"],
              ["📍", "Strategic Location"],
              ["📄", "Clear Legal Title"],
              ["🤝", "Customer Support"],
              ["⚡", "Easy Ownership"],
              ["🌱", "Ready-to-Build Plots"],
              ["📈", "High Growth Potential"],
            ].map((item, i) => (
              <div key={i} className="grid grid-cols-[70px_1fr] border-b">
                <div className="flex items-center justify-center bg-gray-50">
                  {item[0]}
                </div>
                <div className="p-4 font-semibold">{item[1]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FACILITIES */}
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

      {/* CTA */}
      <section className="py-20 px-6 text-center bg-white">
        <h2 className="text-3xl font-bold mb-4">
          Invest in Tumdi Today
        </h2>
        <p className="text-gray-600 mb-6">
          Limited plots available at early-stage pricing.
        </p>

        <button className="bg-[#e30613] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#c9000c] transition">
          Get Pricing Details
        </button>
      </section>

      {/* ✅ FIXED GALLERY */}
      <section className="py-20 text-center bg-[#fafafa]">
        <h2 className="text-3xl font-semibold mb-10">Project Gallery</h2>

        <div className="max-w-4xl mx-auto">
          {gallery.map((slide, i) => (
            <div key={i} className={`${i === active ? "block" : "hidden"}`}>
              <img
                src={slide[0]}
                alt="Tumdi Project"
                className="w-full h-[320px] rounded-xl shadow-xl object-cover"
              />
            </div>
          ))}
        </div>

        {/* DOTS */}
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

      {/* CONTACT */}
      <ContactParallax />

      {/* MAP */}
      <section className="w-full h-[420px]">
        <iframe
          src="https://www.google.com/maps?q=Nagpur Tumdi&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
          title="Tumdi Location"
        />
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

/* FACILITY CARD */
function Facility({ icon, title }) {
  return (
    <div className="bg-white text-black rounded-xl p-6 text-center shadow-xl hover:scale-105 transition">
      <div className="text-3xl text-green-700 mb-3">{icon}</div>
      <h4 className="font-semibold">{title}</h4>
    </div>
  );
}