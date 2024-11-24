import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blackBlue: "#181E4B",
        gray: "#5E6282",
        activeLink: "#4737FF",
        primary: "#4475F2"
      },
      fontFamily: {
        primary: ["var(--font-primary)"]
      }
    },
  },
  plugins: [],
} satisfies Config;
