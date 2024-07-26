import type { Config } from "tailwindcss";

const colors = {
  // Primary Blue
  primary: {
    50: "#f5f7fc",
    100: "#E3EBFB",
    200: "#C7D7F7",
    300: "#ACC3F3",
    400: "#90AFEF",
    500: "#749AEA",
    600: "#5886E6",
    700: "#3D72E2",
    800: "#215EDE",
    900: "#054ADA", // base blue color
    950: "#022570",
  },
  secondary: {
    50: "#EFFBFF",
    100: "#E3F6FD",
    200: "#C6EDFB",
    300: "#AAE4FA",
    400: "#8EDBF8",
    500: "#71D2F6",
    600: "#55C9F4",
    700: "#39C0F3",
    800: "#1CB7F1",
    900: "#00AEEF", // base light-blue color
    950: "#00AEFF", // added for link
  },
  black: {
    50: "#F7F7F8",
    100: "#E7E8E9",
    200: "#CFD0D3",
    300: "#B6B9BC",
    400: "#9EA1A6",
    500: "#868A90",
    600: "#6E727A",
    700: "#555B63",
    800: "#3D434D",
    900: "#252C37",
    950: "#000000",
  },
  yellow: {
    50: "#fff8ed",
    100: "#fff0d5",
    200: "#feddaa",
    300: "#fec373",
    400: "#fc9b33", // base yellow color
    500: "#fa8215",
    600: "#eb670b",
    700: "#c34d0b",
    800: "#9b3d11",
    900: "#7d3411",
    950: "#431807",
  },
  gray: {
    50: "#f6f7f9",
    85: "#D9D9D9",
    100: "#ededf1",
    200: "#d7d9e0",
    300: "#b3b8c6",
    400: "#8a91a6",
    500: "#687086", // base p text color
    600: "#565d73",
    700: "#474c5d",
    800: "#3d414f",
    900: "#363944",
    950: "#24252d",
  },
  white: "#fff",
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/section/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: { ...colors },
      borderImage: {
        "gradient-bottom":
          "linear-gradient(to right, #00AEEF, #054ADA, #022570) 1",
      },
    },
  },
  plugins: [],
};
export default config;
