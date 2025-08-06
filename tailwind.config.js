/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Scan all JS/TS/React files in /src
  ],
  theme: {
    extend: {
      // You can customize your theme here (e.g., colors, fonts)
    },
  },
  plugins: [],
}
