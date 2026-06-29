import Link from "next/link";

export default function ExperienceBetter() {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-3xl mx-auto text-center">
        <p className="section-badge mb-5">About Us</p>

        <h2
          className="text-4xl md:text-5xl font-semibold leading-tight mb-8"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "var(--navy)" }}
        >
          Welcome to Oakridge Manor Living
        </h2>

        <p
          className="text-base leading-relaxed mb-5"
          style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-medium)" }}
        >
          At Oakridge Manor Living, we believe assisted living should be more than just receiving care — it should be about enjoying life in a supportive, engaging, and comfortable environment.
        </p>

        <p
          className="text-base leading-relaxed mb-5"
          style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-medium)" }}
        >
          Our community is thoughtfully designed for older adults who value their independence but appreciate having compassionate assistance available whenever they need it. From personalized care plans to engaging daily activities and nutritious meals, every aspect of our community is focused on enhancing quality of life.
        </p>

        <p
          className="text-base leading-relaxed mb-10"
          style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-medium)" }}
        >
          We take pride in creating meaningful relationships with our residents and their families, providing care that respects each person&apos;s unique needs, preferences, and lifestyle.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/contact" className="btn-primary">
            Contact Us
          </Link>
          <Link
            href="/about"
            className="text-sm font-semibold uppercase tracking-widest transition-colors"
            style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--gold)" }}
          >
            Learn More About Us →
          </Link>
        </div>
      </div>
    </section>
  );
}
