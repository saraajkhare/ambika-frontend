import React, { useState } from "react";

/* ===== IMAGES ===== */
import aboutHero from "../assets/homebg.png";
import dh1 from "../assets/projects/dhanna/dh1.jpeg";

import dh4 from "../assets/projects/dhanna/dh4.jpeg";
import dh5 from "../assets/projects/dhanna/dh5.jpeg";

import Achievements from "../components/Achievements";
import ReviewsSection from "../components/ReviewsSection";

export default function AboutUs() {
  const [selectedImg, setSelectedImg] = useState(null);

  const images = [dh1, dh4, dh5];

  return (
    <div className="w-full overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="bg-[#f8f9fa] py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div className="bg-white p-12 rounded-2xl shadow-lg">
            <span className="text-xs tracking-[3px] text-gray-400 uppercase">
              AmarInfratech
            </span>

            <h1 className="text-5xl font-bold mt-4 leading-tight">
              Your Plot. Your Legacy. <br />
              <span className="text-green-700">Our Promise</span>
            </h1>

            <p className="mt-6 text-gray-600 leading-[1.8]">
              We believe land is more than just a piece of earth — it is the foundation of a legacy.
              Based in Nagpur, we develop high-potential residential plots designed for long-term value.
            </p>

            <p className="mt-4 text-gray-600 leading-[1.8]">
              Across multiple projects, we’ve helped families and investors secure land they are proud of.
            </p>

            <p className="mt-6 font-semibold">
              We don’t just sell plots. We engineer opportunity.
            </p>
          </div>

          <img
            src={aboutHero}
            alt="AmarInfratech"
            className="rounded-2xl shadow-xl h-[420px] object-cover"
          />
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="Project"
              onClick={() => setSelectedImg(img)}
              className="rounded-xl shadow-md cursor-pointer hover:scale-105 transition"
            />
          ))}
        </div>
      </section>

      {/* IMAGE MODAL */}
      {selectedImg && (
        <div
          onClick={() => setSelectedImg(null)}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999]"
        >
          <img src={selectedImg} className="max-w-[90%] max-h-[90%] rounded-xl" />
        </div>
      )}

      {/* ================= WHY US TEXT BLOCKS ================= */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto space-y-14">

          <Block
            title="Customer First, Always"
            text="From your very first enquiry to registration day — and beyond — we stay by your side. No confusion, no hidden terms, just honest service that earns trust."
          />

          <Block
            title="Effortless Buying Experience"
            text="Transparent pricing, digital documentation, and zero hidden charges ensure a smooth journey from interest to ownership."
          />

          <Block
            title="Your Investment, Built to Appreciate"
            text="Road-ready, boundary-marked plots designed for immediate usability and long-term growth."
          />

          <Block
            title="Locations That Work Harder"
            text="Every location is selected through deep infrastructure and growth analysis — so your investment grows faster."
          />

        </div>
      </section>

      {/* ================= MISSION VISION ================= */}
      <section className="py-24 px-6 bg-gradient-to-r from-red-600 to-red-700 text-white text-center">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold mb-16">Our Vision & Mission</h2>

          <div className="grid md:grid-cols-2 gap-10">

            <div className="bg-white/10 p-10 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4">Vision</h3>
              <p>
                To be the most trusted residential land developer in Nagpur —
                where every customer feels they made the smartest investment.
              </p>
            </div>

            <div className="bg-white/10 p-10 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4">Mission</h3>
              <p>
                To develop thoughtfully planned residential plot communities with transparency,
                care, and long-term value for every investor.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold mb-10">Why Choose Us</h2>

          <div className="grid md:grid-cols-2 gap-6">

            {[
              "Residential Focus",
              "Strategic Site Selection",
              "Complete Legal Clarity",
              "Dedicated Relationship Managers",
              "Seamless Ownership Process",
              "Development-Ready Plots",
              "Proven Track Record",
            ].map((item, i) => (
              <div key={i} className="p-6 border rounded-xl shadow-sm">
                <h4 className="font-semibold">{item}</h4>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= FOUNDER ================= */}
      <section className="py-24 px-6 bg-gray-50 text-center">
        <div className="max-w-3xl mx-auto">

          <h2 className="text-3xl font-bold mb-6">Founder’s Note</h2>

          <p className="italic text-gray-600 leading-[1.8]">
            “We don’t see customers as transactions. We see them as people placing their trust and savings in our hands.
            We take that responsibility seriously every single day.”
          </p>

          <p className="mt-6 font-semibold">— Amar Akre, Director</p>

        </div>
      </section>

      <Achievements />
      <ReviewsSection />

    </div>
  );
}

/* SMALL COMPONENT */
function Block({ title, text }) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-yellow-700 mb-2">{title}</h3>
      <p className="text-gray-700 leading-[1.8]">{text}</p>
    </div>
  );
}