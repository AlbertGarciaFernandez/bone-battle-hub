"use client";
import { useEffect, useRef } from "react";

// ── CHANGE THIS: Linktree / community link ──
const COMMUNITY_URL = "https://linktr.ee/bonebattle";

const stats = [
  { value: "353+",  label: "Pup Cards created",    color: "#C044FF" },
  { value: "1.2K+", label: "Community members",    color: "#00D4FF" },
  { value: "3",     label: "Game modes",           color: "#FF3030" },
  { value: "∞",     label: "Possible combinations", color: "#E8FF00" },
];

// Palette for card mockups
const cardPalettes = [
  { bg: "linear-gradient(145deg, #1a0d2e, #0d0820)", border: "rgba(192,68,255,0.4)", accent: "#C044FF" },
  { bg: "linear-gradient(145deg, #0d1a2e, #060d1a)", border: "rgba(0,212,255,0.35)", accent: "#00D4FF" },
  { bg: "linear-gradient(145deg, #1a0d0d, #120808)", border: "rgba(255,48,48,0.35)",  accent: "#FF3030" },
  { bg: "linear-gradient(145deg, #1a150d, #120e06)", border: "rgba(232,255,0,0.25)",  accent: "#E8FF00" },
  { bg: "linear-gradient(145deg, #0d1a12, #081209)", border: "rgba(0,255,136,0.3)",   accent: "#00FF88" },
  { bg: "linear-gradient(145deg, #1a1a1a, #0f0f0f)", border: "rgba(255,255,255,0.1)", accent: "#888" },
];

const pups = ["KYRO", "TOXIN", "RAIFI", "KITSU", "BUDDY", "SOCKY", "AZURE", "CHIP", "RETRO", "TEX", "SUNNY", "SLINKS"];

