import Link from "next/link";

export default function LocationSection() {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <p className="section-badge mb-4">Our Location</p>
          <h2
            className="text-3xl md:text-4xl font-semibold mb-6"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "var(--navy)" }}
          >
            Located in Plano, Texas
          </h2>

          <address
            className="not-italic mb-5 flex items-start gap-3"
            style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0" style={{ color: "var(--gold)" }}>
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <div>
              <p className="font-semibold" style={{ color: "var(--navy)" }}>2421 London Dr</p>
              <p style={{ color: "var(--text-medium)" }}>Plano, TX 75025</p>
            </div>
          </address>

          <p
            className="text-base leading-relaxed mb-4"
            style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-medium)" }}
          >
            Oakridge Manor Living offers assisted living services to residents and families in
            Plano and the surrounding areas. Residents enjoy an engaging environment that
            promotes well-being and relaxation near some of the best that North Texas has to offer.
          </p>
          <p
            className="text-base leading-relaxed mb-8"
            style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-medium)" }}
          >
            Our community is conveniently located near top-rated medical centers, the
            Shops at Legacy, beautiful parks along the Chisholm Trail, and easy access
            to the Dallas North Tollway. Everything you love is close by — and everything
            you need is right here.
          </p>
          <Link href="/contact" className="btn-primary">
            Schedule a Tour Today
          </Link>
        </div>

        {/* Google Maps embed */}
        <div className="overflow-hidden rounded-lg shadow-lg" style={{ height: "420px", border: "3px solid var(--green)" }}>
          <iframe
            title="Oakridge Manor Living location map"
            src="https://maps.google.com/maps?q=2421+London+Dr,+Plano,+TX+75025&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
