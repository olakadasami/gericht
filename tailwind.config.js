/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "comorant": "var(--comorant)",
        "openSans": "var(--openSans)"
      },
      colors: {
        "primary-light": "#aaa",
        "primary-dark": "#0c0c0c",
        "secondary-light": "#FAFAFA",
        "secondary-dark": "#1a1a18",
        "color-white": "#fff",
        "color-accent": "#DCCA87"
      }
    },
  },
  plugins: [],
}