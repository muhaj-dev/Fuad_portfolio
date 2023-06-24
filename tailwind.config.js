/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#14183D', // primary
        blue: '#212761', // secondary
        light_blue: '#18C1FC', // secondary
        t_blue: '#068C95',  
        
      },
      screens: {
        mobile: "360px",
        tablet: "580px",
        tablet_l: "650px",
        laptop: "780px",
        laptop_l: "1000px",
        desktop: "1100px",
        xl: "1400px",
      },
    },
  },
  plugins: [],
}
