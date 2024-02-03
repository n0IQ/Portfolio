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
        background: 'white',
        primary: 'black',
        secondary: 'black',
        contents: 'black',
        links: 'black',
      },
      fontFamily: {
        title: ['Playfair Display'],
        subHeading: ['Lato'],
        content: ['Noto Sans'],
      },
    },
  },
  plugins: [],
};
export default config;
