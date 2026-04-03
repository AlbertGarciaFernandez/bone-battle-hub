"use client";
import { useEffect, useRef } from "react";

// ── CHANGE THESE: module URLs ──
const CREATE_CARD_URL = "#";
const ALBUM_URL       = "#";
const PLAY_URL        = "#";

const ctaCards = [
  {
    id: "create",
    href: CREATE_CARD_URL,
    label: "CREATE CARD",
    microcopy: "Create your own pup battle card",
    accent: "#00D4FF",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    image: "/card_create.webp",
  },
  {
    id: "album",
    href: ALBUM_URL,
    label: "OPEN ALBUM",
    microcopy: "Track and showcase your collection",
    accent: "#C044FF",
    highlight: true,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    ),
    image: "/card_album.webp",
  },
  {
    id: "play",
    href: PLAY_URL,
    label: "PLAY ONLINE",
    microcopy: "Jump into online battles",
    accent: "#FF8A00",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 12h.01M9 12h.01M15 12h.01M18 12h.01" />
        <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        <path d="M8 12c.5 2.5 1.5 3.5 4 3.5s3.5-1 4-3.5" />
      </svg>
    ),
    image: "/card_play.webp",
  },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const textEls = container.querySelectorAll<HTMLElement>(".hero-animate");
    textEls.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      setTimeout(() => {
        el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 100 + i * 120);
    });
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex flex-col justify-center pt-24 pb-12 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Top-left purple glow */}
        <div
          className="absolute -top-20 -left-20 w-[700px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(ellipse at 20% 20%, rgba(124,58,237,0.2) 0%, transparent 60%)" }}
        />
        {/* Center subtle glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(192,68,255,0.06) 0%, transparent 65%)" }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* ── Main content ── */}
      <div ref={containerRef} className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-center gap-16">

        {/* Text block — CENTER aligned */}
        <div className="max-w-4xl flex flex-col items-center text-center">
          {/* Eyebrow */}
          <p
            className="hero-animate text-[11px] tracking-[0.4em] uppercase mb-8"
            style={{ fontFamily: "var(--font-mono)", color: "#E8FF00" }}
          >
            The pup card game ecosystem
          </p>

          {/* Headline */}
          <div className="hero-animate mb-8 flex flex-col items-center">
            {[
              { text: "BUILD YOUR CARD.", color: "#FFFFFF" },
              { text: "COLLECT THE PACK.", color: "#C044FF" },
              { text: "BATTLE ONLINE.",   color: "#FFFFFF" },
            ].map(({ text, color }) => (
              <div
                key={text}
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: "clamp(3.5rem, 8vw, 8rem)",
                  letterSpacing: "0.02em",
                  lineHeight: 0.9,
                  color,
                  textShadow: color === "#C044FF" ? "0 0 50px rgba(192,68,255,0.6)" : "none",
                }}
              >
                {text}
              </div>
            ))}
          </div>

          {/* Subtitle */}
          <p
            className="hero-animate leading-relaxed"
            style={{ fontFamily: "var(--font-dm)", color: "#999", fontSize: "clamp(1rem, 1.8vw, 1.2rem)", maxWidth: "600px" }}
          >
            Bone Battle unites creation, collection, and competitive play in one premium ecosystem for the pup community.
          </p>
        </div>

        {/* ── 3 CTA Panels ── */}
        <div className="hero-animate flex flex-col sm:flex-row items-end gap-6 w-full max-w-6xl">
          {ctaCards.map((card) => (
            <a
              key={card.id}
              href={card.href}
              className={`group relative rounded-2xl flex flex-col transition-all duration-500`}
              style={{
                flex: card.highlight ? "1.2" : "1",
                height: card.highlight ? "clamp(450px, 45vw, 550px)" : "clamp(400px, 40vw, 480px)",
                background: `#0D0D0D`,
                border: `1px solid rgba(255,255,255,0.08)`,
              }}
              onMouseEnter={(e) => {
                const t = e.currentTarget as HTMLElement;
                t.style.borderColor = card.accent;
                t.style.boxShadow   = `0 20px 60px rgba(0,0,0,0.5), 0 0 40px ${card.accent}33`;
                t.style.transform   = "translateY(-8px)";
              }}
              onMouseLeave={(e) => {
                const t = e.currentTarget as HTMLElement;
                t.style.borderColor = `rgba(255,255,255,0.08)`;
                t.style.boxShadow   = "none";
                t.style.transform   = "translateY(0)";
              }}
            >
              {/* Top Accent Icon */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center border-2"
                style={{ background: "#0A0A0A", borderColor: card.accent, color: card.accent, boxShadow: `0 0 20px ${card.accent}44` }}
              >
                {card.icon}
              </div>

              {/* Card Image Background */}
              <div className="relative flex-1 overflow-hidden rounded-t-2xl">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${card.image})` }}
                />
                {/* Gradient overlay to black */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent opacity-90" />
              </div>

              {/* Content area */}
              <div className="relative z-10 px-8 pb-10 pt-4 text-center flex flex-col items-center gap-4">
                <h3
                  className="text-white text-2xl tracking-wide uppercase"
                  style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700 }}
                >
                  {card.label}
                </h3>

                <div className="w-12 h-px bg-white/20 mb-2" />

                <p
                  className="text-white/60 text-sm leading-relaxed max-w-[200px]"
                  style={{ fontFamily: "var(--font-dm)" }}
                >
                  {card.microcopy}
                </p>

                <div
                  className="mt-6 flex items-center gap-2 text-xs font-bold tracking-widest uppercase transition-colors"
                  style={{ color: "#ffffff", opacity: 0.5 }}
                >
                  ENTER
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6H10M10 6L6.5 2.5M10 6L6.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* Corner brackets */}
              <div className="absolute top-4 left-4 w-4 h-4 border-l border-t opacity-20 transition-opacity group-hover:opacity-100" style={{ borderColor: card.accent }} />
              <div className="absolute top-4 right-4 w-4 h-4 border-r border-t opacity-20 transition-opacity group-hover:opacity-100" style={{ borderColor: card.accent }} />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-l border-b opacity-20 transition-opacity group-hover:opacity-100" style={{ borderColor: card.accent }} />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-r border-b opacity-20 transition-opacity group-hover:opacity-100" style={{ borderColor: card.accent }} />

              {/* Highlight Glow for middle card */}
              {card.highlight && (
                <div
                  className="absolute inset-0 pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity"
                  style={{ background: `radial-gradient(circle at 50% 50%, ${card.accent} 0%, transparent 70%)` }}
                />
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
