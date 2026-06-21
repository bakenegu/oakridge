import Image from "next/image";
import Link from "next/link";
import PageHeader from "../components/PageHeader";
import { IMAGES } from "../lib/images";

const sections = [
  {
    title: "Personalized 24/7 Care",
    image: IMAGES.houseEntrance,
    badge: "Pillar 1",
    intro: "Our trained caregivers are on-site around the clock — every hour of every day — providing hands-on assistance tailored to each resident's individual care plan.",
    items: [
      "Assistance with bathing and personal hygiene",
      "Help with dressing and grooming",
      "Eating assistance and mealtime support",
      "Toileting and incontinence care",
      "Mobility assistance and fall prevention",
      "Medication reminders and management",
      "24-hour alert monitoring and emergency response",
      "Nurse-designed, individualized care plans",
    ],
  },
  {
    title: "Meal Services",
    image: IMAGES.diningRoom,
    badge: "Pillar 2",
    intro: "Every meal is thoughtfully prepared to be nutritious, flavorful, and suited to individual dietary requirements — because dining is a moment of comfort, connection, and community.",
    items: [
      "Three home-cooked meals prepared fresh daily",
      "Menus tailored to individual dietary needs",
      "Diabetic, low-sodium, and heart-healthy options",
      "Texture-modified meals for swallowing difficulties",
      "Nutritional balance reviewed by care staff",
      "Snacks and hydration available throughout the day",
      "Communal dining to encourage social engagement",
      "Family members always welcome to join meals",
    ],
  },
  {
    title: "Comfort of Home",
    image: IMAGES.livingRoom,
    badge: "Pillar 3",
    intro: "Oakridge Manor Living is a real home in a residential neighborhood — not a facility. We combine the warmth of private-home living with professional-grade care.",
    items: [
      "Spacious private and semi-private rooms",
      "Residents may personalize and furnish their own room",
      "Inviting shared common areas and living spaces",
      "High-speed Wi-Fi included throughout",
      "Quiet, secure residential neighborhood setting",
      "Housekeeping and laundry services",
      "Assistance with scheduling appointments",
      "Pet-friendly environment",
    ],
  },
  {
    title: "Safety & Security",
    image: IMAGES.breakfastNook,
    badge: "Pillar 4",
    intro: "Families trust us because we are transparent about safety. Our homes are secured, monitored, and staffed to give both residents and families complete peace of mind.",
    items: [
      "24/7 on-site caregiver presence",
      "Security cameras in all common areas and exterior",
      "Optional room cameras — clear resident opt-in/opt-out",
      "Secured entry points and perimeter",
      "Emergency call systems in all rooms",
      "Fall prevention protocols and mobility aids",
      "Fire safety and emergency preparedness plans",
      "Regular safety assessments by nursing leadership",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader title="Services & Care" subtitle="What We Offer — And How We Deliver It" />

      <section className="py-16 px-6" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="section-badge mb-4">Our Four-Pillar Care Model</p>
          <h2
            className="text-3xl md:text-4xl font-semibold mb-5"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "var(--navy)" }}
          >
            Every Service, Built Around Your Loved One
          </h2>
          <p
            className="text-base leading-relaxed"
            style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-medium)" }}
          >
            At Oakridge Manor Living, our services are organized around four core pillars — the same commitments that define who we are and how we care for every resident, every day.
          </p>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col gap-20">
          {sections.map((sec, i) => (
            <div
              key={sec.title}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start"
            >
              <div
                className={`relative rounded overflow-hidden ${i % 2 === 1 ? "lg:order-2" : ""}`}
                style={{ minHeight: "380px" }}
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
                <p className="section-badge mb-2">{sec.badge}</p>
                <h3
                  className="text-2xl md:text-3xl font-semibold mb-4"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "var(--navy)" }}
                >
                  {sec.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-medium)" }}
                >
                  {sec.intro}
                </p>
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
        <p
          className="text-white/70 text-xs uppercase tracking-[0.3em] font-semibold mb-4"
          style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif" }}
        >
          See It in Person
        </p>
        <h2 className="text-3xl font-semibold text-white mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
          Experience Our Standard of Care Firsthand
        </h2>
        <p className="text-white/70 mb-8 max-w-xl mx-auto text-sm" style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif" }}>
          A private tour is worth a thousand words. Walk the home, meet the caregivers, and understand why families across Plano choose Oakridge Manor Living.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/contact" className="btn-gold">Schedule a Private Tour</Link>
          <a
            href="tel:+15125550100"
            className="text-white/80 text-sm font-semibold uppercase tracking-widest hover:text-white transition-colors"
            style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif" }}
          >
            Call (512) 555-0100
          </a>
        </div>
      </section>
    </>
  );
}
