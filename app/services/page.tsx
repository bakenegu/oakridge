import Image from "next/image";
import Link from "next/link";
import PageHeader from "../components/PageHeader";
import { IMAGES } from "../lib/images";

const sections = [
  {
    title: "Dining & Cuisine",
    image: IMAGES.diningRoom,
    items: [
      "Three chef-prepared meals served daily",
      "Restaurant-style formal dining room",
      "Casual breakfast nook option",
      "Seasonal menus with fresh ingredients",
      "Special dietary accommodations",
      "Private dining room for family gatherings",
      "Café & bistro with light snacks all day",
    ],
  },
  {
    title: "Wellness & Fitness",
    image: IMAGES.livingRoom,
    items: [
      "Fully equipped fitness center",
      "Group exercise & yoga classes",
      "Aquatics & walking programs",
      "On-site physical therapy",
      "Wellness checks & health monitoring",
      "Beauty salon & barber shop",
      "Spa & relaxation services",
    ],
  },
  {
    title: "Social Activities",
    image: IMAGES.breakfastNook,
    items: [
      "Vibrant daily activities calendar",
      "Arts, crafts & lifelong learning",
      "Live music & entertainment",
      "Movie nights & cultural outings",
      "Gardening & outdoor programs",
      "Resident council & committees",
      "Holiday & seasonal celebrations",
    ],
  },
  {
    title: "Resident Services",
    image: IMAGES.houseEntrance,
    items: [
      "Weekly housekeeping & linen service",
      "Scheduled local transportation",
      "Concierge assistance",
      "Maintenance-free living",
      "Pet-friendly community",
      "Wi-Fi & cable included",
      "Secure parking",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader title="Services & Amenities" subtitle="Everything You Need" />

      <section className="py-16 px-6" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="section-badge mb-4">Live Well</p>
          <h2
            className="text-3xl md:text-4xl font-semibold mb-5"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "var(--navy)" }}
          >
            Everything You Need to Thrive
          </h2>
          <p
            className="text-base leading-relaxed"
            style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-medium)" }}
          >
            At Oakridge Manor Living, every service and amenity is designed to support your independence,
            comfort, and joy. From world-class dining to enriching social programs, we take care of
            the details so you can focus on living.
          </p>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col gap-20">
          {sections.map((sec, i) => (
            <div
              key={sec.title}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
            >
              <div
                className={`relative rounded overflow-hidden ${i % 2 === 1 ? "lg:order-2" : ""}`}
                style={{ minHeight: "360px" }}
              >
                <Image
                  src={sec.image}
                  alt={sec.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div className="w-10 h-0.5 mb-4" style={{ backgroundColor: "var(--gold)" }} />
                <h3
                  className="text-2xl md:text-3xl font-semibold mb-5"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "var(--navy)" }}
                >
                  {sec.title}
                </h3>
                <ul className="flex flex-col gap-3">
                  {sec.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm"
                      style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-medium)" }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--gold)", flexShrink: 0 }}>
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 text-center" style={{ backgroundColor: "var(--navy)" }}>
        <h2 className="text-3xl font-semibold text-white mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
          Experience It for Yourself
        </h2>
        <p className="text-white/70 mb-8 max-w-xl mx-auto text-sm" style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif" }}>
          The best way to understand everything Oakridge Manor Living offers is to come see it in person.
        </p>
        <Link href="/contact" className="btn-gold">Schedule a Tour</Link>
      </section>
    </>
  );
}
