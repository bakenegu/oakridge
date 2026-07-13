const pillars = [
  {
    title: "Safety First",
    desc: "A secure, comfortable environment with 24/7 care and supervision.",
    icon: (
      <svg width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    title: "Compassionate Care",
    desc: "Personalized assistance with daily living, medication management, and more.",
    icon: (
      <svg width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21v-1a6 6 0 016-6h1" />
        <path d="M18 14c-1.2-.9-2.1-1.8-2.1-2.7a1 1 0 012.1-.4 1 1 0 012.1.4c0 .9-.9 1.8-2.1 2.7z" />
      </svg>
    ),
  },
  {
    title: "Home-Like Comfort",
    desc: "Private rooms and inviting common areas designed for dignity and peace.",
    icon: (
      <svg width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "Family Focused",
    desc: "Open communication and partnership with families every step of the way.",
    icon: (
      <svg width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
];

export default function CarePillars() {
  return (
    <section className="pt-6 pb-16 px-6" style={{ backgroundColor: "var(--cream)" }}>
      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
        {pillars.map((p) => (
          <div key={p.title} className="flex flex-col items-center text-center px-2">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center mb-5"
              style={{ backgroundColor: "#fff", color: "var(--green-dark)", border: "1.5px solid rgba(127,178,65,0.35)" }}
            >
              {p.icon}
            </div>
            <h3
              className="text-sm font-bold uppercase tracking-widest mb-3"
              style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--navy)" }}
            >
              {p.title}
            </h3>
            <p
              className="text-sm leading-relaxed max-w-[220px]"
              style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-medium)" }}
            >
              {p.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
