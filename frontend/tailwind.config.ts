import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#17211f",
        moss: "#315c50",
        sage: "#6d907b",
        paper: "#f7f5ef",
        sand: "#e5ede7",
      },
      fontFamily: {
        sans: ["var(--font-body)"],
        display: ["var(--font-display)"],
      },
      fontSize: {
        display: ["3rem", { lineHeight: "0.98" }],
        "display-lg": ["3.75rem", { lineHeight: "0.98" }],
        "display-xl": ["4.5rem", { lineHeight: "0.98" }],
        heading: ["2.25rem", { lineHeight: "1.1" }],
        "heading-lg": ["3rem", { lineHeight: "1.1" }],
        "card-heading": ["1.5rem", { lineHeight: "1.25" }],
      },
      spacing: {
        section: "5rem",
        "section-lg": "7rem",
      },
      borderRadius: {
        action: "0.75rem",
        card: "0.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
