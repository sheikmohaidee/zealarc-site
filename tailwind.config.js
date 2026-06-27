/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        apple: {
          white: '#FFFFFF',
          gray: '#F5F5F7',
          dark: '#1D1D1F',
          blue: '#8EC8FF',
          accent: '#0071E3',
        }
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
      },
      spacing: {
        '120': '120px',
        '180': '180px',
        '40': '40px',
        '80': '80px',
      },
      borderRadius: {
        '24': '24px',
        '32': '32px',
      },
      letterSpacing: {
        'tight-heading': '-0.02em',
        'tighter-heading': '-0.03em',
      }
    },
  },
  plugins: [],
}
