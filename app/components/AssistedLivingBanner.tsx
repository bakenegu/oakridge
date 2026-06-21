import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "../lib/images";

export default function AssistedLivingBanner() {
  return (
    <section className="relative w-full" style={{ minHeight: "420px" }}>
      <Image
        src={IMAGES.breakfastNook}
        alt="Warm kitchen and dining area at Oakridge Manor Living"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(20, 20, 20, 0.65)" }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full py-24 px-6 text-center">
        <h2
          className="text-4xl md:text-5xl font-semibold text-white mb-8"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Assisted Living
        </h2>
        <Link href="/services" className="btn-gold">
          Learn More
        </Link>
      </div>
    </section>
  );
}
