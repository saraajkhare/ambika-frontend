import { useState } from "react";
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

import devMedia from "../../assets/projects/devendra/dev.png";
import building from "../../assets/building.png";
import amenitiesBg from "../../assets/projects/ananda/fam.jpg";
import devFloor1 from "../../assets/projects/devendra/floor1.jpg";
import devFloor2 from "../../assets/projects/devendra/floor2.jpg";


import gal1 from "../../assets/projects/ananda/gal1.png";
import gal2 from "../../assets/projects/ananda/gal2.png";
import gal3 from "../../assets/projects/ananda/gal3.png";
import gal4 from "../../assets/projects/ananda/gal4.png";
import gal5 from "../../assets/projects/ananda/gal5.png";
import gal6 from "../../assets/projects/ananda/gal6.png";
import ContactParallax from "../../components/ContactParallax";

/* ---------- AMENITY CARD ---------- */
function Amenity({ icon, title, meta }) {
  return (
    <div className="bg-white rounded-xl p-6 text-center shadow-xl">
      <div className="text-4xl text-red-600 mb-3 mx-auto">{icon}</div>
      <h4 className="font-semibold">{title}</h4>
      {meta && <p className="text-sm text-gray-500 mt-1">{meta}</p>}
    </div>
  );
}

const photoSlides = [
  [gal1, gal2],
  [gal3, gal4],
  [gal5, gal6],
];

export default function AmbikaChikana() {
  const [activePhoto, setActivePhoto] = useState(0);

  return (
    <div className="max-w-7xl mx-auto px-4">

      {/* HERO IMAGE */}
    <div className="my-10 rounded-2xl overflow-hidden shadow-2xl bg-white">
  <img
    src={devMedia}
    alt="Ambika Chikana"
    className="w-full h-auto object-contain"
  />
</div>



      {/* RERA */}
      <p className="text-center text-green-700 font-semibold text-xl my-8">
        RERA Number: <span>RERADEVENDRA2023</span>
      </p>

      {/* EXPERIENCE */}
      <section className="bg-gradient-to-b from-white to-green-50 py-24 px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center">

          {/* LEFT */}
          <div className="flex-1">
            <img
              src={building}
              alt="Building"
              className="max-w-lg w-full drop-shadow-2xl mb-6"
            />
            <span className="text-xs tracking-widest text-gray-700 block mb-2">
              AMBIKA'S PROJECTS
            </span>
            <h2 className="text-4xl font-bold leading-tight mb-6">
              Experience Elevated Living at <br />
              <span className="text-green-700">Ambika Chikana</span>
            </h2>
            <button className="bg-red-600 text-white px-7 py-3 rounded-md font-semibold">
              DOWNLOAD BROCHURE
            </button>
          </div>

          {/* RIGHT */}
          <div className="flex gap-6 flex-col md:flex-row">
            <div className="bg-gradient-to-b from-green-900 to-green-800 text-white rounded-2xl p-7 w-64">
              <h4 className="mt-4 font-semibold">WATER</h4>
              <p className="text-sm">Underground & overhead water storage.</p>

              <h4 className="mt-4 font-semibold">DOORS</h4>
              <p className="text-sm">Premium WPC & flush doors.</p>

              <h4 className="mt-4 font-semibold">SECURITY</h4>
              <p className="text-sm">Gated complex with CCTV.</p>
            </div>

            <div className="bg-white rounded-2xl p-7 w-64 shadow-xl">
              <h4 className="font-semibold">INTERIOR</h4>
              <p className="text-sm">Putty finished walls.</p>

              <h4 className="mt-4 font-semibold">EXTERIOR</h4>
              <p className="text-sm">Weather resistant paint.</p>

              <h4 className="mt-4 font-semibold">FLOORING</h4>
              <p className="text-sm">Vitrified tiles.</p>
            </div>
          </div>

        </div>
      </section>

      {/* FLOOR PLANS */}
      <section className="bg-green-950 py-20 text-center">
        <h2 className="text-white text-4xl font-bold mb-14">Our Floor Plans</h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {[devFloor1, devFloor2].map((img, i) => (
            <img key={i} src={img} alt="" className="rounded-xl" />
          ))}
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section className="py-20 text-center">
        <h2 className="text-4xl font-bold mb-10">Photo Gallery</h2>

        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center gap-6">
            {photoSlides[activePhoto].map((img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                className="w-[48%] rounded-xl shadow-lg"
              />
            ))}
          </div>

          <div className="mt-6 flex justify-center gap-3">
            {photoSlides.map((_, i) => (
              <span
                key={i}
                onClick={() => setActivePhoto(i)}
                className={`w-2 h-2 rounded-full cursor-pointer ${
                  i === activePhoto ? "bg-green-700" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* AMENITIES PARALLAX */}
      <section
        className="bg-fixed bg-center bg-cover py-24"
        style={{ backgroundImage: `url(${amenitiesBg})` }}
      >
        <div className="bg-red-700/90 max-w-6xl mx-auto rounded-xl p-14 mb-24">
          <h2 className="text-white text-4xl font-bold text-center mb-10">
            Modern Amenities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Amenity icon={<FaBuilding />} title="Community Hall" />
            <Amenity icon={<FaMountain />} title="Surrounded By Hills" />
            <Amenity icon={<FaChild />} title="Children's Play Area" />
            <Amenity icon={<FaParking />} title="Ample Parking" />
          </div>
        </div>

        <div className="bg-red-700/90 max-w-6xl mx-auto rounded-xl p-14">
          <h2 className="text-white text-4xl font-bold text-center mb-10">
            Road Facilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Amenity icon={<FaHospital />} title="Hospital" meta="1 km" />
            <Amenity icon={<FaSchool />} title="School" meta="2 km" />
            <Amenity icon={<FaBus />} title="Bus Stop" meta="1.8 km" />
            <Amenity icon={<FaHotel />} title="Hotel" meta="2.2 km" />
          </div>
        </div>
      </section>


   <ContactParallax/>
     
      
      {/* MAP */}
      <section className="w-full h-[420px]">
        <iframe
          src="https://www.google.com/maps?q=Ambika+Devendra+Khanapara+Guwahati&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
          title="Ambika Devendra Location"
        />
      </section>

    </div>
  );
}
