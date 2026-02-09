/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary-blue)',
        secondary: 'var(--color-secondary-gray)',
        success: 'var(--color-success-green)',
        'brand-blue': '#07519B',
        'brand-green': '#619908',
      },
      backgroundColor: {
        primary: 'var(--color-primary-blue)',
        success: 'var(--color-success-green)',
      },
      textColor: {
        primary: 'var(--color-primary-blue)',
        secondary: 'var(--color-secondary-gray)',
      },
    },
  },
  plugins: [],
};
