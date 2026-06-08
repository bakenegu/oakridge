import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "../lib/images";

export default function TailoredForYou() {
  return (
    <section className="relative w-full" style={{ minHeight: "420px" }}>
      <Image
        src={IMAGES.houseEntrance}
        alt="Welcoming entrance of Oakridge Manor Living"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(27, 42, 74, 0.72)" }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full py-24 px-6 text-center">
        <h2
          className="text-4xl md:text-5xl font-semibold text-white mb-8"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Tailored For You
        </h2>
        <Link href="/living-options" className="btn-gold">
          Find Out More Inside
        </Link>
      </div>
    </section>
  );
}
