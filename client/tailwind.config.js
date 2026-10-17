/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lux-dark': '#121212',
        'lux-black': '#0a0a0a',
        'lux-gold': '#C5A880',
        'lux-cream': '#F3EFE6',
        'lux-gray': '#8E8E8E',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      // Responsive-friendly defaults
      screens: {
        'xs': '400px',
        // Tailwind defaults (sm:640 md:768 lg:1024 xl:1280 2xl:1536) are kept
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
          xl: '2.5rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1440px', // cap ultra-wide container for readability
        },
      },
    },
  },
  plugins: [],
}