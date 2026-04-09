import { useState } from "react";

export default function ContactParallax({ projectName = "Chikana" }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    property: projectName,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://ambika-housing.onrender.com/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          phone: formData.phone,
          email: formData.email,
          property: formData.property,
        }),
      });

      if (!res.ok) throw new Error("Email failed");

      alert("✅ Enquiry sent successfully!");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        property: projectName,
      });
    } catch (error) {
      console.error(error);
      alert("❌ Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="relative bg-fixed bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/assets/projects/ananda/ananda-master.jpg')",
      }}
    >
      <div className="bg-[rgba(0,0,0,0.65)] backdrop-blur-[2px] py-28 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">

          {/* LEFT */}
          <div className="text-white">
            <span className="text-xs tracking-[3px] opacity-80 uppercase">
              AmarInfratech
            </span>

            <h2 className="text-4xl lg:text-5xl font-semibold leading-tight mt-4 mb-6">
              Your Plot. Your Legacy. <br />
              <span className="text-[#facc15]">Our Promise</span>
            </h2>

            <p className="text-white/80 text-sm mb-4">
              Information Technology Park, Salt Lake SMS India Rd,<br />
              Nagpur, 440022, MH, IN
            </p>

            <p className="text-white/90 text-sm mb-1">
              📞 +91 95452 72554
            </p>
            <p className="text-white/90 text-sm">
              ✉ akre.amar@gmail.com
            </p>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919545272554"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-6 py-3 rounded-full bg-[#25D366] text-black font-semibold hover:scale-105 transition"
            >
              💬 Chat on WhatsApp
            </a>
          </div>

          {/* RIGHT FORM */}
          <form
            onSubmit={handleSubmit}
            className="
              bg-white/10 backdrop-blur-[14px]
              border border-white/20
              p-10 rounded-2xl
              shadow-[0_20px_60px_rgba(0,0,0,0.35)]
              text-white
            "
          >
            <h3 className="text-xl font-semibold mb-1">
              Get in Touch
            </h3>
            <p className="text-sm text-white/70 mb-6">
              We’ll help you choose the right plot
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name *"
                required
                className="px-4 py-3 rounded-md bg-white/90 text-black outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name *"
                required
                className="px-4 py-3 rounded-md bg-white/90 text-black outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email *"
                required
                className="px-4 py-3 rounded-md bg-white/90 text-black outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Mobile *"
                required
                className="px-4 py-3 rounded-md bg-white/90 text-black outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <select
              name="property"
              value={formData.property}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-white/90 text-black outline-none mb-6"
            >
              <option>Chikana</option>
              <option>Dhamana</option>
              <option>Tumdi</option>
            </select>

            <button
              type="submit"
              disabled={loading}
              className="
                w-full py-3 rounded-md
                bg-[#facc15] text-black font-bold
                hover:bg-yellow-400
                transition-all duration-300
                disabled:opacity-60
              "
            >
              {loading ? "SENDING..." : "GET DETAILS"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}