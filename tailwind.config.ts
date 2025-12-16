import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        void: "#0E0E0E",
        "deep-surface": "#121212",
        "prism-yellow": "#F3E68F",
        "neon-pink": "#EFA9B6",
        "signal-cyan": "#4AF2EA",
        zinc400: "#A1A1AA"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"]
      },
      backgroundImage: {
        "grid-noise":
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)"
      },
      boxShadow: {
        glow: "0 0 80px rgba(243, 230, 143, 0.25)",
        neon: "0 0 60px rgba(74, 242, 234, 0.45)",
        pink: "0 0 60px rgba(239, 169, 182, 0.35)"
      }
    }
  },
  plugins: []
};

export default config;
