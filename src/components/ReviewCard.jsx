export default function ReviewCard({ name, time, rating, text }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center font-bold">
          {name[0]}
        </div>
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-xs text-gray-500">{time}</p>
        </div>
      </div>

      <p className="text-yellow-400 mb-2">
        {"★".repeat(rating)}
      </p>

      <p className="text-sm text-gray-700">{text}</p>
    </div>
  );
}
