import ReviewCard from "./ReviewCard";

const reviews = [
  {
    name: "Ranjit Chouhan",
    time: "1 year ago",
    rating: 5,
    text: "Well connected place at affordable rates. Very peaceful place to live in.",
  },
  {
    name: "Meghalee Saharia",
    time: "1 year ago",
    rating: 5,
    text: "Get your dream home at Ambika Ananda.",
  },
  {
    name: "Chandan Kumar",
    time: "1 year ago",
    rating: 5,
    text: "Staff behaviour is very good and cooperative. Also affordable.",
  },
];

export default function ReviewsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review, i) => (
          <ReviewCard key={i} {...review} />
        ))}
      </div>
    </section>
  );
}
