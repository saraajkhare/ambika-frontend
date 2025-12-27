import { useParams } from "react-router-dom";
import { blogs } from "../data/blogs";

export default function BlogDetails() {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="max-w-4xl mx-auto py-24 text-center">
        <h2 className="text-2xl font-semibold">Blog not found</h2>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* HERO */}
      <div className="bg-gradient-to-r from-red-700 to-red-600 py-16 px-6">
        <div className="max-w-4xl mx-auto text-white">
          <h1 className="text-3xl md:text-4xl font-bold leading-snug">
            {blog.title}
          </h1>
          <p className="mt-3 text-sm opacity-90">
            {blog.date} · Ambika Housing
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto bg-white -mt-12 rounded-2xl shadow-lg px-6 md:px-10 py-12">
        {/* FEATURE IMAGE */}
        {blog.image && (
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-[380px] object-cover rounded-xl mb-12"
          />
        )}

        {/* BLOG BODY */}
        <article
          className="
            prose 
            prose-lg 
            max-w-none 
            prose-p:leading-relaxed
            prose-p:mb-6
            prose-headings:mt-10
            prose-headings:mb-4
            prose-headings:font-semibold
            prose-h2:text-2xl
            prose-h3:text-xl
            prose-ul:my-6
            prose-li:mb-2
            prose-strong:text-gray-900
            prose-a:text-red-600
            prose-a:no-underline
            hover:prose-a:underline
          "
        >
          {blog.content}
        </article>

        {/* DIVIDER */}
        <div className="border-t mt-14 pt-8 text-sm text-gray-500">
          Share this article · © Ambika Housing
        </div>
      </div>
    </div>
  );
}
