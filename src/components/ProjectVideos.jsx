export default function ProjectVideos() {
  return (
    <section className="relative bg-gradient-to-b from-[#0b2d4a] to-[#0a2238] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Experience Our <span className="text-green-400">Projects</span>
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Watch walkthroughs, testimonials & amenities
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Video Card */}
          {[
            {
              src: "https://www.youtube.com/embed/--NnqEklAy0",
              title: "Ambika Testimonial",
            },
            {
              src: "https://www.youtube.com/embed/2dQc3okbCvs",
              title: "Hero with Sound",
            },
            {
              src: "https://www.youtube.com/embed/JvmNsL_vxbk",
              title: "Ambika Ananda Teaser",
            },
            {
              src: "https://www.youtube.com/embed/xQ1Fx9gtfbw",
              title: "Ambika Ananda Amenities",
            },
          ].map((video, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden bg-black shadow-2xl transition-transform duration-300 hover:-translate-y-2"
            >
              {/* Aspect Ratio */}
              <div className="relative aspect-video">
                <iframe
                  src={video.src}
                  title={video.title}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-sm font-medium text-white">
                  {video.title}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
