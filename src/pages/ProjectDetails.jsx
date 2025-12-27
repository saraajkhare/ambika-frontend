import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const { projectSlug } = useParams();

  // Only Ambika Ananda for now
  if (projectSlug !== "ambika-ananda") {
    return (
      <h2 className="p-10 text-xl font-semibold">
        Project not found
      </h2>
    );
  }

  return (
    <div className="bg-white px-[80px] py-[40px] max-[900px]:px-5">

      {/* ================= TOP MEDIA ================= */}
      <div className="grid grid-cols-2 gap-[30px] mb-[30px] max-[900px]:grid-cols-1">

        {/* VIDEO */}
        <div className="rounded-[16px] overflow-hidden bg-black shadow-[0_10px_25px_rgba(0,0,0,0.15)]">
          <iframe
            src="https://www.youtube.com/embed/xQ1Fx9gtfbw"
            title="Ambika Ananda Video 1"
            allowFullScreen
            className="w-full h-[420px] border-0 max-[900px]:h-[260px]"
          />
        </div>

        {/* IMAGE */}
        <div className="rounded-[16px] overflow-hidden bg-black shadow-[0_10px_25px_rgba(0,0,0,0.15)]">
          <img
            src={require("../assets/projects/ananda-master.jpg")}
            alt="Ambika Ananda Layout"
            className="w-full h-[420px] object-cover max-[900px]:h-[260px]"
          />
        </div>
      </div>

      {/* ================= RERA ================= */}
      <p className="text-center text-[20px] font-semibold text-[#1e7f2d] my-[30px] mb-[50px]">
        RERA Number:{" "}
        <span className="font-bold">
          RERAAKM440F2022-2023
        </span>
      </p>

      {/* ================= SECOND ROW ================= */}
      <div className="grid grid-cols-2 gap-[30px] mb-[30px] max-[900px]:grid-cols-1">

        {/* IMAGE */}
        <div className="rounded-[16px] overflow-hidden bg-black shadow-[0_10px_25px_rgba(0,0,0,0.15)]">
          <img
            src={require("../assets/projects/ananda/ananda-master.jpg")}
            alt="Ambika Ananda Gate"
            className="w-full h-[420px] object-cover max-[900px]:h-[260px]"
          />
        </div>

        {/* VIDEO */}
        <div className="rounded-[16px] overflow-hidden bg-black shadow-[0_10px_25px_rgba(0,0,0,0.15)]">
          <iframe
            src="https://www.youtube.com/embed/JvmNsL_vxbk"
            title="Ambika Ananda Video 2"
            allowFullScreen
            className="w-full h-[420px] border-0 max-[900px]:h-[260px]"
          />
        </div>
      </div>

    </div>
  );
};

export default ProjectDetails;
