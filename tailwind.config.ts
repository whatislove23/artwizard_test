import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "360px",
      md: "768px",
      lg: "1440px",
      xl: "1920px",
    },
    colors: {
      mygrey: {
        50: "#EDEEEF",
        500: "#4D525C",
        900: "#202227",
      },
    },

    extend: {},
  },
  plugins: [],
};
export default config;
