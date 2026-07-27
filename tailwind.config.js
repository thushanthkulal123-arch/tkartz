/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
        brittany: ['"Brittany Signature"', 'cursive'],
      },
      colors: {
        'tk-primary': 'linear-gradient(90deg, #2F3F9E 0%, #5A2CA0 100%)',
        'tk-dark': '#222222',
        'tk-gray': '#333333',
        'tk-light-gray': '#F5F5F5',
        'tk-bg-gray': '#F0F0F0',
        'tk-gold': '#C9A227',
        'tk-blue-dark': '#023354',
        'tk-blue': '#0392F1',
        'tk-blue-mid': '#0290F0',
        'tk-blue-light': '#32B2FC',
      },
      backgroundImage: {
        'tk-gradient': 'linear-gradient(90deg, #2F3F9E 0%, #5A2CA0 100%)',
        'tk-blue-gradient': 'linear-gradient(180deg, #0392F1 0%, #0290F0 32.42%, #32B2FC 100%)',
        'tk-whatsapp': 'linear-gradient(135deg, #22C55E 0%, #059669 100%)',
        'tk-instagram': 'linear-gradient(135deg, #5A2CA0 0%, #2F3F9E 100%)',
        'tk-footer-text': 'linear-gradient(184.88deg, #FFFFFF 21.94%, rgba(255, 255, 255, 0.25) 71.29%)',
      },
      boxShadow: {
        'card': '0px 8px 26px rgba(103, 110, 144, 0.2)',
        'contact': '0px 8px 30px -8px rgba(0, 0, 0, 0.15)',
        'nav': '0px 0.602187px 2.04744px -1.41667px rgba(0, 0, 0, 0.16), 0px 2.28853px 7.78101px -2.83333px rgba(0, 0, 0, 0.14), 0px 10px 34px -4.25px rgba(0, 0, 0, 0.03)',
        'icon': '0px 4px 4px rgba(0, 0, 0, 0.15)',
      },
      borderRadius: {
        'pill': '80px',
        'card': '16px',
        'section': '24px',
      },
      maxWidth: {
        'container': '1440px',
        'content': '1105px',
      },
      spacing: {
        '18': '72px',
        '22': '88px',
      },
    },
  },
  plugins: [],
}
