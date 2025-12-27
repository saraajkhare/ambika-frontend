import building from "../assets/building.png";

export default function AboutHighlight() {
  return (
    <>
      {/* ABOUT SECTION */}
      <section
        className="relative pt-[70px] pb-[160px]"
        style={{
          backgroundImage: "url('/assets/background.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "520px",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          {/* HEADER */}
          <div className="max-w-[860px] mx-auto mb-[15px]">
            <h2 className="font-[Playfair_Display] text-[38px] leading-[1.25] font-bold text-[#111] mb-3">
              Leading real estate company in Guwahati
            </h2>

            <p className="font-[Inter] text-[16px] leading-[1.7] text-[#555]">
              Ambika Housing is dedicated to delivering thoughtfully designed
              homes with uncompromising construction quality and
              Vastu-compliant planning.
            </p>
          </div>

          {/* BUILDING IMAGE */}
          <div className="mt-[-70px] mb-[-90px]">
            <img
              src={building}
              alt="Building"
              className="w-full max-w-[1080px] mx-auto block"
            />
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="relative z-[5] mt-[-190px] px-[80px] pb-[40px] max-lg:px-6 max-lg:mt-[-60px] max-lg:pb-[80px]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-3 gap-[36px] max-lg:grid-cols-1">
          
          {/* CARD 1 */}
          <div className="bg-gradient-to-b from-[#184f31] to-[#0f3b22] rounded-[18px] px-[36px] pt-[42px] pb-[46px] text-white text-left shadow-[0_18px_40px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_34px_70px_rgba(0,0,0,0.38)] max-lg:text-center">
            <div className="w-[42px] h-[42px] rounded-full bg-[#a8d84e] text-[#0f3b22] flex items-center justify-center text-[18px] font-bold mb-[22px] max-lg:mx-auto">
              ✓
            </div>
            <h4 className="font-[Inter] text-[15px] tracking-[0.6px] font-semibold mb-[10px]">
              ASSURED QUALITY
            </h4>
            <p className="font-[Inter] text-[14.5px] leading-[1.65] text-white/90">
              Premium construction standards with attention to detail at every stage.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-gradient-to-b from-[#184f31] to-[#0f3b22] rounded-[18px] px-[36px] pt-[42px] pb-[46px] text-white text-left shadow-[0_18px_40px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_34px_70px_rgba(0,0,0,0.38)] max-lg:text-center">
            <div className="w-[42px] h-[42px] rounded-full bg-[#a8d84e] text-[#0f3b22] flex items-center justify-center text-[18px] font-bold mb-[22px] max-lg:mx-auto">
              ✓
            </div>
            <h4 className="font-[Inter] text-[15px] tracking-[0.6px] font-semibold mb-[10px]">
              AFTER SALES SERVICE
            </h4>
            <p className="font-[Inter] text-[14.5px] leading-[1.65] text-white/90">
              Dedicated support that ensures long-term satisfaction for homeowners.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-gradient-to-b from-[#184f31] to-[#0f3b22] rounded-[18px] px-[36px] pt-[42px] pb-[46px] text-white text-left shadow-[0_18px_40px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_34px_70px_rgba(0,0,0,0.38)] max-lg:text-center">
            <div className="w-[42px] h-[42px] rounded-full bg-[#a8d84e] text-[#0f3b22] flex items-center justify-center text-[18px] font-bold mb-[22px] max-lg:mx-auto">
              ✓
            </div>
            <h4 className="font-[Inter] text-[15px] tracking-[0.6px] font-semibold mb-[10px]">
              VALUE FOR MONEY
            </h4>
            <p className="font-[Inter] text-[14.5px] leading-[1.65] text-white/90">
              Homes designed to offer lasting value without unnecessary costs.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
