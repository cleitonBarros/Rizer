import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
        scroll: "scroll 240s linear infinite"
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(calc(-100% - 0rem))" }
        },
        scroll_reverse: {
          "0%": { transform: "translateX(calc(-100% - 0rem))" },
          "100%": { transform: "translateX(0%)" }
        }
      },
      padding: {
        "6.25": "100px",
        "7.5": "120px"
      }
    }
  },
  plugins: []
};
export default config;
