module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#E91E63",
      primaryDark: "#AD1457",
      secondary: "#F57C00",
      secondaryDark: "#D84315",
      light: "#FFE4DB",
      lightBorder: "#FFB199",
      white: "#FFFFFF",
      dark: "#1C1C1C",
      medium: "#A39572",
      green: "#21B211",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "4rem",
        lg: "6rem",
        xl: "10rem",
        "2xl": "14rem",
      },
    },
  },
  plugins: [],
};
