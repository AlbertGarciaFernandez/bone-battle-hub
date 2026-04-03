"use client";
import { useEffect, useRef } from "react";

const steps = [
  {
    number: "01",
    accent: "#C044FF",
    accentRgb: "192,68,255",
    title: "Create Your Card",
    description:
      "Submit your pup profile — name, gear, kinks and a photo. Joker crafts a one-of-a-kind Bone Battle card that's yours forever.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="5" y="5" width="22" height="22" rx="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M11 16H21M16 11V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: "02",
    accent: "#00D4FF",
    accentRgb: "0,212,255",
    title: "Collect & Organize",
    description:
      "Build your deck by collecting cards from other pups at events or through starter packs. Your Album tracks every card you own.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="5" y="8" width="16" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="11" y="6" width="16" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M16 12h6M16 16h6M16 20h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: "03",
    accent: "#FF3030",
    accentRgb: "255,48,48",
    title: "Battle Online",
    description:
      "Put your deck to the test. Choose a game mode — Omega, Beta or Alpha — and go head-to-head in strategic Bone Count duels.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <polygon points="8,4 28,16 8,28" fill="currentColor" opacity="0.85"/>
        <path d="M4 10L4 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.querySelectorAll(".step-item").forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = "1";
                (el as HTMLElement).style.transform = "translateY(0)";
              }, i * 150);
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
      id="how-it-works"
      ref={sectionRef}
      className="relative py-28 px-6 overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(0,212,255,0.05) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 flex flex-col items-center">
          <p
            className="text-[11px] tracking-[0.4em] uppercase mb-6"
            style={{ fontFamily: "var(--font-mono)", color: "#E8FF00" }}
          >
            THE PLAYER JOURNEY
          </p>
          <h2
            className="text-white max-w-2xl"
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(3rem, 6vw, 5rem)",
              letterSpacing: "0.02em",
              lineHeight: 0.9,
            }}
          >
            THREE MOVES.<br/>ONE PREMIUM ECOSYSTEM.
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step) => (
            <div
              key={step.number}
              className="step-item group relative rounded-2xl p-8 flex flex-col items-center text-center gap-6 transition-all duration-500"
              style={{
                opacity: 0,
                transform: "translateY(30px)",
                transition: "opacity 0.7s ease, transform 0.7s ease",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {/* Corner brackets */}
              <div className="absolute top-4 left-4 w-4 h-3 border-l border-t opacity-20 transition-opacity group-hover:opacity-100" style={{ borderColor: step.accent }} />
              <div className="absolute top-4 right-4 w-4 h-3 border-r border-t opacity-20 transition-opacity group-hover:opacity-100" style={{ borderColor: step.accent }} />
              <div className="absolute bottom-4 left-4 w-4 h-3 border-l border-b opacity-20 transition-opacity group-hover:opacity-100" style={{ borderColor: step.accent }} />
              <div className="absolute bottom-4 right-4 w-4 h-3 border-r border-b opacity-20 transition-opacity group-hover:opacity-100" style={{ borderColor: step.accent }} />

              {/* Step number badge - Technical look */}
              <div className="absolute top-0 right-8 -translate-y-1/2 flex flex-col items-center">
                 <div className="h-6 w-px bg-white/20 mb-2" />
                 <div className="px-3 py-1 rounded bg-black border border-white/10 text-[10px] font-mono tracking-widest" style={{ color: step.accent }}>
                   STEP_{step.number}
                 </div>
              </div>

              {/* Icon Circle */}
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                style={{
                  background: `rgba(${step.accentRgb},0.05)`,
                  color: step.accent,
                  border: `2px solid rgba(${step.accentRgb},0.15)`,
                  boxShadow: `0 0 40px rgba(${step.accentRgb},0.05)`,
                }}
              >
                {step.icon}
              </div>

              {/* Text */}
              <div className="flex flex-col items-center gap-3">
                <h3
                  className="text-white text-2xl tracking-wide uppercase"
                  style={{
                    fontFamily: "var(--font-barlow)",
                    fontWeight: 700,
                  }}
                >
                  {step.title}
                </h3>
                <div className="w-10 h-px bg-white/10" />
                <p
                  className="leading-relaxed"
                  style={{ fontFamily: "var(--font-dm)", color: "#777", fontSize: "0.95rem" }}
                >
                  {step.description}
                </p>
              </div>

              {/* Decorative side accent */}
              <div className="absolute inset-y-8 left-0 w-[1px] opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: `linear-gradient(to bottom, transparent, ${step.accent}, transparent)` }} />
            </div>
          ))}
        </div>

        {/* Game modes bar */}
        <div
          className="mt-20 rounded-2xl p-6 border"
          style={{
            background: "rgba(255,255,255,0.02)",
            borderColor: "rgba(255,255,255,0.06)",
          }}
        >
          <p
            className="text-center text-[10px] tracking-[0.25em] uppercase mb-6"
            style={{ fontFamily: "var(--font-mono)", color: "#888" }}
          >
            Game modes
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Omega", desc: "Simple · 1 card hand · Beginner friendly", color: "#888" },
              { name: "Beta",  desc: "3 card hand · Dog Tricks activated",        color: "#00D4FF" },
              { name: "Alpha", desc: "Full game · All abilities · Competitive",   color: "#C044FF" },
              { name: "Quick & Dirty", desc: "One-card sudden-death battles",     color: "#FF3030" },
            ].map((mode) => (
              <div
                key={mode.name}
                className="rounded-xl p-4 text-center"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: `1px solid rgba(255,255,255,0.05)`,
                }}
              >
                <span
                  className="block text-sm font-bold mb-1"
                  style={{ fontFamily: "var(--font-barlow)", color: mode.color }}
                >
                  {mode.name}
                </span>
                <span
                  className="text-[11px] leading-snug"
                  style={{ fontFamily: "var(--font-dm)", color: "#666" }}
                >
                  {mode.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
