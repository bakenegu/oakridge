import Link from "next/link";

const services = [
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="9 22 9 12 15 12 15 22" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Comfortable Residences",
    desc: "Studio, one, and two-bedroom floor plans with premium finishes and plenty of natural light.",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M18 8h1a4 4 0 010 8h-1" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="6" y1="1" x2="6" y2="4" strokeLinecap="round" />
        <line x1="10" y1="1" x2="10" y2="4" strokeLinecap="round" />
        <line x1="14" y1="1" x2="14" y2="4" strokeLinecap="round" />
      </svg>
    ),
    title: "Chef-Inspired Dining",
    desc: "Restaurant-style dining with seasonal menus crafted by our culinary team, served in elegant surroundings.",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="16" y1="2" x2="16" y2="6" strokeLinecap="round" />
        <line x1="8" y1="2" x2="8" y2="6" strokeLinecap="round" />
        <line x1="3" y1="10" x2="21" y2="10" strokeLinecap="round" />
      </svg>
    ),
    title: "Enriching Programs",
    desc: "A vibrant calendar of social events, fitness classes, cultural outings, and lifelong learning opportunities.",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Personalized Care",
    desc: "Thoughtfully designed care plans tailored to each resident, delivered by compassionate, trained professionals.",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 8v4l3 3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "24/7 Support",
    desc: "Around-the-clock staffing ensures help is always close at hand, giving residents and families peace of mind.",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 3.13a4 4 0 010 7.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Vibrant Community",
    desc: "A welcoming neighborhood where friendships flourish, stories are shared, and every day brings new joy.",
  },
];

export default function ForCulturedLiving() {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="section-badge mb-4">Services &amp; Amenities</p>
          <h2
            className="text-4xl md:text-5xl font-semibold mb-5"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              color: "var(--navy)",
            }}
          >
            For Cultured Living
          </h2>
          <p
            className="max-w-2xl mx-auto text-base leading-relaxed"
            style={{
              fontFamily: "var(--font-open-sans), Arial, sans-serif",
              color: "var(--text-medium)",
            }}
          >
            From community cookouts, outdoor activities, and stellar services —
            it&apos;s all here to promote outstanding experiences and create
            meaningful moments. Find joy in living life to the fullest at
            Oakridge Manor Living.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="flex flex-col items-start gap-4 p-6 rounded"
              style={{ backgroundColor: "var(--off-white)" }}
            >
              <div style={{ color: "var(--gold)" }}>{svc.icon}</div>
              <h3
                className="text-lg font-semibold"
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  color: "var(--navy)",
                }}
              >
                {svc.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{
                  fontFamily: "var(--font-open-sans), Arial, sans-serif",
                  color: "var(--text-medium)",
                }}
              >
                {svc.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/services" className="btn-outline-dark">
            View All Services &amp; Amenities
          </Link>
        </div>
      </div>
    </section>
  );
}
