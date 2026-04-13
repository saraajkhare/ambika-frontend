import { useEffect, useState } from "react";
import anandaImg from "../assets/projects/tumdi/tum1.jpeg";
import diamondImg from "../assets/projects/chikana/ch1.jpeg";

export default function BookingPopup() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    property: "Tumdi Project",
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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Optimistically show success and close popup instantly
    alert("Enquiry sent successfully ✅");
    setOpen(false);

    // Run fetch quietly in the background without blocking the UI
    fetch("https://ambika-housing.onrender.com/api/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    }).catch((err) => {
      console.error("Background fetch failed:", err);
    });
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60 backdrop-blur-md px-4 transition-all duration-300">
      <div className="relative w-full max-w-lg rounded-3xl bg-white shadow-[0_24px_64px_rgba(0,0,0,0.55)] overflow-hidden border border-gray-200">
        
        {/* Decorative Top Accent */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#C9A84C] via-[#e30613] to-[#C9A84C]"></div>

        <button
          onClick={() => setOpen(false)}
          className="absolute right-4 top-5 h-8 w-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-black transition-colors"
          aria-label="Close"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="p-8 pb-10">
          <div className="text-center mb-6">
            <span className="text-[#C9A84C] text-xs font-bold tracking-[0.2em] uppercase mb-2 block">Exclusive Offers</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#111]">
              Secure Your Plot Today
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-8">
            <div className="overflow-hidden rounded-xl shadow-md border border-gray-100">
               <img src={anandaImg} className="w-full h-28 object-cover hover:scale-110 transition-transform duration-500" alt="Tumdi Project"/>
            </div>
            <div className="overflow-hidden rounded-xl shadow-md border border-gray-100">
               <img src={diamondImg} className="w-full h-28 object-cover hover:scale-110 transition-transform duration-500" alt="Chikana Project"/>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                name="name"
                placeholder="Full Name *"
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e30613]/20 focus:border-[#e30613] transition-all text-gray-800 placeholder-gray-400"
              />
              <input
                name="phone"
                placeholder="Phone Number *"
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e30613]/20 focus:border-[#e30613] transition-all text-gray-800 placeholder-gray-400"
              />
            </div>

            <input
              name="email"
              type="email"
              placeholder="Email Address *"
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e30613]/20 focus:border-[#e30613] transition-all text-gray-800 placeholder-gray-400"
            />

            <div className="relative">
              <select
                name="property"
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e30613]/20 focus:border-[#e30613] transition-all text-gray-800 appearance-none cursor-pointer font-medium"
              >
                <option value="Tumdi Project">Tumdi Project</option>
                <option value="Khatmari Project">Khatmari Project</option>
                <option value="Chikana Project">Chikana Project</option>
                <option value="Dhamana Project">Dhamana Project</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-400">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#e30613] to-[#c9000c] hover:from-[#c9000c] hover:to-[#a0000a] text-white font-bold tracking-wide py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 mt-2"
            >
              REQUEST DETAILS
            </button>
            <p className="text-center text-[11px] text-gray-400 mt-3 flex items-center justify-center gap-1">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              Your information is secure and encrypted.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
