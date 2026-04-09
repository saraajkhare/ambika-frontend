

export default function AboutHighlight() {
  return (
    <>
      

      {/* FEATURES SECTION */}
      <section className="relative z-[5] mt-[-190px] px-[80px] pb-[40px] max-lg:px-6 max-lg:mt-[-60px] max-lg:pb-[80px]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-3 gap-[36px] max-lg:grid-cols-1">
          
          {/* CARD 1 */}
          <div className="bg-gradient-to-b from-[#184f31] to-[#0f3b22] rounded-[18px] px-[36px] pt-[42px] pb-[46px] text-white text-left shadow-[0_18px_40px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_34px_70px_rgba(0,0,0,0.38)] max-lg:text-center">
            <div className="w-[42px] h-[42px] rounded-full bg-[#a8d84e] text-[#0f3b22] flex items-center justify-center text-[18px] font-bold mb-[22px] max-lg:mx-auto">
              ✓
            </div>
            <h4 className="font-[Inter] text-[15px] tracking-[0.6px] font-semibold mb-[10px]">
             ASSURED LEGAL TITLE
            </h4>
            <p className="font-[Inter] text-[14.5px] leading-[1.65] text-white/90">
              We provide completely legal government, RERA approved plots.
  Bank loan can be taken
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-gradient-to-b from-[#184f31] to-[#0f3b22] rounded-[18px] px-[36px] pt-[42px] pb-[46px] text-white text-left shadow-[0_18px_40px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_34px_70px_rgba(0,0,0,0.38)] max-lg:text-center">
            <div className="w-[42px] h-[42px] rounded-full bg-[#a8d84e] text-[#0f3b22] flex items-center justify-center text-[18px] font-bold mb-[22px] max-lg:mx-auto">
              ✓
            </div>
            <h4 className="font-[Inter] text-[15px] tracking-[0.6px] font-semibold mb-[10px]">
              FLEXIBLE PAYMENT TERMS
            </h4>
            <p className="font-[Inter] text-[14.5px] leading-[1.65] text-white/90">
              Payment terms suitable to your budget
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-gradient-to-b from-[#184f31] to-[#0f3b22] rounded-[18px] px-[36px] pt-[42px] pb-[46px] text-white text-left shadow-[0_18px_40px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_34px_70px_rgba(0,0,0,0.38)] max-lg:text-center">
            <div className="w-[42px] h-[42px] rounded-full bg-[#a8d84e] text-[#0f3b22] flex items-center justify-center text-[18px] font-bold mb-[22px] max-lg:mx-auto">
              ✓
            </div>
            <h4 className="font-[Inter] text-[15px] tracking-[0.6px] font-semibold mb-[10px]">
              TIMELY DELIVERY
            </h4>
            <p className="font-[Inter] text-[14.5px] leading-[1.65] text-white/90">
              You will get timely delivery of your plots
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
