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
      colors: {
        brand: {
          primary: "#15151e",    // 主要品牌色
          secondary: "#2c2e3f",  // 次要品牌色
        },
        text: {
          heading: "#15151e",    // 標題文字顏色
          title: "#f39a04",
          body: "#2c2e3f",       // 內文文字顏色
          light: "#ffffff",      // 淺色文字
        },
        background: {
          primary: "#ffffff",    // 主要背景色
          secondary: "#fefbf5",  // 次要背景色（原 cream）
          accent: "#f39a04",     // 強調背景色（原 orange）
        },
        accent: {
          navy: "#7d93ba",       // 深藍灰色強調
          sky: "#c5d0e1",        // 淺藍灰色強調
          peach: "#fad08c",      // 淺橙色強調
        }
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      defaultTheme: "light",
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#15151e",
              foreground: "#ffffff",
            },
            secondary: {
              DEFAULT: "#2c2e3f",
              foreground: "#ffffff",
            },
          },
        },
      },
    }),
  ],
};
