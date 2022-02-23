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
        serachBG: '#F0F2F5',
        messageSentColor: '#dcf8c6'

      },
      boxShadow: {
        mainShadow: '-1px 4px 20px -6px rgba(0, 0, 0, 0.3)',
      },
      backgroundImage: {
        'chat-iamge': `url('https://res.cloudinary.com/practicaldev/image/fetch/s--WAKqnINn--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/tw0nawnvo0zpgm5nx4fp.png')`
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
 
}
