"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Living Options", href: "/living-options" },
  { label: "Floor Plans", href: "/floor-plans" },
  { label: "Photo Gallery", href: "/gallery" },
  { label: "Services & Amenities", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full" style={{ backgroundColor: "var(--navy)" }}>
      {/* Top utility bar */}
      <div
        className="w-full py-2 px-6 flex justify-end text-xs"
        style={{ backgroundColor: "var(--navy-light)" }}
      >
        <a
          href="#"
          className="text-white/70 hover:text-white transition-colors uppercase tracking-widest font-semibold text-[10px]"
        >
          Community Member Login
        </a>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: "var(--gold)" }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
              <path d="M12 6c0 3-2 5-2 8h4c0-3-2-5-2-8z" />
              <path d="M9 18h6" />
            </svg>
          </div>
          <div>
            <div
              className="font-serif text-xl font-semibold leading-tight text-white tracking-wide"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Evergreen
            </div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-white/60 font-light">
              Living
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-white/80 hover:text-white text-[11px] uppercase tracking-widest font-semibold transition-colors whitespace-nowrap"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
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
        <div
          className="lg:hidden px-6 pb-6 flex flex-col gap-4"
          style={{ backgroundColor: "var(--navy)" }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/80 hover:text-white text-sm uppercase tracking-widest font-semibold transition-colors border-b border-white/10 pb-3"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
