import Link from "next/link";

const pillars = [
  {
    title: "Personalized Care",
    desc: "Every resident receives an individualized care plan tailored to their health, daily routines, and personal preferences.",
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
  },
  {
    title: "Compassionate Caregivers",
    desc: "Our experienced team is available 24 hours a day to provide assistance, encouragement, and compassionate support whenever it’s needed.",
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    title: "Comfortable Living",
    desc: "Residents enjoy inviting private or semi-private accommodations designed to provide comfort, privacy, and a true sense of home.",
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "Nutritious Dining",
    desc: "Three freshly prepared meals are served daily, along with healthy snacks and menu options that accommodate dietary needs.",
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
    title: "Engaging Community",
    desc: "Our residents enjoy a vibrant lifestyle filled with activities, friendships, wellness programs, and opportunities to stay active and connected.",
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    title: "Safe Environment",
    desc: "We provide a secure community where residents can enjoy their independence with confidence, knowing help is always nearby.",
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
          <p className="section-badge mb-4">Why Choose Us</p>
          <h2
            className="text-4xl md:text-5xl font-semibold mb-5"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "var(--navy)" }}
          >
            Why Choose Oakridge Manor Living
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="flex flex-col gap-4 p-8 bg-white rounded"
              style={{ borderTop: "3px solid var(--gold)" }}
            >
              <div style={{ color: "var(--gold)" }}>{p.icon}</div>
              <h3
                className="text-xl font-semibold"
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
          ))}
        </div>

        <div className="text-center">
          <Link href="/contact" className="btn-primary">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
