import { useState } from "react";
import PromoVideo from "./PromoVideo";

import bannerImg from "../assets/projects/underconstruction/ananda.jpg";

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
          bg-cover
          bg-center
        "
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        {/* OVERLAY */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-r
            from-black/75
            to-black/30
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
          <p className="text-[#bfbfbf] text-[13px] tracking-[1.5px] mb-[8px]">
            KNOW MORE ABOUT US
          </p>

          {/* TITLE */}
          <h2 className="text-white text-[34px] font-bold leading-[1.25] max-w-[600px]">
            10+ Years Of Experience In Gardening <br /> & Landscaping
          </h2>
        </div>
      </section>

      {open && <PromoVideo onClose={() => setOpen(false)} />}
    </>
  );
};

export default PromoBanner;
