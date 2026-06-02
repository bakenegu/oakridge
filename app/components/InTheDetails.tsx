import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "../lib/images";

export default function InTheDetails() {
  return (
    <section className="relative w-full" style={{ minHeight: "420px" }}>
      <Image
        src={IMAGES.diningRoom}
        alt="Elegant dining room at Evergreen Living"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(10, 10, 10, 0.55)" }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full py-24 px-6 text-center">
        <h2
          className="text-4xl md:text-5xl font-semibold text-white mb-8"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          It Is In the Details.
        </h2>
        <Link href="/gallery" className="btn-gold">
          View Our Gallery
        </Link>
      </div>
    </section>
  );
}
