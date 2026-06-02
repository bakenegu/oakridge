import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "../lib/images";

export default function AtEveryTurn() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative" style={{ minHeight: "480px" }}>
          <Image
            src={IMAGES.livingRoom}
            alt="Spacious living room with fireplace at Evergreen Living"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div
          className="flex flex-col justify-center px-10 py-16 lg:px-16"
          style={{ backgroundColor: "var(--off-white)" }}
        >
          <h2
            className="text-3xl md:text-4xl font-semibold mb-6"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              color: "var(--navy)",
            }}
          >
            At Every Turn
          </h2>
          <p
            className="text-base leading-relaxed mb-8"
            style={{
              fontFamily: "var(--font-open-sans), Arial, sans-serif",
              color: "var(--text-medium)",
            }}
          >
            Our spacious studio, one, and two bedroom residences are dressed to
            impress — featuring soaring ceilings, hardwood floors, cozy
            fireplaces, and built-in shelving. We have the perfect space that
            speaks to you at Evergreen Living. Each home is thoughtfully
            appointed so every day feels like a retreat.
          </p>
          <div>
            <Link href="/floor-plans" className="btn-outline-dark">
              Explore Floor Plans
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
