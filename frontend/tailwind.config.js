module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',      // Voor bestanden in de app-directory (Next.js 13+)
    './pages/**/*.{js,ts,jsx,tsx}',    // Voor pagina's (als je de pages-directory gebruikt)
    './components/**/*.{js,ts,jsx,tsx}',  // Voor herbruikbare componenten
    './src/**/*.{js,ts,jsx,tsx}',      // Voor eventuele andere componenten in een src-map
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
