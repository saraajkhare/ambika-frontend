import { Link } from "react-router-dom";
import { blogs } from "../data/blogs";

export default function Blogs() {
  return (
    <div className="w-full">
      {/* HERO */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 py-20 text-center text-white">
        <h1 className="text-4xl font-bold">Blogs</h1>
      </section>

      {/* BLOG GRID */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{blog.date}</p>

                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {blog.title}
                </h3>

                <p className="text-gray-600 text-sm mb-5">
                  {blog.excerpt}
                </p>

                <Link
                  to={`/blogs/${blog.id}`}
                  className="inline-block text-red-600 font-semibold hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
