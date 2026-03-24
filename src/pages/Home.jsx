
import Hero from "../components/Hero";
import Projects from "../components/Projects";

import Footer from "../components/Footer";
import FeatureStrip from "../components/FeatureStrip";
import AboutHighlight from "../components/AboutHighlight";
import PromoBanner from "../components/PromoBanner";
import BookingPopup from "../components/BookingPopup";
import { blogs } from "../data/blogs";

import { Link } from "react-router-dom";
import Achievements from "../components/Achievements";
import ReviewsSection from "../components/ReviewsSection"; 
import ProjectVideos from "../components/ProjectVideos";
import ContactParallax from "../components/ContactParallax";

const Home = () => {
  return (
    <>
      <BookingPopup />
      <Hero />
      <FeatureStrip />
      <AboutHighlight/>
      <Projects />
      <PromoBanner />

      <ContactParallax />
      {/* BLOGS PREVIEW SECTION */}
     <section className="max-w-7xl mx-auto px-6 py-16">
  <h2 className="text-3xl font-bold mb-8">Latest Blogs</h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {blogs.slice(0, 3).map((blog) => (
      <Link
        key={blog.slug}
        to={`/blogs/${blog.slug}`}
        className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
      >
        <img
          src={blog.image}
          alt={blog.title}
          className="h-56 w-full object-cover"
        />

        <div className="p-6">
          <h3 className="font-semibold text-lg mb-2">
            {blog.title}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-3">
            {blog.excerpt}
          </p>
        </div>
      </Link>
    ))}
  </div>
</section>
  <Achievements />
      <ReviewsSection />
      <ProjectVideos />


      <Footer />
    </>
  );
};

export default Home;
