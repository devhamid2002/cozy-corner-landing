/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [ "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js"],
    theme: {
      screens: {
        mm:  '375px',
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      extend: {
        fontFamily: {
          IRANSansX: ['IRANSansX',]
        }
      },
    },
  }
  
  