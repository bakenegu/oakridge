import Image from "next/image";
import { IMAGES } from "../lib/images";

const features = [
  {
    title: "Person-Centered Care",
    desc: "Care plans tailored to each resident's unique needs.",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M5 21v-1a6 6 0 016-6h2a6 6 0 016 6v1" />
      </svg>
    ),
  },
  {
    title: "Health & Wellness",
    desc: "Medication management and health monitoring.",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.8 3A2.8 2.8 0 002 5.8V9a9 9 0 009 9 9 9 0 009-9" />
        <path d="M8 3v4a4 4 0 008 0V3" />
        <circle cx="20" cy="10" r="2" />
      </svg>
    ),
  },
  {
    title: "Engaging Activities",
    desc: "Daily activities that promote wellness, joy, and connection.",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    title: "Nutritious Meals",
    desc: "Homemade meals prepared with care and heart.",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 010 8h-1" />
        <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
  },
];

export default function ExperienceBetter() {
  return (
    <section className="pb-20 px-6" style={{ backgroundColor: "var(--cream)" }}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="relative rounded-lg overflow-hidden shadow-lg" style={{ height: "460px" }}>
          <Image
            src={IMAGES.houseExterior}
            alt="Oakridge Manor Living home exterior in Plano, TX"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Text */}
        <div>
          <p className="section-badge mb-2">Welcome To</p>
          <h2
            className="text-4xl md:text-5xl font-semibold mb-4"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "var(--navy)" }}
          >
            Oakridge Manor Living
          </h2>
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-12 h-px" style={{ backgroundColor: "var(--green)" }} />
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            </svg>
          </div>

          <p
            className="text-base leading-relaxed mb-8"
            style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-medium)" }}
          >
            Located in the heart of Plano, Texas, Oakridge Manor Living offers high-quality residential assisted living in a peaceful neighborhood setting. Our mission is to provide exceptional care that enhances quality of life while honoring independence.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((f) => (
              <div key={f.title} className="flex items-start gap-3">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "var(--green)", color: "#fff" }}
                >
                  {f.icon}
                </div>
                <div>
                  <h3
                    className="text-sm font-bold uppercase tracking-wide mb-1"
                    style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--navy)" }}
                  >
                    {f.title}
                  </h3>
                  <p
                    className="text-sm leading-snug"
                    style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-medium)" }}
                  >
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
