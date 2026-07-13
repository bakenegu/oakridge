export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--navy)" }}>
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Logo + address */}
          <div className="flex items-center gap-4 text-center lg:text-left">
            <svg width="46" height="46" viewBox="0 0 24 24" fill="var(--green)" className="flex-shrink-0">
              <path d="M12 2a6 6 0 00-6 6c0 .6.1 1.2.3 1.7A5 5 0 003 14a5 5 0 005 5h3v3h2v-3h3a5 5 0 005-5 5 5 0 00-3.3-4.3c.2-.5.3-1.1.3-1.7a6 6 0 00-6-6z" />
            </svg>
            <div style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif" }}>
              <p
                className="text-white text-lg font-semibold"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Oakridge Manor Living
              </p>
              <p className="text-white/60 text-sm">2421 London Dr, Plano, TX 75025</p>
            </div>
          </div>

          {/* Contact row */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a
              href="tel:+14695550123"
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"
              style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.72A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006.29 6.29l1.51-1.52a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              (469) 555-0123
            </a>

            <span className="hidden sm:block w-px h-5" style={{ backgroundColor: "rgba(255,255,255,0.15)" }} />

            <a
              href="mailto:info@oakridgemanor.com"
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"
              style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 6l-10 7L2 6" />
              </svg>
              info@oakridgemanor.com
            </a>

            <a
              href="#"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
              style={{ backgroundColor: "var(--green)" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Divider + tagline */}
        <div className="mt-8 pt-6 border-t text-center" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
          <p className="serif-italic text-base" style={{ color: "var(--green-light)" }}>
            Compassion. Dignity. Respect. That&apos;s the Oakridge Way.
          </p>
          <p
            className="text-white/40 text-xs mt-3"
            style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif" }}
          >
            &copy; {new Date().getFullYear()} Oakridge Manor Living. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
