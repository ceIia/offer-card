/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "arrow-shift": {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(4px)" },
        },
        shake: {
          "0%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-0.5px, -0.5px) rotate(-1deg)" },
          "20%": { transform: "translate(-0.5px, 0.5px) rotate(1deg)" },
          "30%": { transform: "translate(0.5px, -0.5px) rotate(0deg)" },
          "40%": { transform: "translate(-0.5px, 0.5px) rotate(1deg)" },
          "50%": { transform: "translate(0.5px, 0.5px) rotate(-1deg)" },
          "60%": { transform: "translate(-0.5px, 0.5px) rotate(0deg)" },
          "70%": { transform: "translate(0.5px, -0.5px) rotate(1deg)" },
          "80%": { transform: "translate(-0.5px, -0.5px) rotate(-1deg)" },
          "90%": { transform: "translate(0.5px, 0.5px) rotate(0deg)" },
          "100%": { transform: "translate(0, 0)" },
        },
      },
      animation: {
        "arrow-shift": "arrow-shift 1.5s ease-in-out infinite",
        shake: "shake 0.3s ease-in-out",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [
    require("tailwind-gradient-mask-image"),
    require("tailwindcss-animate"),
  ],
} satisfies Config;
