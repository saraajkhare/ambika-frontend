import { useState } from "react";

/* ================= IMAGES ================= */
import building from "../../assets/projects/shree/shreebuild.png";
import amenitiesBg from "../../assets/projects/ananda/fam.jpg";
import shFloor1 from "../../assets/projects/shree/floor1.jpg";
import shFloor2 from "../../assets/projects/shree/floor2.jpg";
import shMedia from "../../assets/projects/shree/shree.png";

import gal1 from "../../assets/projects/ananda/gal1.png";
import gal2 from "../../assets/projects/ananda/gal2.png";
import gal3 from "../../assets/projects/ananda/gal3.png";
import gal4 from "../../assets/projects/ananda/gal4.png";
import gal5 from "../../assets/projects/ananda/gal5.png";
import gal6 from "../../assets/projects/ananda/gal6.png";
import ContactParallax from "../../components/ContactParallax";

/* ================= ICONS ================= */
import {
  FaBuilding,
  FaMountain,
  FaChild,
  FaParking,
  FaHospital,
  FaSchool,
  FaBus,
  FaHotel,
} from "react-icons/fa";

/* ================= AMENITY CARD ================= */
function Amenity({ icon, title, meta }) {
  return (
    <div className="bg-white rounded-xl p-6 text-center shadow-xl">
      <div className="text-3xl text-red-600 mb-3">{icon}</div>
      <h4 className="font-semibold">{title}</h4>
      {meta && <p className="text-sm text-gray-600">{meta}</p>}
    </div>
  );
}

/* ================= DATA ================= */
const photoSlides = [
  [gal1, gal2],
  [gal3, gal4],
  [gal5, gal6],
];

const floorPlans = [shFloor1, shFloor2];

export default function AmbikaShree() {
  const [activePhoto, setActivePhoto] = useState(0);

  return (
    <div className="max-w-7xl mx-auto px-4">

      {/* ================= HERO ================= */}
      <div className="my-10 rounded-2xl overflow-hidden shadow-2xl">
        <img
          src={shMedia}
          alt="Ambika Shree"
          className="w-full h-[420px] md:h-[520px] object-cover"
        />
      </div>

      {/* ================= RERA ================= */}
      <p className="text-center text-green-700 font-semibold text-xl my-8">
        RERA Number: <span>RERASHREE2023</span>
      </p>

      {/* ================= EXPERIENCE ================= */}
      <section className="bg-gradient-to-b from-white to-green-100 py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-14 items-center">

          {/* LEFT */}
          <div className="flex-1">
            <img
              src={building}
              alt="Ambika Shree"
              className="max-w-xl w-full mb-6 drop-shadow-2xl"
            />

            <span className="text-xs tracking-widest text-gray-700 block mb-2">
              AMBIKA'S PROJECTS
            </span>

            <h2 className="text-3xl font-bold leading-snug mb-6">
              Experience Elevated Living at <br />
              <span className="text-green-700">Ambika Shree</span>
            </h2>

            <button className="bg-red-600 text-white px-7 py-3 rounded-md font-semibold">
              DOWNLOAD BROCHURE
            </button>
          </div>

          {/* RIGHT */}
          <div className="flex gap-6 flex-wrap justify-center">
            <div
              className="w-64 rounded-3xl p-6 text-white"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(22,94,48,0.9), rgba(22,94,48,0.95)), url('/bathroom.jpg')",
              }}
            >
              <h4 className="mt-4 font-semibold">WATER</h4>
              <p className="text-sm">Underground & overhead storage</p>

              <h4 className="mt-4 font-semibold">DOORS</h4>
              <p className="text-sm">Premium WPC doors</p>

              <h4 className="mt-4 font-semibold">SECURITY</h4>
              <p className="text-sm">CCTV & gated complex</p>
            </div>

            <div className="w-64 rounded-3xl p-6 bg-white shadow-xl">
              <h4 className="font-semibold">INTERIOR</h4>
              <p className="text-sm text-gray-600">Putty finish walls</p>

              <h4 className="mt-4 font-semibold">EXTERIOR</h4>
              <p className="text-sm text-gray-600">Weather paint</p>

              <h4 className="mt-4 font-semibold">FLOORING</h4>
              <p className="text-sm text-gray-600">Vitrified tiles</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FLOOR PLANS ================= */}
      <section className="bg-green-950 py-20">
        <h2 className="text-4xl text-white font-bold text-center mb-12">
          Our Floor Plans
        </h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {floorPlans.map((img, i) => (
            <div
              key={i}
              className="bg-green-950 p-6 rounded-2xl "
            >
              <img
                src={img}
                alt="Floor Plan"
                className="bg-green-950 w-full rounded-xl p-4"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ================= PHOTO GALLERY ================= */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-8">Photo Gallery</h2>

        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center gap-6">
            {photoSlides[activePhoto].map((img, i) => (
              <img
                key={i}
                src={img}
                alt="Gallery"
                className="w-[48%] rounded-xl shadow-xl"
              />
            ))}
          </div>

          <div className="mt-6 flex justify-center gap-3">
            {photoSlides.map((_, i) => (
              <span
                key={i}
                onClick={() => setActivePhoto(i)}
                className={`h-2 w-2 rounded-full cursor-pointer ${
                  i === activePhoto ? "bg-green-700" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= AMENITIES ================= */}
      <section
        className="bg-fixed bg-cover bg-center py-24"
        style={{ backgroundImage: `url(${amenitiesBg})` }}
      >
        <div className="bg-red-700/90 max-w-6xl mx-auto p-12 rounded-xl mb-24">
          <h2 className="text-white text-4xl text-center mb-10">
            Modern Amenities
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <Amenity icon={<FaBuilding />} title="Community Hall" />
            <Amenity icon={<FaMountain />} title="Hills View" />
            <Amenity icon={<FaChild />} title="Kids Play Area" />
            <Amenity icon={<FaParking />} title="Parking" />
          </div>
        </div>

        <div className="bg-red-700/90 max-w-6xl mx-auto p-12 rounded-xl">
          <h2 className="text-white text-4xl text-center mb-10">
            Road Facilities
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <Amenity icon={<FaHospital />} title="Hospital" meta="1 km" />
            <Amenity icon={<FaSchool />} title="School" meta="2 km" />
            <Amenity icon={<FaBus />} title="Bus Stop" meta="1.8 km" />
            <Amenity icon={<FaHotel />} title="Hotel" meta="2.2 km" />
          </div>
        </div>
      </section>
      <ContactParallax/>

     

            

      {/* ================= MAP ================= */}
      <section className="w-full h-[420px]">
        <iframe
          src="https://www.google.com/maps?q=Ambika+Shree+Khanapara+Guwahati&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
          title="Ambika Shree Location"
        />
      </section>

    </div>
  );
}
