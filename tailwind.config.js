/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#e8590c', // warm orange
          hover: '#d9480f',
          light: '#ff922b',
          lighter: '#ffe8cc',
        },
        wine: {
          DEFAULT: '#9d174d',
          light: '#db2777',
        },
        forest: {
          DEFAULT: '#15803d',
          light: '#22c55e',
        },
        cream: {
          DEFAULT: '#faf7f2',
          deep: '#f3ede2',
        },
        night: {
          DEFAULT: '#1c1917',
          soft: '#292524',
          muted: '#57534e',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'ui-sans-serif', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 1px 2px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.06)',
        'lift': '0 16px 40px -16px rgba(28,25,23,0.25)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.25rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.2,0.9,0.3,1) both',
        'float': 'float 6s ease-in-out infinite',
        'wiggle': 'wiggle 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        wiggle: {
          '0%,100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-2deg)' },
          '75%': { transform: 'rotate(2deg)' },
        },
      },
    },
  },
  plugins: [],
}
