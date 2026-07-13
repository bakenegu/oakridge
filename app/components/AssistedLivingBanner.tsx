const features = [
  {
    title: "Private Rooms",
    desc: "Comfortable, fully furnished private rooms available.",
    icon: (
      <svg width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "24/7 Caregivers",
    desc: "Trained, compassionate caregivers available around the clock.",
    icon: (
      <svg width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21v-1a6 6 0 016-6h1" />
        <path d="M18 14c-1.2-.9-2.1-1.8-2.1-2.7a1 1 0 012.1-.4 1 1 0 012.1.4c0 .9-.9 1.8-2.1 2.7z" />
      </svg>
    ),
  },
  {
    title: "Secure Environment",
    desc: "Safety features and emergency systems for peace of mind.",
    icon: (
      <svg width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    title: "Beautiful Outdoors",
    desc: "Peaceful outdoor spaces to relax, socialize, and enjoy nature.",
    icon: (
      <svg width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a6 6 0 00-6 6c0 .6.1 1.2.3 1.7A5 5 0 003 14a5 5 0 005 5h3v3h2v-3h3a5 5 0 005-5 5 5 0 00-3.3-4.3c.2-.5.3-1.1.3-1.7a6 6 0 00-6-6z" />
      </svg>
    ),
  },
  {
    title: "Strong Community",
    desc: "A warm, welcoming community where friendships flourish.",
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

export default function AssistedLivingBanner() {
  return (
    <section className="pt-8 pb-20 px-6" style={{ backgroundColor: "var(--cream)" }}>
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-12">
        {features.map((f) => (
          <div key={f.title} className="flex flex-col items-center text-center px-1">
            <div className="mb-4" style={{ color: "var(--green-dark)" }}>
              {f.icon}
            </div>
            <h3
              className="text-sm font-bold uppercase tracking-widest mb-2"
              style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--navy)" }}
            >
              {f.title}
            </h3>
            <p
              className="text-sm leading-relaxed max-w-[200px]"
              style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-medium)" }}
            >
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
