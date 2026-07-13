import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "../lib/images";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden" style={{ backgroundColor: "var(--navy)" }}>
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: text */}
        <div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-2"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#fff" }}
          >
            A Place to Thrive.
          </h1>
          <p
            className="serif-italic text-4xl md:text-5xl lg:text-6xl leading-tight mb-6"
            style={{ color: "var(--green-light)" }}
          >
            A Family to Belong To.
          </p>

          <div className="flex items-center gap-3 mb-6">
            <span className="block w-16 h-px" style={{ backgroundColor: "var(--green)" }} />
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            </svg>
          </div>

          <p
            className="text-white/75 text-base md:text-lg leading-relaxed mb-9 max-w-md"
            style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif" }}
          >
            At Oakridge Manor Living, we provide compassionate, personalized care in a warm, home-like setting where residents are respected, valued, and loved.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="btn-primary justify-center">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Schedule a Tour
            </Link>
            <a href="tel:+14695550123" className="btn-outline-light justify-center">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.72A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006.29 6.29l1.51-1.52a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              Call Us Today
            </a>
          </div>
        </div>

        {/* Right: image + badge */}
        <div className="relative">
          <div className="relative rounded-lg overflow-hidden shadow-2xl" style={{ height: "440px" }}>
            <Image
              src={IMAGES.commonArea}
              alt="Warm, home-like living room at Oakridge Manor Living"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Badge */}
          <div
            className="absolute -bottom-6 -left-4 sm:left-6 flex items-center gap-4 px-6 py-4 rounded-lg shadow-xl max-w-sm"
            style={{ backgroundColor: "var(--navy-dark)", border: "1px solid rgba(127,178,65,0.4)" }}
          >
            <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              <path d="M12 18c-2-1.5-3.5-3-3.5-4.5a1.75 1.75 0 013.5-.6 1.75 1.75 0 013.5.6c0 1.5-1.5 3-3.5 4.5z" />
            </svg>
            <div style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif" }}>
              <p className="text-white text-sm font-semibold leading-tight">Now Accepting</p>
              <p className="serif-italic text-lg leading-tight" style={{ color: "var(--green-light)" }}>
                Our First Three Residents
              </p>
              <p className="text-white/60 text-xs mt-0.5">Limited Private Rooms Available</p>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="w-full leading-none" style={{ marginBottom: "-1px" }}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full" style={{ height: "60px", display: "block" }}>
          <path d="M0,40 C240,90 480,0 720,30 C960,60 1200,10 1440,45 L1440,80 L0,80 Z" fill="var(--green)" opacity="0.9" />
          <path d="M0,55 C240,100 480,20 720,45 C960,70 1200,30 1440,60 L1440,80 L0,80 Z" fill="var(--cream)" />
        </svg>
      </div>
    </section>
  );
}
