import { useEffect, useState } from "react";
import anandaImg from "../assets/projects/ananda/ananda-master.jpg";
import diamondImg from "../assets/projects/enclave.jpg";

export default function BookingPopup() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    property: "Ambika Ananda",
  });

  useEffect(() => {
    const shown = sessionStorage.getItem("bookingPopupShown");
    if (!shown) {
      setTimeout(() => {
        setOpen(true);
        sessionStorage.setItem("bookingPopupShown", "true");
      }, 600);
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://ambika-housing.onrender.com/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      alert("Enquiry sent successfully ✅");
      setOpen(false);
    } catch (err) {
      alert("Something went wrong ❌");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
      <div className="relative w-full max-w-xl rounded-2xl bg-[#f4fbf1] p-6 shadow-2xl">
        <button
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 text-xl"
        >
          ✕
        </button>

        <h2 className="text-center text-xl font-semibold mb-5">
          Bookings Open For
        </h2>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <img src={anandaImg} className="rounded-xl" />
          <img src={diamondImg} className="rounded-xl" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <input
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              required
              className="border px-3 py-2 rounded"
            />
            <input
              name="phone"
              placeholder="Phone"
              onChange={handleChange}
              required
              className="border px-3 py-2 rounded"
            />
          </div>

          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            required
            className="border px-3 py-2 rounded w-full"
          />

          <select
            name="property"
            onChange={handleChange}
            className="border px-3 py-2 rounded w-full"
          >
            <option>Ambika Ananda</option>
            <option>Diamond Home</option>
          </select>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-800 text-white py-3 rounded"
          >
            {loading ? "SENDING..." : "SEND YOUR ENQUIRY"}
          </button>
        </form>
      </div>
    </div>
  );
}
