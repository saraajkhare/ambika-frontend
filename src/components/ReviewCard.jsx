export default function ReviewCard({ name, time, rating, text }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div className="
      bg-white
      p-6
      rounded-xl
      shadow-[0_8px_25px_rgba(0,0,0,0.08)]
      hover:shadow-[0_12px_35px_rgba(0,0,0,0.12)]
      transition-all duration-300
    ">
      {/* TOP */}
      <div className="flex items-center gap-3 mb-3">
        
        {/* Avatar */}
        <div className="
          w-10 h-10
          rounded-full
          bg-green-700 text-white
          flex items-center justify-center
          font-semibold
        ">
          {initials}
        </div>

        {/* Name + Time */}
        <div>
          <p className="font-semibold text-[15px]">{name}</p>
          <p className="text-xs text-gray-500">{time}</p>
        </div>
      </div>

      {/* Stars */}
      <div className="flex mb-3">
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i} className="text-yellow-400 text-[18px]">★</span>
        ))}
      </div>

      {/* Text */}
      <p className="text-sm text-gray-700 leading-[1.6]">
        {text}
      </p>
    </div>
  );
}