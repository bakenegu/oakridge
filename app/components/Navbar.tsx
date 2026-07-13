"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Care", href: "/services" },
  { label: "Amenities", href: "/services#amenities" },
  { label: "Gallery", href: "/gallery" },
  { label: "Resources", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full" style={{ backgroundColor: "var(--navy)" }}>
      {/* Top phone bar */}
      <div className="w-full px-6 pt-3 flex justify-end">
        <a
          href="tel:+14695550123"
          className="flex items-center gap-2 text-white hover:text-green-light transition-colors"
          style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif" }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.72A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006.29 6.29l1.51-1.52a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
          </svg>
          <span className="text-base font-semibold tracking-wide">(469) 555-0123</span>
        </a>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 flex items-center gap-3">
          <svg width="46" height="46" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
            <path d="M12 2a6 6 0 00-6 6c0 .6.1 1.2.3 1.7A5 5 0 003 14a5 5 0 005 5h3v3h2v-3h3a5 5 0 005-5 5 5 0 00-3.3-4.3c.2-.5.3-1.1.3-1.7a6 6 0 00-6-6z" fill="var(--green)" />
            <path d="M7 11l5-4 5 4" stroke="#fff" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className="leading-none">
            <div
              className="text-white text-2xl font-semibold tracking-wide"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              OAKRIDGE
            </div>
            <div
              className="text-[10px] font-semibold tracking-[0.28em] mt-0.5"
              style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--green-light)" }}
            >
              MANOR LIVING
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-white/85 hover:text-green-light text-[12px] uppercase tracking-widest font-semibold transition-colors whitespace-nowrap"
                style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif" }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link href="/contact" className="btn-primary hidden xl:inline-flex flex-shrink-0">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          Schedule a Tour
        </Link>

        {/* Mobile hamburger */}
        <button
          className="xl:hidden text-white p-2"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {menuOpen ? (
              <>
                <line x1="4" y1="4" x2="20" y2="20" />
                <line x1="20" y1="4" x2="4" y2="20" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="xl:hidden px-6 pb-6 flex flex-col gap-4" style={{ backgroundColor: "var(--navy)" }}>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/85 hover:text-white text-sm uppercase tracking-widest font-semibold transition-colors border-b border-white/10 pb-3"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary justify-center mt-2" onClick={() => setMenuOpen(false)}>
            Schedule a Tour
          </Link>
        </div>
      )}
    </header>
  );
}
