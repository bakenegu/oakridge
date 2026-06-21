import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  "Our Care": [
    { label: "24/7 Personalized Care", href: "/services" },
    { label: "Meal Services", href: "/services" },
    { label: "Safety & Security", href: "/services" },
    { label: "Comfort of Home", href: "/services" },
  ],
  "About Us": [
    { label: "Our Story", href: "/about" },
    { label: "Care Leadership", href: "/about" },
    { label: "Photo Gallery", href: "/gallery" },
    { label: "Contact Us", href: "/contact" },
  ],
  Connect: [
    { label: "Schedule a Tour", href: "/contact" },
    { label: "Call (512) 555-0100", href: "tel:+15125550100" },
    { label: "Careers", href: "/careers" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--navy)" }}>
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Logo / about col */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              <Image
                src="/LOGO1.png"
                alt="Oakridge Manor Assisted Living"
                width={200}
                height={90}
                style={{ objectFit: "contain", objectPosition: "left center" }}
              />
            </div>

            <p
              className="text-white/60 text-sm leading-relaxed mb-5"
              style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif" }}
            >
              A licensed Type B assisted living facility in Plano, TX. Nurse-led, 24/7 hands-on care for residents with higher-acuity needs — in a warm, residential home setting.
            </p>

            <address
              className="not-italic"
              style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif" }}
            >
              <p className="text-white/60 text-sm">2421 London Dr</p>
              <p className="text-white/60 text-sm mb-3">Plano, TX 75025</p>
              <a
                href="tel:+15125550100"
                className="text-white/80 hover:text-white text-sm transition-colors font-semibold"
              >
                (512) 555-0100
              </a>
            </address>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4
                className="text-white text-xs uppercase tracking-[0.2em] font-semibold mb-5"
                style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif" }}
              >
                {heading}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/55 hover:text-white text-sm transition-colors"
                      style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-white/40 text-xs"
            style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif" }}
          >
            &copy; {new Date().getFullYear()} Oakridge Manor Assisted Living. All rights reserved.
          </p>
          <p
            className="text-white/40 text-xs italic"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Where Comfort, Dignity, and Care Feel Like Home.
          </p>
        </div>
      </div>
    </footer>
  );
}
