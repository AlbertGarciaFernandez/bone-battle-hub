import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bone: {
          bg: "#0A0A0A",
          surface: "#111111",
          surface2: "#191919",
          border: "rgba(255,255,255,0.07)",
          text: "#FFFFFF",
          muted: "#888888",
          yellow: "#E8FF00",
          purple: "#C044FF",
          cyan: "#00D4FF",
          red: "#FF3030",
        },
      },
      fontFamily: {
        bebas: ["var(--font-bebas)", "sans-serif"],
        barlow: ["var(--font-barlow)", "sans-serif"],
        dm: ["var(--font-dm)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-12px) rotate(1deg)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        "reveal-up": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "reveal-scale": {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "reveal-up": "reveal-up 0.7s ease forwards",
        "reveal-scale": "reveal-scale 0.6s ease forwards",
        marquee: "marquee 20s linear infinite",
        "spin-slow": "spin-slow 20s linear infinite",
      },
      backgroundImage: {
        "bone-gradient":
          "radial-gradient(ellipse at 50% 0%, rgba(192,68,255,0.12) 0%, transparent 60%)",
        "bone-gradient-cyan":
          "radial-gradient(ellipse at 50% 100%, rgba(0,212,255,0.10) 0%, transparent 60%)",
        "bone-gradient-red":
          "radial-gradient(ellipse at 50% 50%, rgba(255,48,48,0.10) 0%, transparent 60%)",
        noise: "url('/noise.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
