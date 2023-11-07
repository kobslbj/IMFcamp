import { nextui } from "@nextui-org/theme";
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xxs': "360px",
      'xs': "480px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        serif: ["Noto Serif TC", "serif", "noto serif", "sans-serif"],
      },
      backgroundImage: {
        "bw-gradient": "linear-gradient(to bottom, black, gray, white)",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      defaultTheme: "dark",
      themes: {
        dark: {
          colors: {
            primary: "#15151e",
            fluorescent: "#CCFF00",
            secondary: {
              foreground: "#2c2e3f",
              DEFAULT: "#ffffff",
            },
          },
        },
      },
    }),
  ],
};
