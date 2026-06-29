import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "../lib/images";

export default function Hero() {
  return (
    <section className="relative w-full" style={{ minHeight: "90vh" }}>
      <Image
        src={IMAGES.houseExterior}
        alt="Oakridge Manor Living — compassionate assisted living in Plano, TX"
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

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <p
          className="text-white/80 text-sm uppercase tracking-[0.3em] font-semibold mb-4"
          style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif" }}
        >
          Assisted Living · Plano, TX
        </p>
        <h1
          className="text-white text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6 max-w-4xl"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Compassionate Assisted Living in a Place You&apos;ll Be Proud to{" "}
          <span style={{ color: "var(--gold-light)" }}>Call Home</span>
        </h1>
        <p
          className="text-white/80 text-base md:text-lg max-w-2xl mb-10 leading-relaxed"
          style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif" }}
        >
          At Oakridge Manor Living, we provide personalized assisted living services in a warm, welcoming community where seniors can enjoy comfort, independence, and peace of mind. Our dedicated team is committed to helping every resident live with dignity while receiving the support they need to thrive.
        </p>
        <Link href="/contact" className="btn-gold">
          Contact Us
        </Link>
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
            Discover a community where compassionate care and meaningful connections come together.
          </p>
          <Link href="/contact" className="btn-primary">
            Schedule a Tour
          </Link>
        </div>
      </div>
    </section>
  );
}
