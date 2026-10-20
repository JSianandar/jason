import type { Config } from "tailwindcss";

const v = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // theme-aware semantic tokens (swap between light and dark)
        base: v("c-base"),
        surface: v("c-surface"),
        raised: v("c-raised"),
        line: v("c-line"),
        fg: v("c-fg"),
        muted: v("c-muted"),
        accent: v("c-accent"),
        hot: v("c-hot"),
        deep: v("c-deep"),
        on: v("c-on"),
        // static palette (same in both themes)
        navy: { 900: "#161E2F", 800: "#242F49", 700: "#384358" },
        peach: "#FFA586",
        crimson: "#B51A2B",
        wine: "#541A2E",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
        display: ["var(--font-display)"],
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        drift: {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(30px,-20px) scale(1.1)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseDot: {
          "0%,100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(1.6)" },
        },
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        drift: "drift 14s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
        "pulse-dot": "pulseDot 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
