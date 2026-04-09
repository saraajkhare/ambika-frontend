import React from "react";

/* ===== IMAGES ===== */
import aboutHero from "../assets/homebg.png";

import dh1 from "../assets/projects/dhanna/dh1.jpeg";
import dh2 from "../assets/projects/dhanna/dh2.jpeg";
import dh3 from "../assets/projects/dhanna/dh3.jpeg";
import dh4 from "../assets/projects/dhanna/dh4.jpeg";
import dh5 from "../assets/projects/dhanna/dh5.jpeg";

import Achievements from "../components/Achievements";
import ReviewsSection from "../components/ReviewsSection"; 

export default function AboutUs() {
  return (
    <div className="w-full overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative bg-gray-100 py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT TEXT */}
          <div className="bg-white p-10 rounded-2xl shadow-xl">
            <span className="text-xs tracking-widest text-gray-500 uppercase">
              Who We Are
            </span>

            <h1 className="text-4xl font-bold mt-4">
              About <span className="text-green-700">AmarInfratech</span>
            </h1>

            <p className="mt-6 text-gray-700 leading-relaxed">
              At AmarInfratech, we believe land is more than just a piece of earth —
              it is the foundation of a legacy. Established in 2023 and rooted in Nagpur,
              we focus on developing residential plots in high-potential locations.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Across multiple projects, we have helped families and investors secure land
              that grows in value and provides long-term security.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed font-semibold">
              We don’t just sell plots. We engineer opportunity.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <img
              src={aboutHero}
              alt="AmarInfratech"
              className="rounded-2xl shadow-2xl w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================= KNOW MORE ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">

          {/* IMAGES */}
          <div className="grid md:grid-cols-2 gap-8 mb-14">
            <img src={dh1} className="rounded-xl shadow-lg w-full object-cover" />
            <img src={dh2} className="rounded-xl shadow-lg w-full object-cover" />
            <img src={dh3} className="rounded-xl shadow-lg w-full object-cover" />
            <img src={dh4} className="rounded-xl shadow-lg w-full object-cover" />
          </div>

          <div className="mb-14">
            <img src={dh5} className="rounded-xl shadow-lg w-full object-cover" />
          </div>

          {/* TEXT */}
          <span className="text-xs tracking-widest text-gray-500 uppercase">
            Know More About Us
          </span>

          <p className="mt-6 text-gray-700 leading-relaxed">
            From your first enquiry to final registration, we ensure a smooth and
            transparent buying experience. Every step is simplified so you can focus
            on making the right investment decision.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            With transparent pricing, zero hidden costs, and clear documentation,
            buying land with us becomes effortless and stress-free.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            Our plots are development-ready with proper layouts, road access,
            and infrastructure — ensuring usability from day one.
          </p>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="py-24 px-6 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-6xl mx-auto text-center text-white">

          <span className="text-xs tracking-widest uppercase opacity-80">
            AmarInfratech
          </span>

          <h2 className="text-4xl font-bold mt-4 mb-14">
            Our Mission And Vision
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            {/* MISSION */}
            <div className="bg-white/10 backdrop-blur p-10 rounded-xl border border-white/20">
              <h3 className="text-2xl font-semibold mb-4">Mission</h3>
              <p className="text-sm leading-relaxed">
                To discover, develop, and deliver thoughtfully planned residential
                plot communities across Nagpur with complete transparency and
                customer-first service.
              </p>
            </div>

            {/* VISION */}
            <div className="bg-white/10 backdrop-blur p-10 rounded-xl border border-white/20">
              <h3 className="text-2xl font-semibold mb-4">Vision</h3>
              <p className="text-sm leading-relaxed">
                To become the most trusted land developer in Nagpur, helping every
                customer make a confident and rewarding investment decision.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= LEADERS ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-4xl font-bold mb-14">Our Leadership</h2>

          <div className="grid md:grid-cols-1 gap-10 mb-12">

            <div className="bg-white p-10 rounded-xl shadow-lg">
              <div className="text-red-600 text-5xl mb-4">👤</div>
              <h4 className="text-xl font-semibold">Amar Akre</h4>
              <p className="text-gray-500 mt-1">Director</p>
            </div>

          </div>

          <p className="text-gray-700 leading-relaxed">
            We treat every customer as a long-term relationship, not a transaction.
            Your trust and investment are handled with complete responsibility and care.
          </p>
        </div>
      </section>

      {/* ================= EXTRA ================= */}
      <Achievements />
      <ReviewsSection />

    </div>
  );
}