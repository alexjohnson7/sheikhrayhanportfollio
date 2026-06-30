import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: "#00ff88",
        "neon-dim": "#00cc6a",
        "neon-glow": "rgba(0, 255, 136, 0.15)",
        "dark-bg": "#0a0f0d",
        "dark-card": "#0d1a14",
        "dark-surface": "#111f18",
        "dark-border": "#1a3328",
        "dark-text": "#c8e6d5",
        "dark-muted": "#5a8a6e",
        background: "#0a0f0d",
        foreground: "#c8e6d5",
        card: { DEFAULT: "#0d1a14", foreground: "#c8e6d5" },
        popover: { DEFAULT: "#0d1a14", foreground: "#c8e6d5" },
        primary: { DEFAULT: "#00ff88", foreground: "#0a0f0d" },
        secondary: { DEFAULT: "#111f18", foreground: "#c8e6d5" },
        muted: { DEFAULT: "#111f18", foreground: "#5a8a6e" },
        accent: { DEFAULT: "#1a3328", foreground: "#00ff88" },
        destructive: { DEFAULT: "#ff4444", foreground: "#fff" },
        border: "#1a3328",
        input: "#1a3328",
        ring: "#00ff88",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      borderRadius: {
        lg: "0.625rem",
        md: "calc(0.625rem - 2px)",
        sm: "calc(0.625rem - 4px)",
      },
      keyframes: {
        "glow-pulse": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
