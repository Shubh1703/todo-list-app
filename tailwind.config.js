module.exports = {
  content: ["./public/**/*.{html,js}"], // Scan all HTML/JS files in the public folder
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};