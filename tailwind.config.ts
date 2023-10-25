import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px"
      }
    },
    extend: {
      textShadow: {
        sm: "0px 1px 2px white",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)"
      },
      fontFamily: {
        suisse: [
          "Suisse Intl",
          "ui - sans - serif",
          "system - ui",
          "-apple - system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans - serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji"
        ],
        inter: ["Inter", "sans-serif"]
      },
      colors: {
        blue: {
          light: "#00CFDE"
        },
        green: {
          light: "#25D366"
        },
        rizer: {
          50: "#9DBFF9",
          100: "#5B8DEF",
          200: "#0063F7",
          800: "#032352",
          900: "#01183B"
        }
      },
      animation: {
        scroll_reverse: "scroll_reverse 240s linear infinite",
        scroll: "scroll 240s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out"
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(calc(-100% - 0rem))" }
        },
        scroll_reverse: {
          "0%": { transform: "translateX(calc(-100% - 0rem))" },
          "100%": { transform: "translateX(0%)" }
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" }
        }
      },
      padding: {
        "6.25": "100px",
        "7.5": "120px"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};
export default config;
