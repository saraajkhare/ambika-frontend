import useCountUp from "../hooks/useCountUp";

export default function Achievements() {
  const projects = useCountUp(5);
  const plots = useCountUp(200);
  const families = useCountUp(200);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <p className="text-sm tracking-widest uppercase text-gray-500">
            AmarInfratech Developments
          </p>
          <h2 className="text-4xl font-bold mt-2">
            Our Growth & <span className="text-green-700">Achievements</span>
          </h2>
        </div>

        <div className="bg-gradient-to-r from-green-800 to-green-700 rounded-2xl p-12 grid grid-cols-1 md:grid-cols-3 gap-10 text-white shadow-xl">

          <Stat 
            icon="📍" 
            value={`${projects} +`} 
            label="Residential Projects Delivered" 
          />

          <Stat 
            icon="🏡" 
            value={`${plots} +`} 
            label="Plots Developed & Sold" 
          />

          <Stat 
            icon="😊" 
            value={`${families} +`} 
            label="Happy Families & Investors" 
          />

        </div>
      </div>
    </section>
  );
}

function Stat({ icon, value, label }) {
  return (
    <div className="text-center">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-4xl font-bold">{value}</h3>
      <p className="mt-2 text-sm opacity-90">{label}</p>
    </div>
  );
}