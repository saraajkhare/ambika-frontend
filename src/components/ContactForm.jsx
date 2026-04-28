import { useState } from "react";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    property: "Ambika Ananda",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://ambika-housing.onrender.com/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // The backend returns { success: true/false, message: "..." }
      const data = await response.json();

      if (data.success || response.ok) {
        toast.success("Message sent successfully! We will contact you soon.");
        setFormData({ name: "", email: "", phone: "", property: "Ambika Ananda" });
      } else {
        toast.error("Failed to send message: " + (data.message || "Unknown error"));
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#0a2a43] text-white px-[60px] py-[60px]">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Contact Us
      </h2>

      <form onSubmit={handleSubmit} className="max-w-[500px] mx-auto flex flex-col gap-3">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Name"
          className="px-3 py-2 rounded border-none outline-none text-black"
        />

        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Email"
          className="px-3 py-2 rounded border-none outline-none text-black"
        />

        <input
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder="Mobile"
          className="px-3 py-2 rounded border-none outline-none text-black"
        />

        <select 
          name="property"
          value={formData.property}
          onChange={handleChange}
          className="px-3 py-2 rounded border-none outline-none text-black"
        >
          <option value="Ambika Ananda">Ambika Ananda</option>
          <option value="Tumdi Project">Tumdi Project</option>
          <option value="Chikana Project">Chikana Project</option>
          <option value="Dhamana Project">Dhamana Project</option>
        </select>

        <button 
          type="submit"
          disabled={loading}
          className="bg-orange-500 hover:bg-orange-600 disabled:opacity-70 disabled:cursor-not-allowed text-white py-2 rounded cursor-pointer font-semibold transition"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
