"use client";
import BoneLogo from "./BoneLogo";

// ── CHANGE THESE: module URLs ──
const CREATE_CARD_URL = "#";
const ALBUM_URL       = "#";
const PLAY_URL        = "#";

const entries = [
  {
    href: CREATE_CARD_URL,
    label: "Create Card",
    sub: "Design your pup card",
    accent: "#C044FF",
    accentRgb: "192,68,255",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="3" width="16" height="16" rx="2.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 11H15M11 7V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    href: ALBUM_URL,
    label: "View Album",
    sub: "Explore your collection",
    accent: "#00D4FF",
    accentRgb: "0,212,255",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="5" width="11" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="8" y="3" width="11" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M11 8h5M11 11h5M11 14h3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    href: PLAY_URL,
    label: "Start Battle",
    sub: "Enter the arena",
    accent: "#FF3030",
    accentRgb: "255,48,48",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <polygon points="5,3 19,11 5,19" fill="currentColor" opacity="0.9"/>
      </svg>
    ),
  },
];

export default function FinalCTA() {
  return (
    <section
      className="relative py-28 px-6 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0A0A0A 0%, #0D0A14 50%, #0A0A0A 100%)",
      }}
    >
      {/* Dramatic glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(192,68,255,0.1) 0%, rgba(0,212,255,0.04) 40%, transparent 70%)",
        }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <BoneLogo size={100} animated showGlow />
        </div>

        {/* Headline */}
        <h2
          className="text-white mb-6 uppercase"
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "clamp(3.5rem, 8vw, 7rem)",
            letterSpacing: "0.02em",
            lineHeight: 0.9,
          }}
        >
          CHOOSE YOUR ENTRY POINT.
        </h2>
        <p
          className="mb-16 max-w-md mx-auto"
          style={{ fontFamily: "var(--font-dm)", color: "#777", fontSize: "1.1rem" }}
        >
          One universe. Three ways in. What will you do first?
        </p>

        {/* 3 Big Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-stretch max-w-4xl mx-auto">
          {entries.map((e) => (
            <a
              key={e.label}
              href={e.href}
              className="flex-1 group relative rounded-2xl p-10 flex flex-col items-center gap-6 transition-all duration-500 hover:-translate-y-2"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
              onMouseEnter={(el) => {
                const t = el.currentTarget as HTMLElement;
                t.style.borderColor= e.accent;
                t.style.boxShadow  = `0 20px 60px rgba(0,0,0,0.5), 0 0 30px ${e.accent}33`;
              }}
              onMouseLeave={(el) => {
                const t = el.currentTarget as HTMLElement;
                t.style.borderColor = `rgba(255,255,255,0.06)`;
                t.style.boxShadow   = "none";
              }}
            >
              {/* Corner brackets */}
              <div className="absolute top-4 left-4 w-4 h-4 border-l border-t opacity-20 transition-opacity group-hover:opacity-100" style={{ borderColor: e.accent }} />
              <div className="absolute top-4 right-4 w-4 h-4 border-r border-t opacity-20 transition-opacity group-hover:opacity-100" style={{ borderColor: e.accent }} />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-l border-b opacity-20 transition-opacity group-hover:opacity-100" style={{ borderColor: e.accent }} />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-r border-b opacity-20 transition-opacity group-hover:opacity-100" style={{ borderColor: e.accent }} />

              {/* Icon - Circle logic from how it works */}
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                style={{
                  background: `rgba(${e.accentRgb},0.05)`,
                  color: e.accent,
                  border: `2px solid rgba(${e.accentRgb},0.15)`,
                  boxShadow: `0 0 30px rgba(${e.accentRgb},0.05)`,
                }}
              >
                {e.icon}
              </div>

              {/* Label */}
              <div>
                <span
                  className="block text-2xl uppercase"
                  style={{
                    fontFamily: "var(--font-barlow)",
                    fontWeight: 700,
                    color: "#fff",
                    letterSpacing: "0.04em",
                  }}
                >
                  {e.label}
                </span>
                <div className="w-8 h-px bg-white/10 mx-auto mt-2 mb-2" />
                <span
                  className="block text-xs uppercase tracking-widest"
                  style={{ fontFamily: "var(--font-mono)", color: "#555" }}
                >
                  {e.sub}
                </span>
              </div>

              {/* Enter Button Technical */}
              <div
                className="mt-4 flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300 group-hover:gap-4"
                style={{ fontFamily: "var(--font-barlow)", color: "#fff", opacity: 0.4 }}
              >
                AUTHENTICATE
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6H10M10 6L6.5 2.5M10 6L6.5 9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
