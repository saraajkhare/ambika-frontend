import { useState } from "react";

// PLACEHOLDER IMAGES (replace later when sir sends)
import ch1 from "../assets/projects/chikana/ch1.jpeg";
import dh1 from "../assets/projects/dhanna/dh1.jpeg";


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

      {/* GRID */}
      <div className="grid gap-[36px] grid-cols-[repeat(auto-fill,minmax(320px,1fr))]">
        {getProjects().map((project, index) => (
          <div
            key={index}
            className="
              bg-[#f6fff5]
              rounded-[14px]
              overflow-hidden
              shadow-[0_10px_28px_rgba(0,0,0,0.08)]
              transition-all duration-300
              hover:-translate-y-[8px]
              hover:shadow-[0_18px_45px_rgba(0,0,0,0.15)]
            "
          >
            {/* IMAGE */}
            <div className="relative">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-[220px] object-cover"
              />

              <span
                className={`
                  absolute top-[14px] left-[14px]
                  px-[14px] py-[6px]
                  rounded-full text-[13px] font-semibold text-white
                  ${
                    project.status === "Sold Out"
                      ? "bg-[#e84c3d]"
                      : "bg-[#1f7a3f]"
                  }
                `}
              >
                {project.status}
              </span>
            </div>

            {/* CONTENT */}
            <div className="p-[22px]">
              <h3 className="text-[22px] mb-[12px] font-semibold">
                {project.name}
              </h3>

              <button
                className="
                  mt-[16px]
                  bg-[#6b0f0f]
                  hover:bg-[#4a0909]
                  text-white
                  px-[18px] py-[10px]
                  rounded-[6px]
                  text-[14px]
                  transition-colors duration-300
                "
              >
                EXPLORE NOW
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;