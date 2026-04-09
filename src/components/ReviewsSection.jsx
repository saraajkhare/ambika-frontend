import ReviewCard from "./ReviewCard";

const reviews = [
  {
    name: "Pratik Goswani",
    time: "2 months ago",
    rating: 5,
    text: "Very smooth buying experience. The team was transparent and helpful throughout the process. Location is also very promising.",
  },
  {
    name: "Rakesh Paulzagade",
    time: "3 months ago",
    rating: 5,
    text: "Good investment opportunity. Plot layout is well planned and the staff guided us properly at every step.",
  },
  {
    name: "Madhuri Morey",
    time: "1 month ago",
    rating: 5,
    text: "Really satisfied with the service. Everything from site visit to documentation was handled professionally.",
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