import { useState } from "react";

// COMPLETED
import heritage from "../assets/projects/heritage.jpg";
import green from "../assets/projects/green.jpg";
import residency from "../assets/projects/residency.jpg";
import shreehari from "../assets/projects/shreehari.jpg";
import enclave from "../assets/projects/enclave.jpg";
import estate from "../assets/projects/estate.jpg";
import apartment from "../assets/projects/apartment.jpg";
import devendra from "../assets/projects/devendra.jpg";
import benu from "../assets/projects/benu.jpg";
import tarahira from "../assets/projects/tarahira.jpg";

// UNDER CONSTRUCTION
import ananda from "../assets/projects/underconstruction/ananda.jpg";
import devi from "../assets/projects/underconstruction/devi.jpg";
import diamondhome from "../assets/projects/underconstruction/diamondhome.jpg";

// UPCOMING
import shrine from "../assets/projects/upcoming/shrine.jpg";

const completedProjects = [
  { name: "Ambika Heritage", image: heritage, units: 33, floors: 7, status: "Sold Out" },
  { name: "Ambika Green", image: green, units: 35, floors: 6, status: "Sold Out" },
  { name: "Ambika Residency", image: residency, units: 8, floors: 4, status: "Sold Out" },
  { name: "Ambika Shreehari", image: shreehari, units: 24, floors: 6, status: "Sold Out" },
  { name: "Ambika Enclave", image: enclave, units: 18, floors: 5, status: "Sold Out" },
  { name: "Ambika Estate", image: estate, units: 20, floors: 5, status: "Sold Out" },
  { name: "Ambika Apartment", image: apartment, units: 14, floors: 4, status: "Sold Out" },
  { name: "Ambika Devendra", image: devendra, units: 12, floors: 4, status: "Sold Out" },
  { name: "Ambika Benu", image: benu, units: 10, floors: 3, status: "Sold Out" },
  { name: "Ambika Tarahira", image: tarahira, units: 16, floors: 5, status: "Sold Out" },
];

const underConstructionProjects = [
  { name: "Ambika Ananda", image: ananda, units: 194, floors: "G+10", status: "Booking Open" },
  { name: "Diamond Home", image: diamondhome, units: 181, floors: "G+13", status: "Booking Open" },
  { name: "Ambika Devi", image: devi, units: 96, floors: "G+8", status: "Booking Open" },
];

const upcomingProjects = [
  { name: "Ambika Shrine", image: shrine, status: "Upcoming" },
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("completed");

  const getProjects = () => {
    if (activeTab === "completed") return completedProjects;
    if (activeTab === "under") return underConstructionProjects;
    return upcomingProjects;
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
          { key: "under", label: "Under Construction" },
          { key: "upcoming", label: "Upcoming Projects" },
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

              {project.units && (
                <p className="text-[14.5px] text-[#444] mb-[6px]">
                  <strong>Total Units:</strong> {project.units}
                </p>
              )}

              {project.floors && (
                <p className="text-[14.5px] text-[#444] mb-[6px]">
                  <strong>Total Floors:</strong> {project.floors}
                </p>
              )}

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
