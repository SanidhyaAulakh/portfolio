export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 10s linear infinite",
      },
      borderColor: {
        gradient:
          "conic-gradient(from 0deg, #f87171, #fb923c, #facc15, #f87171)",
      },
    },
  },
  plugins: [],
};
