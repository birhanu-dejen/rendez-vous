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
      fontSize: {
        "heading-desktop": "40px",
        "heading-laptop": "36px",
        "heading-tablet": "32px",
        "heading-mobile": "24px",
        "paragraph-desktop": "32px",
        "paragraph-tablet": "24px",
        "paragraph-mobile": "12px",
        "copyright-desktop": "20px",
        "copyright-tablet": "14px",
        "copyright-mobile": "10px",
      },
    },
  },
  plugins: [],
};