function CardMockup({ idx }: { idx: number }) {
  const palette = cardPalettes[idx % cardPalettes.length];
  const name    = pups[idx % pups.length];
  const bones   = [4, 3, 5, 2, 4, 5, 3, 4, 5, 2, 4, 3][idx % 12];

  return (
    <div
      className="card-mockup flex-shrink-0"
      style={{ background: palette.bg, borderColor: palette.border }}
    >
      {/* Card header */}
      <div className="p-2.5 flex flex-col h-full">
        <span
          className="text-[7px] tracking-[0.15em] mb-1.5"
          style={{ fontFamily: "var(--font-mono)", color: "#555" }}
        >
          GOOD BOY
        </span>
        {/* Photo area */}
        <div
          className="flex-1 rounded-lg flex items-center justify-center mb-2"
          style={{ background: "rgba(255,255,255,0.03)", border: `1px solid rgba(255,255,255,0.05)` }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="9" r="5" stroke={palette.accent} strokeWidth="1" opacity="0.5"/>
            <path d="M3 23c0-4.97 4.03-9 9-9s9 4.03 9 9" stroke={palette.accent} strokeWidth="1" opacity="0.5"/>
          </svg>
        </div>
        {/* Name */}
        <span
          className="text-[9px] text-center block mb-1.5"
          style={{ fontFamily: "var(--font-bebas)", color: "#fff", letterSpacing: "0.1em" }}
        >
          {name}
        </span>
        {/* Bone dots */}
        <div className="flex gap-0.5 justify-center">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-sm"
              style={{ background: i < bones / 1.2 ? palette.accent : "rgba(255,255,255,0.05)" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Community() {
  const sectionRef   = useRef<HTMLElement>(null);
  const marqueeTrack = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.querySelectorAll(".stat-item").forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = "1";
                (el as HTMLElement).style.transform = "translateY(0)";
              }, i * 80);
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="community"
      ref={sectionRef}
      className="relative py-28 overflow-hidden"
    >
      {/* Bg glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(232,255,0,0.04) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10">
        {/* Top text block — CENTER aligned */}
        <div className="text-center px-6 mb-20 max-w-4xl mx-auto flex flex-col items-center">
          <p
            className="text-[11px] tracking-[0.4em] uppercase mb-6"
            style={{ fontFamily: "var(--font-mono)", color: "#E8FF00" }}
          >
            THE PUP UNIVERSE
          </p>
          <h2
            className="text-white mb-8"
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(3rem, 6vw, 5rem)",
              letterSpacing: "0.02em",
              lineHeight: 0.9,
            }}
          >
            MORE THAN A GAME.<br />
            <span className="gradient-text-rainbow uppercase">A REAL COMMUNITY.</span>
          </h2>
          <p
            className="leading-relaxed max-w-2xl"
            style={{ fontFamily: "var(--font-dm)", color: "#888", fontSize: "1.1rem" }}
          >
            Bone Battle was born from real events, real pups and real kinks. Every card tells
            a story. Join a premium ecosystem that celebrates identity, play and creativity without compromise.
          </p>
        </div>

        {/* Card marquee strip */}
        <div className="marquee-wrapper mb-16 py-4">
          <div
            ref={marqueeTrack}
            className="flex gap-5"
            style={{ animation: "marquee 24s linear infinite", width: "max-content" }}
          >
            {/* Duplicate for seamless loop */}
            {[...Array(12)].map((_, i) => (
              <CardMockup key={`a-${i}`} idx={i} />
            ))}
            {[...Array(12)].map((_, i) => (
              <CardMockup key={`b-${i}`} idx={i} />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-6 max-w-4xl mx-auto mb-16">
          {stats.map((s) => (
            <div
              key={s.label}
              className="stat-item text-center"
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: "opacity 0.6s ease, transform 0.6s ease",
              }}
            >
              <div
                className="text-5xl font-bebas mb-1"
                style={{
                  fontFamily: "var(--font-bebas)",
                  color: s.color,
                  textShadow: `0 0 20px ${s.color}40`,
                }}
              >
                {s.value}
              </div>
              <div
                className="text-xs tracking-wide uppercase"
                style={{ fontFamily: "var(--font-barlow)", color: "#666" }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Values row */}
        <div className="px-6 max-w-5xl mx-auto">
          <div
            className="group relative rounded-2xl p-8 md:p-12 grid md:grid-cols-3 gap-8 overflow-hidden transition-all duration-500 hover:border-white/20"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {/* Corner brackets */}
            <div className="absolute top-4 left-4 w-4 h-4 border-l border-t opacity-20 border-white" />
            <div className="absolute top-4 right-4 w-4 h-4 border-r border-t opacity-20 border-white" />
            <div className="absolute bottom-4 left-4 w-4 h-4 border-l border-b opacity-20 border-white" />
            <div className="absolute bottom-4 right-4 w-4 h-4 border-r border-b opacity-20 border-white" />
            {[
              {
                title: "Identity First",
                icon: "✦",
                color: "#C044FF",
                text: "Every card is a real pup. Real name, real stats, real kinks — no anonymity required.",
              },
              {
                title: "Collect Together",
                icon: "✦",
                color: "#00D4FF",
                text: "Cards are given, not sold. Collect them from pups you meet, at events and through the community.",
              },
              {
                title: "Play With Purpose",
                icon: "✦",
                color: "#FF3030",
                text: "Bone Battle is social-first. Every duel is a reason to connect, laugh and compete.",
              },
            ].map((v) => (
              <div key={v.title} className="flex flex-col gap-3">
                <span className="text-xl" style={{ color: v.color }}>{v.icon}</span>
                <h4
                  className="text-white"
                  style={{ fontFamily: "var(--font-barlow)", fontWeight: 700, fontSize: "1.05rem" }}
                >
                  {v.title}
                </h4>
                <p
                  className="leading-relaxed"
                  style={{ fontFamily: "var(--font-dm)", color: "#777", fontSize: "0.875rem" }}
                >
                  {v.text}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <a
              href={COMMUNITY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Join the community
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
