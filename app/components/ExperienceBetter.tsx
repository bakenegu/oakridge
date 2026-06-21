import Link from "next/link";

export default function ExperienceBetter() {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-3xl mx-auto text-center">
        <p className="section-badge mb-5">Premium Residential Care</p>

        <h2
          className="text-4xl md:text-5xl font-semibold leading-tight mb-8"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "var(--navy)" }}
        >
          High-Acuity Care in a True Home Environment
        </h2>

        <p
          className="text-base leading-relaxed mb-5"
          style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-medium)" }}
        >
          Oakridge Manor Living is a nurse-led, Type B residential care home providing high-acuity assisted living for seniors who need more than a traditional facility can offer. Our founder&apos;s clinical background ensures medical standards are embedded in every aspect of daily care.
        </p>

        <p
          className="text-base leading-relaxed mb-10"
          style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-medium)" }}
        >
          With a low resident-to-caregiver ratio, 24-hour alert monitoring, and a team that genuinely knows each resident by name, we deliver the attentive, personalized support that families can trust — in a setting that is warm, dignified, and unmistakably home.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/contact" className="btn-primary">
            Schedule a Private Tour
          </Link>
          <Link
            href="/about"
            className="text-sm font-semibold uppercase tracking-widest transition-colors"
            style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--gold)" }}
          >
            Meet Our Team →
          </Link>
        </div>
      </div>
    </section>
  );
}
