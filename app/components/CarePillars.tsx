import Link from "next/link";

const pillars = [
  {
    number: "01",
    title: "Personalized Care",
    subtitle: "24/7 Hands-On Care",
    desc: "Our trained caregivers are on-site around the clock — every hour of every day. We provide hands-on assistance with bathing, dressing, eating, toileting, and mobility, ensuring each resident's individual needs are met with dignity, warmth, and skill.",
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Meal Services",
    subtitle: "Nutritious & Flavorful Dining",
    desc: "Every meal is thoughtfully prepared to be nutritious, flavorful, and tailored to individual dietary needs — including diabetic, low-sodium, and texture-modified options. We believe dining is a moment of comfort and community, not just nutrition.",
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 010 8h-1" />
        <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Comfort of Home",
    subtitle: "Residential, Not Institutional",
    desc: "Oakridge Manor Living is set in a warm residential neighborhood — not a facility. Enjoy spacious private and semi-private rooms, inviting common areas with comfortable furnishings, and modern amenities including high-speed Wi-Fi, so life here genuinely feels like home.",
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Safety & Security",
    subtitle: "Transparent, Trustworthy Protection",
    desc: "Our homes are located in secure residential neighborhoods with 24-hour monitoring. Security cameras are in place throughout all common living areas and around the property perimeter. For private rooms, camera installation is entirely optional — residents and families have a clear opt-in/opt-out choice.",
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

export default function CarePillars() {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: "var(--off-white)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="section-badge mb-4">Our Care Model</p>
          <h2
            className="text-4xl md:text-5xl font-semibold mb-5"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "var(--navy)" }}
          >
            Four Pillars of Exceptional Care
          </h2>
          <p
            className="max-w-2xl mx-auto text-base leading-relaxed"
            style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-medium)" }}
          >
            Everything we do is built on four core commitments — so families can feel completely confident in their loved one&apos;s daily life and long-term wellbeing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
          {pillars.map((p) => (
            <div
              key={p.number}
              className="flex flex-col gap-5 p-8 bg-white rounded"
              style={{ borderTop: "3px solid var(--gold)" }}
            >
              <div className="flex items-start justify-between">
                <div style={{ color: "var(--gold)" }}>{p.icon}</div>
                <span
                  className="text-4xl font-semibold leading-none"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "var(--navy)", opacity: 0.12 }}
                >
                  {p.number}
                </span>
              </div>
              <div>
                <p className="section-badge mb-1">{p.subtitle}</p>
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "var(--navy)" }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-medium)" }}
                >
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/contact" className="btn-primary">
            Schedule a Private Tour
          </Link>
        </div>
      </div>
    </section>
  );
}
