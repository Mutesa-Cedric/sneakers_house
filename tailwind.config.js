module.exports = {
  purge: false,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "orange": 'hsl(26, 100%, 55%)',
        "orange-light": 'hsl(25, 100%, 94%)',
        "blue-dark": 'hsl(220, 13%, 13%)',
        "gray-blue": '#69707D',
        "gray-blue-light": 'hsl(223, 64%, 98%)',
        "black-light":"rgba(0,0,0.75)",
      },
      screens: {
        sm: '375px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      fontFamily: {
        'sans':['Kumbh Sans', 'sans-serif']
      }
    },
  },
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `composables/**/*.{js,ts}`,
    `plugins/**/*.{js,ts}`,
    `App.{js,ts,vue}`,
    `app.{js,ts,vue}`
  ],
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    extend: {},
  },
  plugins: [],
}
