/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        spacemono: ['Space Mono', 'sans-serif'],
        nunitosans: ['Nunito Sans', 'sans-serif'],
      },
      colors: {
        primary: "#D6763A",
        secondary: "#9333EA",
      },
    },
  },
  plugins: [],
};
