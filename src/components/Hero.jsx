import homebg from "../assets/homebg.png";

const Hero = () => {
  return (
    <section className="relative h-[85vh] overflow-hidden">
      <style>{`
        @keyframes kenburns {
          0% { transform: scale(1); }
          100% { transform: scale(1.15); }
        }
        .animate-kenburns {
          animation: kenburns 24s ease-in-out infinite alternate;
        }
      `}</style>
      
      {/* Background Image with Ken Burns */}
      <div 
        className="absolute inset-0 bg-cover bg-center animate-kenburns origin-center"
        style={{ backgroundImage: `url(${homebg})` }}
      />
      
      {/* Rich Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent flex flex-col justify-center pl-[60px] sm:pl-[100px] text-white">
        <h1 className="text-[46px] md:text-[56px] font-extrabold mb-[14px] max-w-[800px] leading-[1.1] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] tracking-tight">
          Real Estate in Nagpur for RERA Approved Residential Plots
        </h1>
        <p className="text-[20px] md:text-[22px] max-w-[600px] text-white/95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] border-l-4 border-[#e30613] pl-4">
          Amar Infratech offers affordable property, planned layouts, and land investment opportunities in key Nagpur locations.
        </p>
      </div>

      {/* Bouncing Scroll Indicator */}
      <div className="absolute bottom-[30px] left-1/2 -translate-x-1/2 animate-bounce opacity-80 pointer-events-none">
        <svg className="w-10 h-10 text-white drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
