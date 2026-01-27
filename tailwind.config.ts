import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: {
        "2xl": "1120px",
      },
    },
    extend: {
      fontFamily: {
        serif: ["Fraunces", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        sm: "var(--radius-small)",
        md: "var(--radius-medium)",
        lg: "var(--radius-large)",
        pill: "var(--radius-pill)",
      },
      boxShadow: {
        elegant: "0 1px 2px 0 rgba(0, 0, 0, 0.04), 0 2px 8px 0 rgba(0, 0, 0, 0.02)",
        "elegant-lg": "0 2px 4px 0 rgba(0, 0, 0, 0.04), 0 4px 12px 0 rgba(0, 0, 0, 0.03)",
        "elegant-hover": "0 2px 4px 0 rgba(0, 0, 0, 0.05), 0 4px 12px 0 rgba(0, 0, 0, 0.04)",
      },
    },
  },
  plugins: [],
};

export default config;
