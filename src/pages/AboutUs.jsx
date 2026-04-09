import React, { useState, useEffect } from "react";
import {
  Home,
  MapPin,
  FileText,
  Users,
  Zap,
  Leaf,
  
} from "lucide-react";

/* IMAGES */
import aboutHero from "../assets/homebg.png";
import dh1 from "../assets/projects/dhanna/dh1.jpeg";
import dh4 from "../assets/projects/dhanna/dh4.jpeg";
import dh5 from "../assets/projects/dhanna/dh5.jpeg";


import Achievements from "../components/Achievements";
import ReviewsSection from "../components/ReviewsSection";
import Footer from "../components/Footer";

export default function AboutUs() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [visible, setVisible] = useState(false);

  const images = [dh1, dh4, dh5];

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="w-full overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="bg-[#f8f9fa] py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div
            className={`bg-white p-12 rounded-2xl shadow-lg transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="text-xs tracking-[3px] text-gray-400 uppercase">
              AmarInfratech
            </span>

            <h1 className="text-5xl font-bold mt-4 leading-tight">
              Your Plot. Your Legacy. <br />
              <span className="text-green-700">Our Promise</span>
            </h1>

            <p className="mt-6 text-gray-600 leading-[1.8]">
              We believe land is more than just a piece of earth — it is the foundation of a legacy.
            </p>

            <p className="mt-4 text-gray-600 leading-[1.8]">
              Based in Nagpur, we develop high-potential residential plots designed for long-term value.
            </p>

            <p className="mt-6 font-semibold">
              We don’t just sell plots. We engineer opportunity.
            </p>
          </div>

          <img
            src={aboutHero}
            alt="AmarInfratech project"
            className="rounded-2xl shadow-xl h-[420px] object-cover"
          />
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

          <Stat number="5+" label="Projects Delivered" />
          <Stat number="200+" label="Plots Developed" />
          <Stat number="200+" label="Happy Families" />

        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="Project site"
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
          <img
            src={selectedImg}
            alt="Enlarged view"
            className="max-w-[90%] max-h-[90%] rounded-xl"
          />
        </div>
      )}

      {/* ================= WHY US TEXT ================= */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto space-y-14">

          <Block title="Customer First, Always" />
          <Block title="Effortless Buying Experience" />
          <Block title="Your Investment, Built to Appreciate" />
          <Block title="Locations That Work Harder" />

        </div>
      </section>

      {/* ================= MISSION VISION ================= */}
      <section className="py-24 px-6 bg-gradient-to-r from-red-600 to-red-700 text-white text-center">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold mb-16">Our Vision & Mission</h2>

          <div className="grid md:grid-cols-2 gap-10">

            <div className="bg-white/10 p-10 rounded-xl hover:scale-105 transition">
              <h3 className="text-2xl font-semibold mb-4">Vision</h3>
              <p>
                To be the most trusted residential land developer in Nagpur.
              </p>
            </div>

            <div className="bg-white/10 p-10 rounded-xl hover:scale-105 transition">
              <h3 className="text-2xl font-semibold mb-4">Mission</h3>
              <p>
                To deliver transparent, high-value residential plot communities.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold mb-12 text-center">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <Card icon={<Home />} title="Residential Focus" />
            <Card icon={<MapPin />} title="Strategic Location" />
            <Card icon={<FileText />} title="Legal Clarity" />
            <Card icon={<Users />} title="Relationship Managers" />
            <Card icon={<Zap />} title="Seamless Process" />
            <Card icon={<Leaf />} title="Ready Plots" />
            

          </div>
        </div>
      </section>

      {/* ================= FOUNDER ================= */}
<section className="py-24 px-6 bg-gray-50">
  <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">

    {/* IMAGE */}
    <img
      src={require("../assets/founder.png")}
      alt="Amar Akre Founder"
      className="w-[220px] h-[220px] object-cover rounded-full shadow-lg border-[4px] border-white"
    />

    {/* TEXT */}
    <div className="text-center md:text-left">

      <h2 className="text-3xl font-bold mb-4">Founder’s Note</h2>

      <p className="italic text-gray-600 leading-[1.8]">
        “We don’t see customers as transactions. We see them as people placing
        their trust and savings in our hands. That responsibility drives every
        decision we make at AmarInfratech.”
      </p>

      <p className="mt-6 font-semibold text-lg">
        — Amar Akre
      </p>

      <p className="text-gray-500 text-sm">
        Founder, AmarInfratech
      </p>

    </div>
  </div>
</section>

      <Achievements />
      <ReviewsSection />
      <Footer/>

    </div>
  );
}

/* COMPONENTS */

function Stat({ number, label }) {
  return (
    <div className="bg-green-50 p-8 rounded-xl shadow hover:scale-105 transition">
      <h3 className="text-4xl font-bold text-green-700">{number}</h3>
      <p className="mt-2 text-gray-600">{label}</p>
    </div>
  );
}

function Card({ icon, title }) {
  return (
    <div className="p-6 border rounded-xl shadow hover:shadow-lg transition text-center">
      <div className="mb-4 flex justify-center text-green-700">{icon}</div>
      <h4 className="font-semibold">{title}</h4>
    </div>
  );
}

function Block({ title }) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-yellow-700 mb-2">
        {title}
      </h3>
      <p className="text-gray-700 leading-[1.8]">
        Clean, transparent and customer-first approach across every project.
      </p>
    </div>
  );
}