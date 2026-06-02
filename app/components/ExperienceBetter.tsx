import Link from "next/link";

export default function ExperienceBetter() {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-3xl mx-auto text-center">
        <p className="section-badge mb-5">Assisted Living</p>

        <h2
          className="text-4xl md:text-5xl font-semibold leading-tight mb-8"
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            color: "var(--navy)",
          }}
        >
          Experience Something Better
        </h2>

        <p
          className="text-base leading-relaxed mb-4"
          style={{
            fontFamily: "var(--font-open-sans), Arial, sans-serif",
            color: "var(--text-medium)",
          }}
        >
          Evergreen Living invites you to embrace your next chapter and live well
          like never before in our warm, welcoming assisted living community. We
          offer Assisted Living for residents who want to focus on the things
          that matter most in life.
        </p>

        <p
          className="text-base leading-relaxed mb-10"
          style={{
            fontFamily: "var(--font-open-sans), Arial, sans-serif",
            color: "var(--text-medium)",
          }}
        >
          Our elegantly modern community redefines retirement living with
          beautifully appointed living spaces, five-star services, and
          heartfelt support so you can Live Well. You are one step away from
          bright days, warm hearts, and joyful living.
        </p>

        <Link href="/contact" className="btn-primary">
          Schedule a Tour Today
        </Link>
      </div>
    </section>
  );
}
