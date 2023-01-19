module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: "1rem",
      center: true,
    },
    extend: {
      colors: {
        jasonred: "#ED1C24",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      xmd: { max: "830px" },
      md: { max: "767px" },
      sm: { max: "639px" },
      mobile: "640px",
    },
  },
  plugins: [],
};
