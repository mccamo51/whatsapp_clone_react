module.exports = {
  content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        mainBG: '#dadbd3',
        appBG: '#ebebeb',
        serachBG: '#F0F2F5'

  
        // ...
      },
      boxShadow: {
        mainShadow: '-1px 4px 20px -6px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}
