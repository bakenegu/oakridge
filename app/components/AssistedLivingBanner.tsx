import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "../lib/images";

export default function AssistedLivingBanner() {
  return (
    <section className="relative w-full" style={{ minHeight: "320px" }}>
      <Image
        src={IMAGES.livingRoom}
        alt="Warm and inviting common living area at Oakridge Manor Living"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(27, 42, 74, 0.80)" }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full py-20 px-6 text-center">
        <p
          className="text-white/70 text-xs uppercase tracking-[0.3em] font-semibold mb-4"
          style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif" }}
        >
          Plano, Texas · Type B Residential Care
        </p>
        <h2
          className="text-4xl md:text-5xl font-semibold text-white mb-4"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          See Why Families Choose Us
        </h2>
        <p
          className="text-white/75 text-base max-w-xl mb-8 leading-relaxed"
          style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif" }}
        >
          A private tour is the best way to understand what makes Oakridge Manor Living different. Come see the home, meet the team, and feel the difference yourself.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Link href="/contact" className="btn-gold">
            Schedule a Private Tour
          </Link>
          <a
            href="tel:+15125550100"
            className="text-white/80 text-sm font-semibold uppercase tracking-widest hover:text-white transition-colors"
            style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif" }}
          >
            Call (512) 555-0100
          </a>
        </div>
      </div>
    </section>
  );
}
