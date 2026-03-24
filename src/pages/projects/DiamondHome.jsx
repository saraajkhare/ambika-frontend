import { useState } from "react";

/* ================= ASSETS ================= */
import diamondVideo from "../../assets/projects/diamondhome/diamond.mp4";
import building from "../../assets/projects/diamondhome/diamondbuild.png";
import amenitiesBg from "../../assets/projects/ananda/fam.jpg";

import fl1 from "../../assets/projects/diamondhome/floor1.jpg";
import fl2 from "../../assets/projects/diamondhome/floor2.jpg";
import fl3 from "../../assets/projects/diamondhome/floor3.jpg";
import fl4 from "../../assets/projects/diamondhome/floor4.jpg";
import fl5 from "../../assets/projects/diamondhome/floor5.jpg";
import fl6 from "../../assets/projects/diamondhome/floor6.jpg";
import fl7 from "../../assets/projects/diamondhome/floor7.jpg";
import fl8 from "../../assets/projects/diamondhome/floor8.jpg";
import fl9 from "../../assets/projects/diamondhome/floor9.jpg";

import gal1 from "../../assets/projects/diamondhome/gal1.png";
import gal2 from "../../assets/projects/diamondhome/gal2.png";
import gal3 from "../../assets/projects/diamondhome/gal3.png";
import gal4 from "../../assets/projects/diamondhome/gal4.png";
import gal5 from "../../assets/projects/diamondhome/gal5.png";
import gal6 from "../../assets/projects/diamondhome/gal6.png";

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
import ContactParallax from "../../components/ContactParallax";

/* ================= SMALL COMPONENT ================= */
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



export default function DiamondHome() {
  const [activePhoto, setActivePhoto] = useState(0);

  return (
    <div className="max-w-7xl mx-auto px-4">

      {/* ================= VIDEO HERO ================= */}
      <section className="my-10 rounded-2xl overflow-hidden shadow-2xl">
        <video
          src={diamondVideo}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-[460px] md:h-[520px] object-cover"
        />
      </section>

      {/* ================= RERA ================= */}
      <p className="text-center text-green-700 font-semibold text-xl my-8">
        RERA Number: <span>RERADIAMOND2023</span>
      </p>

      {/* ================= EXPERIENCE ================= */}
      <section className="bg-gradient-to-b from-white to-green-100 py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-14 items-center">

          {/* LEFT */}
          <div className="flex-1">
            <img
              src={building}
              alt="Diamond Home"
              className="max-w-xl w-full mb-6 drop-shadow-2xl"
            />

            <span className="text-xs tracking-widest text-gray-700 block mb-2">
              AMBIKA'S PROJECTS
            </span>

            <h2 className="text-3xl font-bold leading-snug mb-6">
              Experience Elevated Living at <br />
              <span className="text-green-700">Diamond Home</span>
            </h2>

            <button className="bg-red-600 text-white px-7 py-3 rounded-md font-semibold">
              DOWNLOAD BROCHURE
            </button>
          </div>

          {/* RIGHT */}
          <div className="flex gap-6 flex-wrap justify-center">
            <div className="w-64 rounded-3xl p-6 text-white bg-gradient-to-b from-green-800 to-green-900">
              <h4 className="mt-4 font-semibold">WATER</h4>
              <p className="text-sm">24x7 water supply</p>

              <h4 className="mt-4 font-semibold">SECURITY</h4>
              <p className="text-sm">Gated complex with CCTV</p>

              <h4 className="mt-4 font-semibold">POWER</h4>
              <p className="text-sm">Backup for common areas</p>
            </div>

            <div className="w-64 rounded-3xl p-6 bg-white shadow-xl">
              <h4 className="font-semibold">INTERIOR</h4>
              <p className="text-sm text-gray-600">Premium finish</p>

              <h4 className="mt-4 font-semibold">FLOORING</h4>
              <p className="text-sm text-gray-600">Vitrified tiles</p>

              <h4 className="mt-4 font-semibold">BALCONIES</h4>
              <p className="text-sm text-gray-600">Anti-skid tiles</p>
            </div>
          </div>
        </div>
      </section>

     {/* ================= FLOOR PLANS (IMAGE ONLY) ================= */}
<section className="bg-[#0b2e13] py-20">
  <h2 className="text-white text-4xl font-bold text-center mb-14">
    Our Floor Plans
  </h2>

  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">

    <img src={fl1} alt="Floor Plan 1" className="w-full rounded-lg" />
    <img src={fl2} alt="Floor Plan 2" className="w-full rounded-lg" />
    <img src={fl3} alt="Floor Plan 3" className="w-full rounded-lg" />
    <img src={fl4} alt="Floor Plan 4" className="w-full rounded-lg" />
    <img src={fl5} alt="Floor Plan 5" className="w-full rounded-lg" />
    <img src={fl6} alt="Floor Plan 6" className="w-full rounded-lg" />
    <img src={fl7} alt="Floor Plan 7" className="w-full rounded-lg" />
    <img src={fl8} alt="Floor Plan 8" className="w-full rounded-lg" />

    {/* last image centered full width if needed */}
    <img
      src={fl9}
      alt="Floor Plan 9"
      className="w-full rounded-lg md:col-span-2"
    />

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
        <div className="bg-red-700/90 max-w-6xl mx-auto p-12 rounded-xl mb-28">
          <h2 className="text-white text-4xl text-center mb-10">
            Modern Amenities
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <Amenity icon={<FaBuilding />} title="Community Hall" />
            <Amenity icon={<FaMountain />} title="Scenic Surroundings" />
            <Amenity icon={<FaChild />} title="Children's Play Area" />
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

      {/* ================= ABOUT ================= */}
      <section className="bg-gradient-to-b from-white to-gray-100 py-24 px-6">
        <div className="max-w-4xl mx-auto bg-white p-14 rounded-2xl shadow-2xl">
          <span className="text-sm tracking-widest text-red-600 font-semibold">
            ABOUT THE DEVELOPER
          </span>

          <h2 className="text-4xl font-bold mt-3 mb-6">
            About Ambika Housing
          </h2>

          <p className="text-gray-700 leading-relaxed mb-5">
            <strong>Ambika Housing</strong> stands tall as a symbol of
            construction excellence across Guwahati and the Northeast.
          </p>

          <p className="text-gray-700 leading-relaxed mb-5">
            With a focus on affordability, sustainability, and premium quality,
            we deliver spaces designed for long-term value.
          </p>

          <div className="mt-8 p-6 bg-gray-50 border-l-4 border-red-600 rounded-lg">
            <h4 className="font-semibold mb-2">Our Projects</h4>
            <p className="text-gray-600">
              Diamond Home, Ambika Ananda, Ambika Devendra, Ambika Shree,
              Ambika Heritage, Ambika Green, Ambika Shrine
            </p>
          </div>
        </div>
      </section>

  <ContactParallax/>

      {/* ================= MAP ================= */}
      <section className="w-full h-[420px]">
        <iframe
          src="https://www.google.com/maps?q=Diamond+Home+Khanapara+Guwahati&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
          title="Diamond Home Location"
        />
      </section>

    </div>
  );
}
