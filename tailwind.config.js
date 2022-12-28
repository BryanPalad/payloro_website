/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      avenirblack: 'AvenirBlack',
      avenirlight:  'AvenirLight',
      avenirmedium: 'AvenirMedium',
      avenirheavy: 'AvenirHeavy',
      avenirbook: 'AvenirBook',
      avenirroman: 'AvenirRoman',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      content: {
        homeBg: 'url("https:d21teejgxf2f3b.cloudfront.net/pyolo-cms/img/loginbg.jpg")',
      },
      colors: {
        primary: '#ffffff',
        secondary: '#f2f2fc',
        primaryRed: '#8c2222',
        salmon: '#F46D75',
        cupid: '#F7B4BB',
        pink: '#F7D7DC' 
      }
    },
  },
  plugins: [],
}
