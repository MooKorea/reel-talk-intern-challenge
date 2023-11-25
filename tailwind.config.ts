import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/layout.tsx",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)"
      },
      fontFamily: {
        AvenirRegular: ["AvenirRegular", "sans-serif"],
        AvenirLight: ["AvenirLight", "sans-serif"],
        AvenirBook: ["AvenirBook", "sans-serif"],
        AvenirHeavy: ["AvenirHeavy", "sans-serif"],
        AvenirBlack: ["AvenirBlack", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
