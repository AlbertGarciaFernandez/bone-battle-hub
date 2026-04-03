import Image from "next/image";

// ── CHANGE THESE: social links ──
const INSTAGRAM_URL = "https://www.instagram.com/bonebattlecards";
const LINKTREE_URL  = "https://linktr.ee/bonebattle";

const links = [
  { group: "Hub",       items: [{ label: "Card Creator", href: "#" }, { label: "Album", href: "#" }, { label: "Play Online", href: "#" }] },
  { group: "Navigate",  items: [{ label: "How It Works", href: "#how-it-works" }, { label: "Features", href: "#features" }, { label: "FAQ", href: "#faq" }] },
  { group: "Community", items: [{ label: "Instagram", href: INSTAGRAM_URL }, { label: "Linktree", href: LINKTREE_URL }] },
];

export default function Footer() {
  return (
    <footer
      className="relative pt-16 pb-8 px-6 overflow-hidden"
      style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Top row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#hero" className="flex items-center gap-2.5 mb-4">
              <Image src="/bb_logo_t.png" alt="Bone Battle" width={32} height={32} />
              <span
                style={{ fontFamily: "var(--font-bebas)", fontSize: "1.1rem", letterSpacing: "0.15em", color: "#fff" }}
              >
                Bone Battle
              </span>
            </a>
            <p
              className="leading-relaxed mb-5"
              style={{ fontFamily: "var(--font-dm)", color: "#555", fontSize: "0.8rem" }}
            >
              A community card game for pups.
              <br />
              Collect, create and battle.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)", color: "#888" }}
                aria-label="Instagram"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a
                href={LINKTREE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)", color: "#888" }}
                aria-label="Linktree"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.51 5.75l4.34-4.34 1.41 1.41L14.92 7.16l4.34 4.34-1.41 1.41-4.34-4.34V22h-2V8.57l-4.34 4.34-1.41-1.41L10.09 7.16 5.75 2.82 7.16 1.41l4.34 4.34z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Link groups */}
          {links.map((group) => (
            <div key={group.group}>
              <p
                className="mb-6 text-[10px] tracking-[0.4em] uppercase"
                style={{ fontFamily: "var(--font-mono)", color: "#888" }}
              >
                {group.group}
              </p>
              <ul className="flex flex-col gap-3">
                {group.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="transition-colors duration-200 hover:text-white"
                      style={{ fontFamily: "var(--font-barlow)", color: "#555", fontSize: "0.85rem", fontWeight: 500 }}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-6 pt-10"
          style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
        >
          <p
            className="text-center md:text-left uppercase tracking-widest"
            style={{ fontFamily: "var(--font-barlow)", color: "#333", fontSize: "0.7rem", fontWeight: 600 }}
          >
            © {new Date().getFullYear()} Bone Battle · Created by Joker · All rights reserved
          </p>
          <p
            className="text-center"
            style={{ fontFamily: "var(--font-bebas)", color: "#444", fontSize: "0.9rem", letterSpacing: "0.2em" }}
          >
            COLLECT · CREATE · BATTLE
          </p>
        </div>
      </div>
    </footer>
  );
}
