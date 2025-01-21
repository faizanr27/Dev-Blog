export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: '#1DA1F2',
        secondary: '#14171A',
        dark: {
          DEFAULT: '#15202B',
          lighter: '#1C2732',
          light: '#2C3640'
        }
      }
    },
  },
  plugins: [],
}