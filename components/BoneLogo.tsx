interface BoneLogoProps {
  size?: number;
  animated?: boolean;
  className?: string;
  showGlow?: boolean;
}

export default function BoneLogo({
  size = 160,
  animated = false,
  className = "",
  showGlow = false,
}: BoneLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${animated ? "animate-float" : ""} ${showGlow ? "logo-glow" : ""} ${className}`}
      aria-label="Bone Battle crossed bones logo"
    >
      {/* Glow definitions */}
      <defs>
        <filter id="bone-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="rainbow-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="rainbow-band" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#FF3030" />
          <stop offset="16%"  stopColor="#FF8800" />
          <stop offset="32%"  stopColor="#E8FF00" />
          <stop offset="50%"  stopColor="#00FF88" />
          <stop offset="66%"  stopColor="#00D4FF" />
          <stop offset="83%"  stopColor="#C044FF" />
          <stop offset="100%" stopColor="#FF3030" />
        </linearGradient>
        <linearGradient id="rainbow-band-v" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#FF3030" />
          <stop offset="16%"  stopColor="#FF8800" />
          <stop offset="32%"  stopColor="#E8FF00" />
          <stop offset="50%"  stopColor="#00FF88" />
          <stop offset="66%"  stopColor="#00D4FF" />
          <stop offset="83%"  stopColor="#C044FF" />
          <stop offset="100%" stopColor="#FF3030" />
        </linearGradient>
        {/* Clip paths for the bones */}
        <clipPath id="bone1-clip">
          <rect x="22" y="85" width="156" height="30" rx="15" transform="rotate(-45 100 100)" />
        </clipPath>
        <clipPath id="bone2-clip">
          <rect x="22" y="85" width="156" height="30" rx="15" transform="rotate(45 100 100)" />
        </clipPath>
      </defs>

      {/* ── BONE 1: top-left to bottom-right (/) ── */}
      <g filter="url(#bone-glow)">
        {/* Shaft */}
        <rect
          x="24" y="88"
          width="152" height="24"
          rx="12"
          fill="#F0EDE8"
          transform="rotate(-45 100 100)"
        />
        {/* Top-right knob (outer) */}
        <circle cx="143" cy="57" r="18" fill="#F0EDE8" />
        {/* Top-right knob (inner divot) */}
        <circle cx="143" cy="57" r="10" fill="#D8D4CE" />
        {/* Top-right knob 2 */}
        <circle cx="158" cy="42" r="14" fill="#F0EDE8" />

        {/* Bottom-left knob (outer) */}
        <circle cx="57" cy="143" r="18" fill="#F0EDE8" />
        <circle cx="57" cy="143" r="10" fill="#D8D4CE" />
        <circle cx="42" cy="158" r="14" fill="#F0EDE8" />
      </g>

      {/* ── BONE 2: top-right to bottom-left (\) ── */}
      <g filter="url(#bone-glow)">
        {/* Shaft */}
        <rect
          x="24" y="88"
          width="152" height="24"
          rx="12"
          fill="#F0EDE8"
          transform="rotate(45 100 100)"
        />
        {/* Top-left knob */}
        <circle cx="57" cy="57" r="18" fill="#F0EDE8" />
        <circle cx="57" cy="57" r="10" fill="#D8D4CE" />
        <circle cx="42" cy="42" r="14" fill="#F0EDE8" />

        {/* Bottom-right knob */}
        <circle cx="143" cy="143" r="18" fill="#F0EDE8" />
        <circle cx="143" cy="143" r="10" fill="#D8D4CE" />
        <circle cx="158" cy="158" r="14" fill="#F0EDE8" />
      </g>

      {/* ── CENTER DIAMOND BAND (rainbow) ── */}
      <g filter="url(#rainbow-glow)">
        {/* Diamond shape at crossing */}
        <polygon
          points="100,76 124,100 100,124 76,100"
          fill="url(#rainbow-band)"
          opacity="0.95"
        />
        {/* Inner diamond highlight */}
        <polygon
          points="100,84 116,100 100,116 84,100"
          fill="none"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="1"
        />
        {/* Center dot */}
        <circle cx="100" cy="100" r="5" fill="rgba(255,255,255,0.9)" />

        {/* Diagonal band stripes on bone 1 shaft — near center */}
        <rect
          x="72" y="91"
          width="12" height="18"
          fill="url(#rainbow-band-v)"
          opacity="0.7"
          transform="rotate(-45 100 100)"
        />
        <rect
          x="116" y="91"
          width="12" height="18"
          fill="url(#rainbow-band-v)"
          opacity="0.7"
          transform="rotate(-45 100 100)"
        />
        {/* Diagonal band stripes on bone 2 shaft — near center */}
        <rect
          x="72" y="91"
          width="12" height="18"
          fill="url(#rainbow-band-v)"
          opacity="0.7"
          transform="rotate(45 100 100)"
        />
        <rect
          x="116" y="91"
          width="12" height="18"
          fill="url(#rainbow-band-v)"
          opacity="0.7"
          transform="rotate(45 100 100)"
        />
      </g>
    </svg>
  );
}
