/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // or 'media' or false

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#8781CF", // Purple (light mode)
          // dark: "#3d0066", // Purple (dark mode)
          dark: "#3B306C",
        },
        secondary: {
          light: "#10b981", // Green (light mode)
          dark: "#059669", // Green (dark mode)
        },
        background: {
          light: "#f0f0f0", // Light background
          dark: "#1a202c", // Dark background
        },
        text: {
          light: "#1a202c", // Dark text (light mode)
          dark: "#f7fafc", // Light text (dark mode)
        },
      },
    },
  },

  plugins: [],
};
