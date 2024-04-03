/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#171717",
        secondaryColor: "#D4F7F0",
        lightText: "#067A6E",
        mainBG: "#F7F7F8",
        secondaryMain: "#EAEAEA",
        bannerText: "#666",
        cardBlue: "#0070F3",
        borderColor: "#EBEBEB",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "banner-bg": "url('/public/banner-bg.png')",
      },
    },
  },
  plugins: [],
};
