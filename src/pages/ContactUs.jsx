import ContactParallax from "../components/ContactParallax";
import Footer from "../components/Footer";

export default function ContactUs() {
  return (
    <div className="w-full">

      {/* ================= RED CONTACT INFO SECTION ================= */}
      <section className="bg-gradient-to-br from-[#c80000] to-[#e60000] py-[90px] px-5 text-center text-white">
        <p className="text-[13px] tracking-[2px] opacity-90 mb-3">
          CONTACT US AmarinfraTech
        </p>

        <h1 className="text-[42px] font-bold mb-[50px] leading-tight max-md:text-[30px]">
          We Take Our Customers With <br />
          Utmost Seriousness.
        </h1>

        <div className="flex justify-center gap-[30px] flex-wrap">
          {/* PHONE */}
          <div className="bg-white/15 backdrop-blur-md px-[45px] py-[35px] rounded-[14px] min-w-[260px] shadow-[0_20px_45px_rgba(0,0,0,0.25)]">
            <span className="block text-[28px] mb-2">📞</span>
            <h3 className="text-[18px] font-semibold mb-1">
              +91 95452 72554 
            </h3>
            <p className="text-[13px] opacity-85">Call us on</p>
          </div>

          {/* EMAIL */}
          <div className="bg-white/15 backdrop-blur-md px-[45px] py-[35px] rounded-[14px] min-w-[260px] shadow-[0_20px_45px_rgba(0,0,0,0.25)]">
            <span className="block text-[28px] mb-2">💬</span>
            <h3 className="text-[18px] font-semibold mb-1">
              mailto:akre.amar@gmail.com
            </h3>
            <p className="text-[13px] opacity-85">Mail us at</p>
          </div>
        </div>
      </section>
      <ContactParallax/>
      <Footer />

     
               

             
              
    </div>
  );
}
