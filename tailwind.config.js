/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./src/**/*.{js,jsx,ts,tsx}" ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        nav:"#00000033",
        text:"#FFFFFF",
        primary: "#1E40AF",
        accent: "#0F1423",
        darkbg: "#020817"
      }
    },
  },
  plugins: [],
}

