import { useState } from "react";

// PLACEHOLDER IMAGES (replace later when sir sends)
import ch1 from "../assets/projects/chikana/ch1.jpeg";
import dh1 from "../assets/projects/dhamana/dh1.jpeg";


// BOOKING OPEN (use any existing images for now)
import tum1 from "../assets/projects/tumdi/tum1.jpeg";



// ✅ COMPLETED PROJECTS (ONLY 2)
const completedProjects = [
  {
    name: "Chikana Project",
    image: ch1,
    status: "Sold Out",
  },
  {
    name: "Dhamna Project",
    image: dh1,
    status: "Sold Out",
  },
];

// ✅ BOOKING OPEN PROJECTS (ONLY 2)
const bookingProjects = [
  {
    name: "Tumdi Project",
    image: tum1, // placeholder
    status: "Booking Open",
  },
  
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("completed");

  const getProjects = () => {
    if (activeTab === "completed") return completedProjects;
    if (activeTab === "open") return bookingProjects;
    return [];
  };

  return (
    <section className="bg-[#f3fff2] py-[80px] px-[60px]">
      <h2 className="text-center text-[34px] font-bold mb-[30px]">
        Our Projects
      </h2>

      {/* TABS */}
      <div className="flex justify-center gap-[18px] mb-[50px] flex-wrap">
        {[
          { key: "completed", label: "Completed Projects" },
          { key: "open", label: "Booking Open Projects" },
        ].map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`
              px-[28px] py-[12px] rounded-[6px] text-[14px] font-semibold
              transition-all duration-300
              ${
                activeTab === tab.key
                  ? "bg-[#c4161c] text-white"
                  : "bg-[#eaeaea] hover:bg-[#c4161c] hover:text-white"
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid gap-[40px] grid-cols-[repeat(auto-fill,minmax(340px,1fr))]">
        {getProjects().map((project, index) => (
          <div
            key={index}
            className="
              bg-white
              rounded-2xl
              overflow-hidden
              border border-gray-100
              shadow-[0_10px_30px_rgba(0,0,0,0.06)]
              transition-all duration-500
              hover:-translate-y-3
              hover:shadow-[0_24px_50px_rgba(0,0,0,0.12)]
              group
            "
          >
            {/* IMAGE */}
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-[260px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Image Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-300"></div>

              {/* Glassmorphism Badge */}
              <span
                className={`
                  absolute top-[18px] left-[18px]
                  px-[16px] py-[6px]
                  rounded-full text-[11px] font-bold tracking-widest uppercase backdrop-blur-md border border-white/20
                  ${
                    project.status === "Sold Out"
                      ? "bg-red-600/80 text-white shadow-[0_0_15px_rgba(220,38,38,0.5)]"
                      : "bg-[#1f7a3f]/80 text-green-50 shadow-[0_0_15px_rgba(31,122,63,0.5)]"
                  }
                `}
              >
                {project.status}
              </span>

              {/* Title Inside Image */}
              <h3 className="absolute bottom-[24px] left-[24px] text-[26px] font-bold text-white drop-shadow-lg z-10 transition-transform duration-500 group-hover:-translate-y-2">
                {project.name}
              </h3>
            </div>

            {/* CONTENT */}
            <div className="p-[26px]">
              {project.status !== "Sold Out" ? (
                <button
                  className="
                    w-full
                    flex items-center justify-center gap-2
                    bg-gradient-to-r from-[#e30613] to-[#9e0007]
                    hover:from-[#c2000b] hover:to-[#730005]
                    text-white
                    font-bold tracking-wider
                    px-[18px] py-[14px]
                    rounded-xl
                    text-[13px] uppercase
                    transition-all duration-300
                    transform group-hover:scale-[1.02]
                    shadow-lg hover:shadow-[0_8px_20px_rgba(227,6,19,0.3)]
                  "
                >
                  Explore Property
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
              ) : (
                <div className="w-full text-center py-[14px] text-gray-500 font-semibold tracking-wider text-[13px] uppercase bg-gray-100 rounded-xl">
                  Fully Sold
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;