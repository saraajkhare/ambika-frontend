import React from "react";

/* ===== IMAGES (replace paths with yours) ===== */
import aboutHero from "../assets/projects/ananda/ananda-master.jpg";
import aboutImg1 from "../assets/projects/ananda/gal1.png";
import aboutImg2 from "../assets/projects/ananda/gal3.png";

import Achievements from "../components/Achievements";
import ReviewsSection from "../components/ReviewsSection"; 

export default function AboutUs() {
  return (
    <div className="w-full overflow-hidden">

      {/* ================= HERO / WHO WE ARE ================= */}
      <section className="relative bg-gray-100 py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT TEXT */}
          <div className="bg-white p-10 rounded-2xl shadow-xl">
            <span className="text-xs tracking-widest text-gray-500 uppercase">
              Who We Are
            </span>

            <h1 className="text-4xl font-bold mt-4">
              About <span className="text-green-700">Ambika Group</span>
            </h1>

            <p className="mt-6 text-gray-700 leading-relaxed">
              Ambika Group, established in the year 2002, is a name to be
              reckoned with, securing the status of one of the fastest-growing
              real estate construction conglomerates in Guwahati.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Over the years, Ambika Group has consistently delivered quality
              and innovation, earning its place among the best real estate
              developers in Guwahati.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Our mission is to shape modern urban living while contributing
              to the city’s rapid growth and infrastructure.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <img
              src={aboutHero}
              alt="Ambika Group"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ================= KNOW MORE ABOUT US ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">

          {/* IMAGES */}
          <div className="grid md:grid-cols-2 gap-8 mb-14">
            <img
              src={aboutImg1}
              alt="Ambika Project"
              className="rounded-xl shadow-lg"
            />
            <img
              src={aboutImg2}
              alt="Ambika Project"
              className="rounded-xl shadow-lg"
            />
          </div>

          {/* TEXT */}
          <span className="text-xs tracking-widest text-gray-500 uppercase">
            Know More About Us
          </span>

          <p className="mt-6 text-gray-700 leading-relaxed">
            For Ambika Group, the journey of transforming the city skylines
            began in the year 2002, and since it has been a remarkable one.
            The Group has become among the fastest growing conglomerate in
            the Real Estate arena of Guwahati.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            The vision to build architecturally sound and aesthetically
            pleasing projects has led to a wide range of residential and
            commercial developments that are truly a class apart.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            With every project, we strive to enhance the way people live,
            work, and invest in Guwahati’s growing real estate landscape.
          </p>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="py-24 px-6 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-6xl mx-auto text-center text-white">

          <span className="text-xs tracking-widest uppercase opacity-80">
            Ambika’s Projects
          </span>

          <h2 className="text-4xl font-bold mt-4 mb-14">
            Our Mission And Vision
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            {/* MISSION */}
            <div className="bg-white/10 backdrop-blur p-10 rounded-xl border border-white/20">
              <h3 className="text-2xl font-semibold mb-4">Mission</h3>
              <p className="text-sm leading-relaxed">
                The guiding principle at Ambika Group is to commit to
                developing strategic buildings on a stipulated time frame,
                both residential and commercial, to make real estate
                development more productive and commercially realistic for
                homebuyers across all classes.
              </p>
            </div>

            {/* VISION */}
            <div className="bg-white/10 backdrop-blur p-10 rounded-xl border border-white/20">
              <h3 className="text-2xl font-semibold mb-4">Vision</h3>
              <p className="text-sm leading-relaxed">
                To have 100% satisfied customers with our promise to adhere
                to commitments and standards of quality while continuously
                innovating to create lasting value in every project we
                deliver.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= OUR LEADERS ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-4xl font-bold mb-14">Our Leaders</h2>

          <div className="grid md:grid-cols-2 gap-10 mb-12">

            <div className="bg-white p-10 rounded-xl shadow-lg">
              <div className="text-red-600 text-5xl mb-4">👤</div>
              <h4 className="text-xl font-semibold">Manoj Jalan</h4>
              <p className="text-gray-500 mt-1">Founder</p>
            </div>

            <div className="bg-white p-10 rounded-xl shadow-lg">
              <div className="text-red-600 text-5xl mb-4">👤</div>
              <h4 className="text-xl font-semibold">Mandip Jalan</h4>
              <p className="text-gray-500 mt-1">Co-Founder</p>
            </div>

          </div>

          <p className="text-gray-700 leading-relaxed">
            Ambika Group strives to deliver world-class structures by
            adhering to uncompromising quality standards, ensuring long-lasting
            value and trust for its customers.
          </p>
        </div>
      </section>

       <Achievements />
        <ReviewsSection />

      
    </div>
  );
}
