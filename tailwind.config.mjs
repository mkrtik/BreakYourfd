/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
import { pastel } from "daisyui/src/theming/themes";
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["nunito variable"],
        mono: ["dm mono"],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        pastel: {
          ...pastel,
          neutral: "#a4bfeb",
        },
      },
    ],
  },
};
