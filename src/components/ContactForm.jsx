const ContactForm = () => {
  return (
    <section className="bg-[#0a2a43] text-white px-[60px] py-[60px]">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Contact Us
      </h2>

      <form className="max-w-[500px] mx-auto flex flex-col gap-3">
        <input
          placeholder="Name"
          className="px-3 py-2 rounded border-none outline-none text-black"
        />

        <input
          placeholder="Email"
          className="px-3 py-2 rounded border-none outline-none text-black"
        />

        <input
          placeholder="Mobile"
          className="px-3 py-2 rounded border-none outline-none text-black"
        />

        <select className="px-3 py-2 rounded border-none outline-none text-black">
          <option>Select Project</option>
          <option>Ambika Ananda</option>
        </select>

        <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 rounded cursor-pointer font-semibold transition">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
