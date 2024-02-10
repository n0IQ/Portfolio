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
        background: 'black',
        primary: 'white',
        secondary: 'white',
        links: 'white',
        projectCardBg: '#1d1c20',
        projectCardHoverBg: '#000000bf',
      },
      fontFamily: {
        title: ['Playfair Display'],
        subHeading: ['Lato'],
        content: ['Noto Sans'],
      },
      maxWidth: {
        bigCard: '1000px',
        smallCard: '480px',
      },
    },
  },
  plugins: [],
};
export default config;
