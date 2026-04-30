import { Link } from "react-router-dom";
import { FaBolt, FaMapMarkedAlt, FaRoad, FaShieldAlt, FaTint, FaTree } from "react-icons/fa";

import SEO, { SITE_URL } from "../components/SEO";
import ContactParallax from "../components/ContactParallax";
import Footer from "../components/Footer";
import chikanaImage from "../assets/projects/chikana/ch1.jpeg";
import dhamanaImage from "../assets/projects/dhamana/dh1.jpeg";
import tumdiImage from "../assets/projects/tumdi/tum1.jpeg";

const projects = [
  {
    name: "Chikana Project",
    image: chikanaImage,
    path: "/projects/chikana",
    copy: "Residential plots near Nagpur for buyers looking for planned layouts, clear access, and long-term land value.",
  },
  {
    name: "Dhamana Project",
    image: dhamanaImage,
    path: "/projects/dhamana",
    copy: "A plotted development option for families and investors exploring land around Nagpur's growing corridors.",
  },
  {
    name: "Tumdi Project",
    image: tumdiImage,
    path: "/projects/tumdi",
    copy: "Affordable residential plots with planned facilities for buyers entering the Nagpur real estate market.",
  },
];

const areas = [
  "Tumdi",
  "Chikana",
  "Dhamana",
  "Wardha Road",
  "Ring Road Nagpur",
  "MIHAN region",
  "Outer Nagpur growth areas",
  "Nagpur rural-urban corridors",
];

const facilities = [
  ["Internal Roads", <FaRoad />],
  ["Electricity Access", <FaBolt />],
  ["Water Supply", <FaTint />],
  ["Green Spaces", <FaTree />],
  ["Secure Layouts", <FaShieldAlt />],
  ["Plot Marking", <FaMapMarkedAlt />],
];

const schema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Amar Infratech",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  telephone: "+919545272554",
  email: "akre.amar@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nagpur",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  areaServed: [
    { "@type": "City", name: "Nagpur" },
    { "@type": "Place", name: "Tumdi" },
    { "@type": "Place", name: "Chikana" },
    { "@type": "Place", name: "Dhamana" },
  ],
  makesOffer: {
    "@type": "Offer",
    itemOffered: {
      "@type": "Landform",
      name: "Residential plots in Nagpur",
    },
  },
};

export default function RealEstateNagpur() {
  return (
    <div className="w-full bg-white text-[#151515]">
      <SEO
        title="Real Estate in Nagpur | Residential Plots & Land Investment"
        description="Explore real estate in Nagpur with Amar Infratech. Find residential plots, planned layouts, and land investment opportunities in Tumdi, Chikana, Dhamana and nearby growth areas."
        path="/real-estate-in-nagpur"
        keywords="real estate in Nagpur, property in Nagpur, residential plots in Nagpur, plots in Nagpur, land investment Nagpur, Nagpur real estate, RERA approved plots Nagpur"
        schema={schema}
      />

      <section className="bg-[#f6fff5] px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[2px] text-[#c4161c]">
              Amar Infratech Nagpur
            </p>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
              Real Estate in Nagpur for Residential Plots and Land Investment
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-700">
              Amar Infratech helps buyers explore planned residential plots in Nagpur's developing locations including Tumdi, Chikana, Dhamana, and nearby growth corridors.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="rounded-md bg-[#e30613] px-6 py-3 font-semibold text-white transition hover:bg-[#c9000c]"
              >
                Book Site Visit
              </Link>
              <a
                href="tel:+919545272554"
                className="rounded-md border border-[#e30613] px-6 py-3 font-semibold text-[#e30613] transition hover:bg-[#fff1f1]"
              >
                Call +91 95452 72554
              </a>
            </div>
          </div>

          <img
            src={tumdiImage}
            alt="Residential plots and real estate in Nagpur by Amar Infratech"
            className="h-[360px] w-full rounded-lg object-cover shadow-2xl md:h-[460px]"
          />
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold">Property Projects in Nagpur</h2>
          <p className="mt-3 max-w-3xl text-gray-700">
            Compare active and completed plotted developments from Amar Infratech. Each project page includes location details, gallery, facilities, and enquiry options.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {projects.map((project) => (
              <Link
                key={project.path}
                to={project.path}
                className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-[0_12px_35px_rgba(0,0,0,0.08)] transition hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(0,0,0,0.12)]"
              >
                <img src={project.image} alt={`${project.name} real estate project in Nagpur`} className="h-56 w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold">{project.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-gray-700">{project.copy}</p>
                  <span className="mt-5 inline-block font-semibold text-[#e30613]">
                    Explore Property
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111] px-6 py-16 text-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold">Why Buyers Search Nagpur Real Estate With Us</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {facilities.map(([title, icon]) => (
              <div key={title} className="rounded-lg bg-white/10 p-6">
                <div className="mb-4 text-3xl text-[#ff4d55]">{icon}</div>
                <h3 className="font-bold">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-3xl font-bold">Locations We Serve Around Nagpur</h2>
            <p className="mt-4 leading-7 text-gray-700">
              Local SEO works best when Google can clearly connect the business, services, and nearby places. These are the Nagpur real estate areas highlighted on this page.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {areas.map((area) => (
              <div key={area} className="rounded-md border border-gray-200 px-4 py-3 font-semibold">
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f7] px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold">Real Estate in Nagpur FAQs</h2>
          <div className="mt-8 space-y-5">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="font-bold">Does Amar Infratech offer residential plots in Nagpur?</h3>
              <p className="mt-2 text-gray-700">
                Yes. Amar Infratech focuses on plotted developments and residential land opportunities in and around Nagpur.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="font-bold">Which Nagpur locations are available?</h3>
              <p className="mt-2 text-gray-700">
                Current project pages include Tumdi, Chikana, and Dhamana, with details available on each property page.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="font-bold">How can I visit a plot site?</h3>
              <p className="mt-2 text-gray-700">
                Call +91 95452 72554 or send an enquiry through the contact page to schedule a site visit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactParallax />
      <Footer />
    </div>
  );
}
