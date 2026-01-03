// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#0f172a",
        primary: "#0ea5a4",
        accent: "#7c3aed",
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(124, 58, 237, 0.5)",
      },
    },
  },
  plugins: [],
};
