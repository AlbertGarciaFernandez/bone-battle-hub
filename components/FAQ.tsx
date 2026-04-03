"use client";
import { useState } from "react";

const faqs = [
  {
    q: "What is Bone Battle?",
    a: "Bone Battle is a strategic card dueling and collecting game built around real pups from the fetish puppy community. Each Pup Card features a real pup's name, photo, gear and kinks as Bone Counts — values used to win combat rounds. It's part collectible, part game, part community.",
  },
  {
    q: "Do I need a card to play?",
    a: "You need at least a small deck of cards to play. You can get cards by collecting them from pups you meet at events, or by getting a Starter Pack (10 random cards) from Joker in person. You don't need your own card to play — but having one is half the fun.",
  },
  {
    q: "Can I collect cards without playing?",
    a: "Absolutely. Cards are designed to be collectibles first — they're given out like kinky business cards at events. You can build a collection, show it off in your Album and opt in to the online gallery without ever playing a single battle.",
  },
  {
    q: "Is the Card Creator mobile friendly?",
    a: "Yes. The card creation flow is fully responsive and works on mobile. You can submit your data and photo from any device. The final card design is handled by Joker, so you don't need any design tools.",
  },
  {
    q: "How do I access my Album?",
    a: "Hit 'Open Album' from the hub or the navigation. Your Album is your personal digital collection — it tracks every card you own, organized by rarity and serial number. You can opt in to make your collection publicly visible.",
  },
  {
    q: "Can I play with friends online?",
    a: "Yes — that's what Play Online is for. You can challenge other pups to real-time duels in Omega (casual), Beta (intermediate) or Alpha (full competitive) mode. Special Cards and Color Abilities are all supported in the online version.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="relative py-28 px-6 overflow-hidden"
    >
      {/* Bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(192,68,255,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <p
            className="text-[11px] tracking-[0.4em] uppercase mb-6"
            style={{ fontFamily: "var(--font-mono)", color: "#E8FF00" }}
          >
            COMMON QUERIES
          </p>
          <h2
            className="text-white uppercase"
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(3rem, 6vw, 5rem)",
              letterSpacing: "0.02em",
              lineHeight: 0.9,
            }}
          >
            GOT QUESTIONS?
          </h2>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-2">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="group relative rounded-xl overflow-hidden transition-all duration-300"
                style={{
                  background: isOpen ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.02)",
                  border: isOpen
                    ? "1px solid rgba(232,255,0,0.3)"
                    : "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {/* Corner brackets only on open */}
                {isOpen && (
                  <>
                    <div className="absolute top-4 left-4 w-2 h-2 border-l border-t border-[#E8FF00] opacity-40" />
                    <div className="absolute top-4 right-4 w-2 h-2 border-r border-t border-[#E8FF00] opacity-40" />
                  </>
                )}
                <button
                  className="w-full flex items-center justify-between gap-4 p-6 text-left transition-colors duration-200"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                >
                  <span
                    className="text-white font-semibold text-base leading-snug"
                    style={{ fontFamily: "var(--font-barlow)" }}
                  >
                    {faq.q}
                  </span>

                  {/* Chevron */}
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{
                      background: isOpen ? "rgba(232,255,0,0.15)" : "rgba(255,255,255,0.05)",
                      color: isOpen ? "#E8FF00" : "#888",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2 4L6 8L10 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>

                {/* Answer */}
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: isOpen ? "300px" : "0px",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <p
                    className="px-6 pb-6 leading-relaxed"
                    style={{
                      fontFamily: "var(--font-dm)",
                      color: "#888",
                      fontSize: "0.9rem",
                    }}
                  >
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <p
          className="text-center mt-10 text-sm"
          style={{ fontFamily: "var(--font-dm)", color: "#555" }}
        >
          Still confused? Find us on{" "}
          <a
            href="https://linktr.ee/bonebattle"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200"
            style={{ color: "#E8FF00" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.textDecoration = "underline")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.textDecoration = "none")}
          >
            @bonebattlecards
          </a>
        </p>
      </div>
    </section>
  );
}
