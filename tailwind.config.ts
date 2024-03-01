import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        darkBackground: '#161513',
        darkPrimary: '#F2691D',
        darkText: '#ffffff',

        background: '#161513',
        primary: 'white',
        secondary: 'white',
        contents: 'white',
        links: 'white',
        navLinks: '#F2691D',
        projectCardBg: '#1d1c20',
        projectCardHoverBg: '#000000bf',
      },
      fontFamily: {
        heading: ['Playfair Display'],
        subHeading: ['Lato'],
        content: ['Noto Sans'],
        secondaryContent: ['Roboto Mono', 'monospace'],
        secondaryHeading: ['Poppins', 'sans-serif'],
      },
      maxWidth: {
        bigCard: '1000px',
        smallCard: '480px',
      },
      height: {
        bg: '700px',
        smallCard: '350px',
      },
    },
  },
  darkMode: ['class'],
  plugins: [],
};
export default config;
