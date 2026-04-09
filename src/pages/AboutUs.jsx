import React, { useState } from "react";

/* ===== IMAGES ===== */
import aboutHero from "../assets/homebg.png";

import dh1 from "../assets/projects/dhanna/dh1.jpeg";
import Footer from "../components/Footer";


import dh4 from "../assets/projects/dhanna/dh4.jpeg";
import dh5 from "../assets/projects/dhanna/dh5.jpeg";

import Achievements from "../components/Achievements";
import ReviewsSection from "../components/ReviewsSection";

export default function AboutUs() {
  const [selectedImg, setSelectedImg] = useState(null);

  const images = [dh1,dh4, dh5];

  return (
    <div className="w-full overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative bg-[#f8f9fa] py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div className="bg-white p-12 rounded-2xl shadow-lg">
            <span className="text-xs tracking-[3px] text-gray-400 uppercase">
              Who We Are
            </span>

            <h1 className="text-5xl font-bold mt-4">
              About <span className="text-green-700">AmarInfratech</span>
            </h1>

            <p className="mt-6 text-gray-600 leading-[1.8]">
              At AmarInfratech, we believe land is more than just property —
              it’s your future. We develop residential plots in high-growth
              areas of Nagpur.
            </p>

            <p className="mt-4 text-gray-600 leading-[1.8]">
              Transparent deals, strong locations, and long-term value —
              that’s what we deliver.
            </p>
          </div>

          <img
            src={aboutHero}
            alt="AmarInfratech site"
            className="rounded-2xl shadow-xl w-full h-[420px] object-cover"
          />
        </div>
      </section>

      {/* ================= GALLERY (UPGRADED) ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">

          <span className="text-xs tracking-[3px] text-gray-400 uppercase">
            Our Work
          </span>

          <h2 className="text-3xl font-semibold mt-2 mb-10">
            Project Glimpses
          </h2>

          {/* MASONRY STYLE */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">

            {images.map((img, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl shadow-md cursor-pointer group"
                onClick={() => setSelectedImg(img)}
              >
                <img
                  src={img}
                  alt={`Project ${index + 1}`}
                  className="w-full object-cover rounded-xl transition duration-300 group-hover:scale-105"
                />
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= IMAGE MODAL ================= */}
      {selectedImg && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999]"
          onClick={() => setSelectedImg(null)}
        >
          <img
            src={selectedImg}
            alt="Full view"
            className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl"
          />
        </div>
      )}

      {/* ================= MISSION ================= */}
      <section className="py-24 px-6 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-6xl mx-auto text-center text-white">

          <span className="text-xs tracking-[3px] uppercase opacity-80">
            AmarInfratech
          </span>

          <h2 className="text-4xl font-bold mt-4 mb-16">
            Our Mission & Vision
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            <div className="bg-white/10 p-12 rounded-xl backdrop-blur">
              <h3 className="text-2xl font-semibold mb-4">Mission</h3>
              <p className="text-sm leading-[1.8]">
                To develop residential plots with transparency and long-term value.
              </p>
            </div>

            <div className="bg-white/10 p-12 rounded-xl backdrop-blur">
              <h3 className="text-2xl font-semibold mb-4">Vision</h3>
              <p className="text-sm leading-[1.8]">
                To be the most trusted land developer in Nagpur.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= LEADERS ================= */}
      <section className="py-24 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold mb-10">Our Leadership</h2>

        <div className="bg-white p-10 rounded-xl shadow-md inline-block">
          <div className="text-red-600 text-5xl mb-4">👤</div>
          <h4 className="text-xl font-semibold">Amar Akre</h4>
          <p className="text-gray-500 mt-1">Director</p>
        </div>
      </section>

      <Achievements />
      <ReviewsSection />
      <Footer />

    </div>
  );
}