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

/* IMAGES */
import building from "../../assets/building.png";
import amenitiesBg from "../../assets/projects/ananda/fam.jpg";
import mediaImage from "../../assets/projects/ananda/ananda-master.jpg";

import floor1 from "../../assets/projects/ananda/floor1.jpg";
import floor2 from "../../assets/projects/ananda/floor2.jpg";
import floor3 from "../../assets/projects/ananda/floor3.jpg";
import floor4 from "../../assets/projects/ananda/floor4.jpg";
import floor5 from "../../assets/projects/ananda/floor5.jpg";
import floor6 from "../../assets/projects/ananda/floor6.jpg";
import floor7 from "../../assets/projects/ananda/floor7.jpg";
import floor8 from "../../assets/projects/ananda/floor8.jpg";


import gal1 from "../../assets/projects/ananda/gal1.png";
import gal2 from "../../assets/projects/ananda/gal2.png";
import gal3 from "../../assets/projects/ananda/gal3.png";
import gal4 from "../../assets/projects/ananda/gal4.png";

import ContactParalax from "../../components/ContactParallax";

export default function AmbikaAnanda() {
  const [activePhoto, setActivePhoto] = useState(0);

  const photoSlides = [
    [gal1, gal2],
    [gal3, gal4],
  ];

  return (
    <div className="w-full">

      {/* ================= MEDIA IMAGE ================= */}
      <div className="max-w-7xl mx-auto mt-10 rounded-2xl overflow-hidden shadow-2xl">
        <img
          src={mediaImage}
          alt="Ambika Ananda"
          className="w-full h-[420px] object-cover"
        />
      </div>

      {/* ================= RERA ================= */}
      <p className="text-center text-xl font-semibold text-green-700 my-8">
        RERA Number: <span className="font-bold">RERAAKM440F2022-2023</span>
      </p>

      {/* ================= EXPERIENCE ================= */}
      <section className="bg-gradient-to-b from-white to-green-50 py-24 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-14 items-center">

          {/* LEFT */}
          <div className="flex-1">
            <img
              src={building}
              alt="Building"
              className="max-w-xl drop-shadow-2xl mb-6"
            />

            <span className="block text-xs tracking-widest mb-3">
              AMBIKA'S PROJECTS
            </span>

            <h2 className="text-4xl font-semibold leading-tight mb-6">
              Experience Elevated Living at <br />
              <span className="text-green-700">Ambika Ananda</span>
            </h2>

            <button className="bg-red-600 text-white px-7 py-3 rounded-md font-semibold">
              DOWNLOAD BROCHURE
            </button>
          </div>

          {/* RIGHT */}
          <div className="flex gap-6 flex-col sm:flex-row">

            {/* GREEN CARD */}
            <div
              className="w-[260px] rounded-3xl text-white p-7"
              style={{
                background:
                  "linear-gradient(rgba(22,94,48,0.9), rgba(22,94,48,0.95)), url('../../assets/projects/ananda/bathroom.jpg') center/cover",
              }}
            >
              <h4 className="mt-4 font-semibold">WATER</h4>
              <p className="text-sm mt-1">
                Underground & overhead water storage.
              </p>

              <h4 className="mt-4 font-semibold">SECURITY</h4>
              <p className="text-sm mt-1">
                CCTV & gated community.
              </p>
            </div>

            {/* WHITE CARD */}
            <div className="w-[260px] bg-white rounded-3xl p-7 shadow-xl">
              <h4 className="font-semibold">FLOORING</h4>
              <p className="text-sm text-gray-600">
                Premium vitrified tiles.
              </p>

              <h4 className="mt-4 font-semibold">FINISH</h4>
              <p className="text-sm text-gray-600">
                Weather resistant exterior paint.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FLOOR PLANS ================= */}
      <section className="bg-green-900 py-20 text-center">
        <h2 className="text-4xl text-white font-bold mb-16">
          Our Floor Plans
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
          {[floor1, floor2, floor3, floor4,floor5, floor6,floor7,floor8].map((img, i) => (
            <img
              key={i}
              src={img}
              alt="Floor Plan"
              className="rounded-xl shadow-2xl"
            />
          ))}
        </div>
        
        
      </section>

      {/* ================= PHOTO GALLERY ================= */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-semibold mb-10">Photo Gallery</h2>

        <div className="max-w-6xl mx-auto">
          {photoSlides.map((slide, i) => (
            <div
              key={i}
              className={`${
                i === activePhoto ? "flex" : "hidden"
              } gap-6 justify-center`}
            >
              {slide.map((img, j) => (
                <img
                  key={j}
                  src={img}
                  alt="Gallery"
                  className="w-[48%] rounded-xl shadow-xl"
                />
              ))}
            </div>
          ))}
        </div>

        <div className="mt-6">
          {photoSlides.map((_, i) => (
            <span
              key={i}
              onClick={() => setActivePhoto(i)}
              className={`inline-block w-2 h-2 mx-1 rounded-full cursor-pointer ${
                i === activePhoto ? "bg-green-700" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </section>

      {/* ================= AMENITIES (PARALLAX) ================= */}
      <section
        className="py-24 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${amenitiesBg})` }}
      >

        {/* RED BLOCK 1 */}
        <div className="max-w-6xl mx-auto bg-red-700 bg-opacity-90 rounded-xl px-10 py-16 text-white">
          <h2 className="text-4xl font-bold text-center mb-10">
            Modern Amenities
          </h2>

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Amenity icon={<FaBuilding />} title="Community Hall" ce/>
            <Amenity icon={<FaMountain />} title="Surrounded By Hills" />
            <Amenity icon={<FaChild />} title="Children Play Area" />
            <Amenity icon={<FaParking />} title="Ample Parking" />
          </div> 
        </div>

        <div className="h-28" />

        {/* RED BLOCK 2 */}
        <div className="max-w-6xl mx-auto bg-red-700 bg-opacity-90 rounded-xl px-10 py-16 text-white">
          <h2 className="text-4xl font-bold text-center mb-10">
            Road Facilities
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Amenity icon={<FaHospital />} title="Hospital" meta="1 km" />
            <Amenity icon={<FaSchool />} title="School" meta="2 km" />
            <Amenity icon={<FaBus />} title="Bus Stop" meta="1.8 km" />
            <Amenity icon={<FaHotel />} title="Hotel" meta="2.2 km" />
          </div>
        </div>

      </section>

      {/* ================= ABOUT AMBIKA HOUSING ================= */}
<section className="bg-gray-50 py-20 px-6">
  <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl px-10 py-14">

    <h2 className="text-4xl font-bold mb-8 relative">
      About Ambika Housing
      <span className="block w-20 h-1 bg-red-600 mt-3 rounded"></span>
    </h2>

    <div className="space-y-6 text-[15.5px] leading-[1.95] text-gray-800">

      <p>
        <strong>Ambika Housing</strong> stands tall as the pinnacle for the best
        construction excellence in Guwahati, Assam, and the entire Northeast
        region. Renowned as the best construction company in Guwahati, we’ve
        earned a reputation for unparalleled quality, reliability, and
        innovation across every project we undertake. Our commitment to
        excellence is evident in every facet of our work, making us the
        top-rated construction firm in the city.
      </p>

      <p>
        At <strong>Ambika Housing</strong>, we prioritize affordability without
        compromising on quality, ensuring that we remain one of the most
        affordable builders in Guwahati. We are also mentioned in{" "}
        <a
          href="https://www.magicbricks.com/"
          target="_blank"
          rel="noreferrer"
          className="text-red-600 font-semibold underline"
        >
          Magic Bricks
        </a>
        . With a team of highly skilled professionals and cutting-edge
        technology, we deliver cost-effective construction solutions that meet
        the diverse needs of our clients while exceeding expectations.
      </p>

      <p>
        With years of experience under our belt, Ambika Housing boasts a team
        of experienced contractors in Guwahati who bring expertise and
        precision to every project, be it residential, commercial, or
        industrial. As a quality construction company near you, we prioritize
        customer satisfaction, striving to turn your vision into reality
        while maintaining the highest standards of craftsmanship and
        attention to detail.
      </p>

      <p>
        Our commitment to sustainability sets us apart as eco-friendly
        builders in Guwahati. Embracing sustainable practices and
        eco-friendly materials, we minimize environmental impact while
        creating enduring spaces that inspire. From innovative designs by
        modern architects to personalized home construction solutions,
        Ambika Housing offers a comprehensive range of services tailored to
        your needs.
      </p>

      <p>
        In addition to our flagship project, <strong>Ambika Ananda</strong>,
        we’re proud to introduce a range of other offerings:
        <strong>
          {" "}
          Ambika Ananda, Ambika Devendra, Ambika Shree, Ambika Heritage,
          Ambika Green, Ambika Shrine, and Diamond Home
        </strong>
        . Each project embodies our dedication to quality, innovation, and
        customer satisfaction, offering luxurious living and strong
        investment opportunities in Guwahati’s growing real estate market.
      </p>

      <p className="font-semibold text-gray-900">
        Trust Ambika Housing as your reliable partner in construction — where
        quality meets affordability, innovation meets reliability, and
        dreams become reality.
      </p>

    </div>
  </div>
</section>

 <ContactParalax/>
     
             
   

      {/* ================= MAP ================= */}
      <section className="w-full h-[420px]">
        <iframe
          src="https://www.google.com/maps?q=Ambika+Ananda+Guwahati&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
          title="Ambika Ananda Map"
        />
      </section>

    </div>
  );
}

/* ===== AMENITY CARD ===== */
function Amenity({ icon, title, meta }) {
  return (
    <div className="bg-white text-black rounded-xl p-6 text-center shadow-xl">
      <div className="text-3xl text-red-600 mb-3">{icon}</div>
      <h4 className="font-semibold">{title}</h4>
      {meta && <p className="text-sm text-gray-600">{meta}</p>}
    </div>
  );
}
