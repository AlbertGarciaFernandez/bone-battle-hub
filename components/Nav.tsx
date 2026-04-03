"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

// ── CHANGE THIS: entry hub URL ──
const ENTER_HUB_URL = "#hero";

const links = [
  { label: "HOME",         href: "#hero" },
  { label: "HOW IT WORKS", href: "#how-it-works" },
  { label: "FEATURES",     href: "#features" },
  { label: "COMMUNITY",    href: "#community" },
  { label: "FAQ",          href: "#faq" },
];

export default function Nav() {
  const [scrolled, setScrolled]     = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 flex-shrink-0 group">
          <Image
            src="/bb_logo_t.png"
            alt="Bone Battle logo"
            width={32}
            height={32}
            className="transition-transform duration-300 group-hover:rotate-12"
          />
          <span
            className="font-bebas text-2xl tracking-[0.1em] text-white leading-none"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            BONE BATTLE
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="nav-link">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:block flex-shrink-0">
          <a
            href={ENTER_HUB_URL}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-lg text-xs font-bold transition-all duration-300 hover:scale-105"
            style={{
              fontFamily: "var(--font-barlow)",
              background: "linear-gradient(135deg, #C044FF, #7C3AED)",
              color: "#fff",
              letterSpacing: "0.05em",
              boxShadow: "0 0 30px rgba(192,68,255,0.4)",
            }}
          >
            Enter Hub
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className={`block h-px w-6 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-px w-6 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-px w-6 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="nav-link text-base"
            onClick={() => setMenuOpen(false)}
          >
            {l.label}
          </a>
        ))}
        <a href={ENTER_HUB_URL} className="btn-primary self-start mt-2">
          Enter Hub
        </a>
      </div>
    </header>
  );
}
