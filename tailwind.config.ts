import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        steel: {
          50: "#f6f8fb",
          100: "#e5e9ef",
          300: "#9ca8b7",
          500: "#667383",
          700: "#344150",
          900: "#151b23"
        },
        navy: {
          800: "#10243b",
          900: "#071421",
          950: "#030911"
        },
        alloy: "#a8b0ba",
        signal: "#0b63ce"
      },
      boxShadow: {
        industrial: "0 24px 70px rgba(8, 45, 96, 0.14)"
      }
    }
  },
  plugins: []
};

export default config;
