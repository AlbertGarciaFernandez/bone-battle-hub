"use client";
import { useEffect, useRef } from "react";

// ── CHANGE THESE: module URLs ──
const CREATE_CARD_URL = "#";
const ALBUM_URL       = "#";
const PLAY_URL        = "#";

const features = [
  {
    id: "creator",
    href: CREATE_CARD_URL,
    accent: "#C044FF",
    accentRgb: "192,68,255",
    blockClass: "feature-block-purple",
    tag: "Card Creator",
    title: "Design your pup card",
    subtitle: "Every pup deserves their own battle card.",
    description:
      "Submit your profile — name, stats, gear, kinks — and Joker crafts a one-of-a-kind Pup Card featuring real Bone Counts for every attribute. No two cards are the same.",
    bullets: [
      "Fully personalized with your data and photo",
      "20 attributes across GEAR + KINKS categories",
      "Dog Tricks for strategic attribute abilities",
      "EU + International printing guides included",
    ],
    cta: "Create Your Card",
    visual: (
      /* Card mockup */
      <div className="relative w-full max-w-[220px] mx-auto">
        <div
          className="rounded-2xl p-5 aspect-[2/3] flex flex-col gap-3"
          style={{
            background: "linear-gradient(145deg, #1a0d2e, #0d1a2e)",
            border: "1px solid rgba(192,68,255,0.3)",
            boxShadow: "0 20px 60px rgba(192,68,255,0.15)",
          }}
        >
          {/* Card header */}
          <div className="flex items-center justify-between">
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "#C044FF", letterSpacing: "0.15em" }}>
              GOOD BOY
            </span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "#666" }}>BBC·0042</span>
          </div>
          {/* Photo placeholder */}
          <div
            className="flex-1 rounded-xl flex items-center justify-center"
            style={{ background: "rgba(192,68,255,0.08)", border: "1px solid rgba(192,68,255,0.15)" }}
          >
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="16" r="8" stroke="rgba(192,68,255,0.5)" strokeWidth="1.5"/>
              <path d="M6 38c0-7.732 6.268-14 14-14s14 6.268 14 14" stroke="rgba(192,68,255,0.5)" strokeWidth="1.5"/>
            </svg>
          </div>
          {/* Bone count rows */}
          {["RUBBER", "LEATHER", "SOX/SNKR"].map((attr, i) => (
            <div key={attr} className="flex items-center justify-between">
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "8px", color: "#555", letterSpacing: "0.1em" }}>
                {attr}
              </span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, j) => (
                  <div
                    key={j}
                    className="w-2 h-2 rounded-sm"
                    style={{
                      background: j < (4 - i) ? "#C044FF" : "rgba(255,255,255,0.06)",
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* Floating badge */}
        <div
          className="absolute -top-3 -right-3 rounded-full px-3 py-1 text-[10px] font-bold"
          style={{
            background: "#C044FF",
            color: "#000",
            fontFamily: "var(--font-barlow)",
          }}
        >
          NEW
        </div>
      </div>
    ),
  },
  {
    id: "album",
    href: ALBUM_URL,
    accent: "#00D4FF",
    accentRgb: "0,212,255",
    blockClass: "feature-block-cyan",
    tag: "Album / Collection",
    title: "Track every card you own",
    subtitle: "Your personal pup collection, organized.",
    description:
      "The Album is your digital showcase. See all the cards you've collected, organized by rarity and pup — and share your collection with the community.",
    bullets: [
      "Full collection overview at a glance",
      "Card rarity and serial tracking",
      "Public showcase profile",
      "Opt-in to online trading",
    ],
    cta: "Open Your Album",
    visual: (
      <div className="relative w-full max-w-[260px] mx-auto">
        <div
          className="rounded-2xl p-5"
          style={{
            background: "linear-gradient(145deg, #0d1a2e, #0a1a1a)",
            border: "1px solid rgba(0,212,255,0.25)",
            boxShadow: "0 20px 60px rgba(0,212,255,0.1)",
          }}
        >
          <div className="flex items-center justify-between mb-4">
            <span style={{ fontFamily: "var(--font-bebas)", fontSize: "14px", color: "#fff", letterSpacing: "0.1em" }}>
              MY COLLECTION
            </span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "#00D4FF" }}>14 cards</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className="rounded-lg aspect-[2/3]"
                style={{
                  background: i < 6
                    ? `linear-gradient(145deg, hsl(${200 + i * 20},60%,18%), hsl(${200 + i * 20},60%,10%))`
                    : "rgba(255,255,255,0.03)",
                  border: i < 6
                    ? "1px solid rgba(0,212,255,0.2)"
                    : "1px dashed rgba(255,255,255,0.06)",
                  opacity: i < 6 ? 1 : 0.4,
                }}
              />
            ))}
          </div>
          <div className="mt-4 flex items-center gap-2">
            <div className="flex-1 h-1 rounded-full" style={{ background: "rgba(255,255,255,0.06)" }}>
              <div className="h-1 rounded-full" style={{ width: "64%", background: "#00D4FF" }} />
            </div>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "#666" }}>64%</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "play",
    href: PLAY_URL,
    accent: "#FF3030",
    accentRgb: "255,48,48",
    blockClass: "feature-block-red",
    tag: "Play Online",
    title: "Battle live with your deck",
    subtitle: "Three modes. Endless strategy.",
    description:
      "Go head-to-head in real-time Bone Count duels. Choose your game mode, build your hand, and outwit your opponent with Dog Tricks and Color Abilities.",
    bullets: [
      "Omega, Beta and Alpha game modes",
      "Real-time multiplayer duels",
      "Dog Tricks + Pup Color Abilities",
      "Special Cards for ultimate plays",
    ],
    cta: "Start a Battle",
    visual: (
      <div className="relative w-full max-w-[260px] mx-auto">
        <div
          className="rounded-2xl p-5"
          style={{
            background: "linear-gradient(145deg, #1a0d0d, #1a1010)",
            border: "1px solid rgba(255,48,48,0.25)",
            boxShadow: "0 20px 60px rgba(255,48,48,0.1)",
          }}
        >
          {/* VS header */}
          <div className="flex items-center justify-between mb-4">
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "#888" }}>ROUND 3</span>
            <span style={{ fontFamily: "var(--font-bebas)", fontSize: "20px", color: "#FF3030", letterSpacing: "0.1em" }}>VS</span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "#888" }}>ALPHA MODE</span>
          </div>
          {/* Two player cards */}
          <div className="flex gap-3 justify-center mb-4">
            {[
              { name: "KYRO", bones: [5,4,3], color: "#C044FF" },
              { name: "TOXIN", bones: [4,5,4], color: "#FF3030" },
            ].map((p) => (
              <div
                key={p.name}
                className="flex-1 rounded-xl p-3"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <span style={{ fontFamily: "var(--font-bebas)", fontSize: "13px", color: p.color, letterSpacing: "0.1em", display: "block", marginBottom: "6px" }}>
                  {p.name}
                </span>
                {p.bones.map((b, i) => (
                  <div key={i} className="flex gap-0.5 mb-1">
                    {[...Array(5)].map((_, j) => (
                      <div key={j} className="w-1.5 h-1.5 rounded-sm" style={{ background: j < b ? p.color : "rgba(255,255,255,0.06)" }} />
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
          {/* Attack row */}
          <div
            className="rounded-lg p-2 text-center"
            style={{ background: "rgba(255,48,48,0.08)", border: "1px solid rgba(255,48,48,0.2)" }}
          >
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "#FF3030", letterSpacing: "0.15em" }}>
              ATTACK — KINKS/SNIFFING: 5
            </span>
          </div>
        </div>
      </div>
    ),
  },
];

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.querySelectorAll(".feature-row").forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = "1";
                (el as HTMLElement).style.transform = "translateY(0)";
              }, i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="relative py-28 px-6 overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(192,68,255,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 flex flex-col items-center">
          <p
            className="text-[11px] tracking-[0.4em] uppercase mb-4"
            style={{ fontFamily: "var(--font-mono)", color: "#E8FF00" }}
          >
            THE ECOSYSTEM
          </p>
          <h2
            className="text-white"
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(3rem, 6vw, 5rem)",
              letterSpacing: "0.02em",
              lineHeight: 0.9,
            }}
          >
            THREE TOOLS. ONE GAME.
          </h2>
        </div>

        {/* Feature blocks */}
        <div className="flex flex-col gap-6">
          {features.map((f, idx) => (
            <div
              key={f.id}
              className={`feature-row feature-block ${f.blockClass} group relative rounded-2xl p-8 md:p-12 transition-all duration-500`}
              style={{
                opacity: 0,
                transform: "translateY(30px)",
                transition: "opacity(0.8s ease, transform 0.8s ease, border-color 0.4s ease)",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {/* Corner brackets */}
              <div className="absolute top-4 left-4 w-4 h-4 border-l border-t opacity-20 transition-opacity group-hover:opacity-100" style={{ borderColor: f.accent }} />
              <div className="absolute top-4 right-4 w-4 h-4 border-r border-t opacity-20 transition-opacity group-hover:opacity-100" style={{ borderColor: f.accent }} />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-l border-b opacity-20 transition-opacity group-hover:opacity-100" style={{ borderColor: f.accent }} />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-r border-b opacity-20 transition-opacity group-hover:opacity-100" style={{ borderColor: f.accent }} />

              <div
                className={`flex flex-col ${
                  idx % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                } gap-12 items-center`}
              >
                {/* Text side */}
                <div className="flex-1 flex flex-col gap-6">
                  <div>
                    <span
                      className="inline-block text-[10px] tracking-[0.25em] uppercase mb-3 px-2 py-1 rounded"
                      style={{
                        fontFamily: "var(--font-mono)",
                        color: f.accent,
                        background: `rgba(${f.accentRgb},0.1)`,
                        border: `1px solid rgba(${f.accentRgb},0.2)`,
                      }}
                    >
                      {f.tag}
                    </span>
                    <h3
                      className="text-white mb-2"
                      style={{
                        fontFamily: "var(--font-bebas)",
                        fontSize: "clamp(1.8rem, 4vw, 3rem)",
                        letterSpacing: "0.04em",
                        lineHeight: 1.1,
                      }}
                    >
                      {f.title}
                    </h3>
                    <p
                      className="mb-4"
                      style={{ fontFamily: "var(--font-barlow)", fontWeight: 600, color: f.accent, fontSize: "0.9rem" }}
                    >
                      {f.subtitle}
                    </p>
                    <p
                      className="leading-relaxed"
                      style={{ fontFamily: "var(--font-dm)", color: "#888", fontSize: "0.95rem" }}
                    >
                      {f.description}
                    </p>
                  </div>

                  {/* Bullets */}
                  <ul className="flex flex-col gap-2.5">
                    {f.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <span
                          className="mt-1 w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center"
                          style={{ background: `rgba(${f.accentRgb},0.15)` }}
                        >
                          <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                            <path d="M1.5 4L3.5 6L6.5 2" stroke={f.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                        <span style={{ fontFamily: "var(--font-dm)", color: "#aaa", fontSize: "0.9rem" }}>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href={f.href}
                    className="self-start inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-xs uppercase tracking-widest transition-all duration-300 hover:scale-105"
                    style={{
                      fontFamily: "var(--font-barlow)",
                      background: f.accent,
                      color: "#000",
                      boxShadow: `0 0 20px ${f.accent}44`,
                    }}
                  >
                    {f.cta}
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>

                {/* Visual side */}
                <div className="flex-shrink-0 w-full md:w-auto md:max-w-[300px]">
                  {f.visual}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
