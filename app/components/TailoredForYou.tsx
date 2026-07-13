import Link from "next/link";

export default function TailoredForYou() {
  return (
    <section className="px-6 py-10" style={{ backgroundColor: "var(--cream)" }}>
      <div
        className="max-w-6xl mx-auto rounded-lg px-8 sm:px-12 py-10 relative overflow-hidden"
        style={{ backgroundColor: "var(--navy)" }}
      >
        {/* Tree watermark */}
        <svg
          className="absolute right-6 bottom-0 opacity-10 pointer-events-none"
          width="180" height="180" viewBox="0 0 24 24" fill="var(--green-light)"
        >
          <path d="M12 2a6 6 0 00-6 6c0 .6.1 1.2.3 1.7A5 5 0 003 14a5 5 0 005 5h3v3h2v-3h3a5 5 0 005-5 5 5 0 00-3.3-4.3c.2-.5.3-1.1.3-1.7a6 6 0 00-6-6z" />
        </svg>

        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 justify-between">
          <div className="flex items-center gap-6">
            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 hidden sm:block">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              <path d="M12 18c-2-1.5-3.5-3-3.5-4.5a1.75 1.75 0 013.5-.6 1.75 1.75 0 013.5.6c0 1.5-1.5 3-3.5 4.5z" />
            </svg>
            <div>
              <p className="text-white text-2xl md:text-3xl font-semibold" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                Our Goal Is Simple:
              </p>
              <p className="serif-italic text-2xl md:text-3xl" style={{ color: "var(--green-light)" }}>
                To Care Like Family.
              </p>
            </div>
          </div>

          <p
            className="text-white/70 text-sm leading-relaxed max-w-sm text-center lg:text-left"
            style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif" }}
          >
            We treat every resident with the kindness, dignity, and respect they deserve — because here, you&apos;re not just a resident, you&apos;re family.
          </p>

          <Link href="/about" className="btn-primary flex-shrink-0 justify-center">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  );
}
