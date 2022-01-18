const colors = require('tailwindcss/colors');

module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors  : {
        transparent: 'transparent',
        current    : 'currentColor',
        black      : colors.black,
        white      : colors.white,
        pink       : colors.pink,
        gray       : colors.slate,
        red        : colors.red,
        orange     : colors.orange,
        amber      : colors.amber,
        yellow     : colors.yellow,
        green      : colors.green,
        teal       : colors.teal,
        blue       : colors.blue,
        indigo     : colors.indigo,
        purple     : colors.purple
    },
    },
  },
  plugins: [],
}
