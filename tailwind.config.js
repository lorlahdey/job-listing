/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
        '2xl': '1440px',
      },
      colors: {
        'primary-cyan': 'hsl(var(--primary-dark-cyan) / <alpha-value>)',
        'light-cyan-bg': 'hsl(var(--bg-light-cyan) / <alpha-value>)',
        'filter-tab-light-cyan': 'hsl(var(--filter-tab-light-cyan) / <alpha-value>)',
        'dark-cyan': 'hsl(var(--dark-cyan) / <alpha-value>)',
        'very-dark-cyan': 'hsl(var(--very-dark-cyan) / <alpha-value>)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'bgHeader': "url('/images/bg-header-desktop.svg')",
      },
    },
  },
  plugins: [],
}
