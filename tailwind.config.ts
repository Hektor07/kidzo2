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
        primary: {
          DEFAULT: "#FF8C00", // Orange
          light: "#FFA333",
          dark: "#E67E00",
        },
        secondary: "#4FC3F7", // Light Blue
        accent: "#8BC34A", // Light Green
        background: {
          light: "#FFF9F0",
        },
        text: {
          DEFAULT: "#333333",
          light: "#666666",
        },
        white: "#FFFFFF",
      },
      fontFamily: {
        sans: ["Tajawal", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

