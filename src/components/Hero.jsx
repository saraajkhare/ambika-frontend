import homebg from "../assets/homebg.png";

const Hero = () => {
  return (
    <section
      className="relative h-[80vh] bg-cover bg-center"
      style={{
        backgroundImage: `url(${homebg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45 flex flex-col justify-center pl-[60px] text-white">
        <h1 className="text-[42px] font-bold mb-[10px]">
          Leading Residential Plots Development Company in Nagpur
        </h1>
        <p className="text-[18px]">
         Providing affordable plots for best investments in key locations
        </p>
      </div>
    </section>
  );
};

export default Hero;