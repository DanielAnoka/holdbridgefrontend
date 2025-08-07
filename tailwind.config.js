/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        nav: "#00000033",
        text: "#FFFFFF",
        primary: "#1E40AF",
        accent: "#0F1423",
        darkbg: "#020817",
      },
      backgroundImage: {
        'wallet-green': 'linear-gradient(98.23deg, #063018 -7.05%, #134F2B 73.63%)',
        'wallet-btc': 'linear-gradient(99.65deg, #461507 -7.08%, #732910 70.72%)',
         'wallet-eth': 'linear-gradient(98.21deg, #172658 -7.05%, #1D3784 73.42%)',
         'wallet-usdt': 'linear-gradient(99.3deg, #3D0866 -7.07%, #561B83 76.72%)',
      },
    },
  },
  plugins: [],
};
