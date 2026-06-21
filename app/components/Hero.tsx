import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "../lib/images";

export default function Hero() {
  return (
    <section className="relative w-full" style={{ minHeight: "90vh" }}>
      <Image
        src={IMAGES.houseExterior}
        alt="Oakridge Manor Living — residential care home exterior in Plano, TX"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.72) 100%)",
        }}
      />

      <div
        className="absolute top-0 left-0 right-0 flex justify-center py-3"
        style={{ backgroundColor: "rgba(27, 42, 74, 0.85)" }}
      >
        <div className="flex items-center gap-3">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--gold)">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          <span
            className="text-white text-xs uppercase tracking-[0.25em] font-semibold"
            style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif" }}
          >
            Nurse-Led Residential Care Home — Plano, TX
          </span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--gold)">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <p
          className="text-white/80 text-sm uppercase tracking-[0.3em] font-semibold mb-4"
          style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif" }}
        >
          Type B Assisted Living · 24/7 Hands-On Care
        </p>
        <h1
          className="text-white text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6 max-w-3xl"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Where Clinical Care{" "}
          <span style={{ color: "var(--gold-light)" }}>Feels Like Home</span>
        </h1>
        <p
          className="text-white/80 text-base md:text-lg max-w-xl mb-10 leading-relaxed"
          style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif" }}
        >
          A premium, nurse-led residential care home offering personalized 24/7 support in a warm, private-home setting — not a facility.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Link href="/contact" className="btn-gold">
            Schedule a Private Tour
          </Link>
          <a
            href="tel:+15125550100"
            className="text-white/90 text-sm font-semibold uppercase tracking-widest hover:text-white transition-colors"
            style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif" }}
          >
            Call (512) 555-0100
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <div
          className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ backgroundColor: "rgba(27, 42, 74, 0.92)" }}
        >
          <p
            className="text-white text-sm"
            style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif" }}
          >
            Limited rooms available — families in Plano and DFW trust Oakridge Manor Living.
          </p>
          <Link href="/contact" className="btn-primary">
            Reserve a Room Today
          </Link>
        </div>
      </div>
    </section>
  );
}
