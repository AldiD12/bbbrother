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
        primary: "#0c1a2e",
        secondary: "#b87333",
        background: "#faf9f7",
        "surface-container-low": "#f4f3f1",
        "surface-container": "#efeeec",
        "surface-container-high": "#e9e8e6",
        "on-surface": "#1b1c1b",
        "on-surface-variant": "#524439",
        "outline-variant": "#d8c3b4",
        charcoal: "#2d2d2d",
        muted: "#6b7280",
        "whatsapp-green": "#25D366",
        "forest-green": "#166534",
      },
      fontFamily: {
        headline: ["var(--font-epilogue)", "system-ui", "sans-serif"],
        body: ["var(--font-noto-serif)", "Georgia", "serif"],
        label: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "1rem",
        lg: "2rem",
        xl: "3rem",
      },
    },
  },
  plugins: [],
};
export default config;
