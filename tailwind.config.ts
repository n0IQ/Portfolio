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
        background: '#161513',
        headingPrimary: '#F2691D',
        primary: '#FAF9F6',
        contents: '#FFFFFF',

        darkBackground: '#161513',
        darkPrimary: '#FAF9F6',

        lightBackground: '#FAF9F6',
        lightPrimary: '#161513',

        iconHover: '#00FFFF',
        footerPrimary: '#fcc809',
        footerSecondary: '#fcd9b1',

        links: '#FFFFFF',
        navLinks: '#00FFFF',
        projectCardBg: '#1d1c20',
        projectCardHoverBg: '#000000bf',
      },
      dropShadow: {
        custom: '0px 3px 6px rgba(255, 102, 0, 0.77)',
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
        bigCardLargeView: '620px',
        smallCardLargeView: '290px',
        line: '1400px',
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
