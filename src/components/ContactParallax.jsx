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
      {/* SAME BLUE OVERLAY */}
      <div className="bg-[rgba(5,30,70,0.85)] py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">

          {/* LEFT */}
          <div className="text-white">
            <span className="text-xs tracking-widest opacity-80">
              AMARINFRATECH
            </span>

            <h2 className="text-4xl font-semibold leading-tight mt-4 mb-6">
              Your Plot. Your Legacy. <br />
              <span className="text-yellow-400">Our Promise</span>
            </h2>

            <p className="text-sm mb-3">
              Information Technology Park, Salt Lake SMS India Rd,<br />
              Nagpur, 440022, MH, IN
            </p>

            <p className="text-sm mb-1">+91 95452 72554</p>
            <p className="text-sm">akre.amar@gmail.com</p>

            <div className="mt-6 text-lg">
              📞 WhatsApp Us Now <br />
              <strong>+91 95452 72554</strong>
            </div>
          </div>

          {/* RIGHT FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-[rgba(10,45,90,0.95)] p-10 rounded-xl shadow-2xl text-white"
          >
            <h3 className="text-xl font-semibold mb-1">
              Get in Touch for More Details
            </h3>
            <p className="text-sm opacity-80 mb-6">
              Fill The Form
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Name *"
                required
                className="px-4 py-3 rounded-md text-black outline-none"
              />
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name *"
                required
                className="px-4 py-3 rounded-md text-black outline-none"
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
                className="px-4 py-3 rounded-md text-black outline-none"
              />
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Mobile *"
                required
                className="px-4 py-3 rounded-md text-black outline-none"
              />
            </div>

            <select
              name="property"
              value={formData.property}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md text-black outline-none mb-6"
            >
              <option>Chikana</option>
              <option>Dhamana</option>
              <option>Tumdi</option>
            </select>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-md bg-orange-500 hover:bg-orange-400 font-bold transition disabled:opacity-60"
            >
              {loading ? "SENDING..." : "GET DETAILS"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}