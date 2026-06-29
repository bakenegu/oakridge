"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full" style={{ backgroundColor: "var(--navy)" }}>
      {/* Top utility bar */}
      <div
        className="w-full py-2 px-6 flex justify-start items-center text-xs"
        style={{ backgroundColor: "var(--navy-light)" }}
      >
        <a
          href="tel:+15125550100"
          className="text-white/70 hover:text-white transition-colors text-[11px] font-semibold"
          style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif" }}
        >
          (512) 555-0100
        </a>
      </div>

      {/* Gold accent bar */}
      <div className="w-full h-[3px]" style={{ backgroundColor: "var(--gold)" }} />

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between" style={{ paddingTop: "0", paddingBottom: "0" }}>
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/LOGO1.png"
            alt="Oakridge Manor Living"
            width={160}
            height={44}
            style={{ objectFit: "contain", objectPosition: "left center" }}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-7">
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
