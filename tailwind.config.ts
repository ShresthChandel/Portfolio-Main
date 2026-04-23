import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0f",
        foreground: "#e8e8e0",
        primary: "#00bcd4",
        muted: "#6b6b6b",
        borderline: "rgba(255, 255, 255, 0.08)",
      },
      fontFamily: {
        syne: ["var(--font-syne)"],
        mono: ["var(--font-jetbrains-mono)"],
        sans: ["var(--font-dm-sans)"],
      },
    },
  },
  plugins: [],
};
export default config;
