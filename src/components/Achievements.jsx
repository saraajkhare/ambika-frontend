import useCountUp from "../hooks/useCountUp";

export default function Achievements() {
  const space = useCountUp(5);
  const units = useCountUp(300);
  const families = useCountUp(300);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <p className="text-sm tracking-widest uppercase text-gray-500">
            Ambika’s Projects
          </p>
          <h2 className="text-4xl font-bold mt-2">
            Our Reviews and <span className="text-green-700">Achievements</span>
          </h2>
        </div>

        <div className="bg-gradient-to-r from-green-800 to-green-700 rounded-2xl p-12 grid grid-cols-1 md:grid-cols-3 gap-10 text-white shadow-xl">

          <Stat icon="⭐" value={`${space} Lacs +`} label="Sq Ft Total Constructed Space" />
          <Stat icon="✅" value={`${units} +`} label="Flats / Commercial Units" />
          <Stat icon="😊" value={`${families} +`} label="Happy Families" />

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
