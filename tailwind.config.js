/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        kalam: ["var(--font-kalam)", "cursive"],
        dancing: ["var(--font-dancing-script)", "cursive"],
        knewave: ["var(--font-knewave)", "cursive"],
      },
    },
  },
  plugins: [],
};
