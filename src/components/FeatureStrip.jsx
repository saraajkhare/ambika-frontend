const images = [
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
];

const FeatureStrip = () => {
  return (
    <section className="bg-gradient-to-b from-[#0f3b22] to-[#0b2e1a] py-[26px]">
      <div className="max-w-[1400px] mx-auto grid grid-cols-4 gap-[28px] px-[32px] max-lg:grid-cols-2 max-sm:grid-cols-1">
        {images.map((img, index) => (
          <div
            key={index}
            className="
              h-[220px]
              rounded-[18px]
              overflow-hidden
              flex items-center justify-center
              shadow-[0_12px_35px_rgba(0,0,0,0.35)]
              transition-all duration-300
              hover:-translate-y-[6px]
              hover:shadow-[0_20px_50px_rgba(0,0,0,0.45)]
            "
          >
            <img
              src={img}
              alt={`Feature ${index + 1}`}
              className="w-full h-full object-cover rounded-[12px] block"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureStrip;
