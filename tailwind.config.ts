import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      'white': '#ffffff',
      'textBase': '#3D3D3D',
      'textLight': '#5A5A5A',
      'darkColor': '#2A2A2A',
      'lightColor': '#FAFAFA',
      'primary': '#96c361',
      'primaryLight': '#c6e3cd',
      'darkGrey': '#5F646D',
      'middleGrey': '#A5A5A5',
      'lightGrey': '#E5E5E5',
    }
  },
  plugins: [],
};
export default config;
