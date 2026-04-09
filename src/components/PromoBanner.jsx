import { useState } from "react";
import PromoVideo from "./PromoVideo";
import bannerVideo from "../assets/myvid.mp4";

const PromoBanner = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section
        className="
          relative
          h-[420px]
          max-w-[1400px]
          mx-auto
          my-[80px]
          rounded-[18px]
          overflow-hidden
        "
      >
        {/* VIDEO BACKGROUND */}
        <video
          src={bannerVideo}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-r
            from-black/80
            to-black/40
            p-[60px]
            flex flex-col justify-center
          "
        >
          {/* PLAY BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="
              w-[64px] h-[64px]
              rounded-full
              bg-[#2ecc71]
              text-black
              text-[22px]
              flex items-center justify-center
              mb-[24px]
              transition-all duration-300
              hover:scale-110
              hover:shadow-[0_0_20px_rgba(46,204,113,0.6)]
            "
          >
            ▶
          </button>

          {/* SUBTITLE */}
          <p className="text-[#d1d1d1] text-[13px] tracking-[1.8px] mb-[8px] uppercase">
            Residential Land Development | Nagpur
          </p>

          {/* MAIN TAGLINE */}
          <h2 className="text-white text-[36px] font-bold leading-[1.25] max-w-[650px] mb-[10px]">
            Your Plot. Your Legacy. Our Promise
          </h2>

          {/* SUPPORT TEXT */}
          <p className="text-white/80 text-[15px] max-w-[520px] leading-[1.6]">
            We don’t just sell plots. We engineer opportunity — delivering
            development-ready land in high-potential locations designed to grow in value.
          </p>
        </div>
      </section>

      {open && <PromoVideo onClose={() => setOpen(false)} />}
    </>
  );
};

export default PromoBanner;