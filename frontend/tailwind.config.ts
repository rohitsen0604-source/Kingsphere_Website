import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#080909',
          secondary: '#101111',
          surface: '#171816',
          elevated: '#1E201D',
        },
        gold: {
          DEFAULT: '#C9A34F',
          primary: '#C9A34F',
          champagne: '#E8D29A',
          metallic: '#A77D32',
          muted: 'rgba(201, 163, 79, 0.12)',
          border: 'rgba(201, 163, 79, 0.24)',
          borderLight: 'rgba(232, 210, 154, 0.35)',
          hover: '#DBB563',
        },
        text: {
          primary: '#F3F0E9',
          secondary: '#A5A39C',
          muted: '#6C6A64',
        },
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'Inter', 'sans-serif'],
        serif: ['var(--font-cormorant)', 'Playfair Display', 'serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 30px rgba(201, 163, 79, 0.18)',
        'luxury-subtle': '0 10px 40px -10px rgba(0, 0, 0, 0.8), 0 0 1px 1px rgba(201, 163, 79, 0.2)',
        'card-dark': '0 20px 50px -15px rgba(0, 0, 0, 0.9)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #E8D29A 0%, #C9A34F 50%, #A77D32 100%)',
        'gold-soft': 'linear-gradient(180deg, rgba(201,163,79,0.08) 0%, rgba(201,163,79,0.01) 100%)',
        'radial-gold': 'radial-gradient(circle at 50% 30%, rgba(201,163,79,0.12) 0%, rgba(8,9,9,0) 70%)',
      },
    },
  },
  plugins: [],
};

export default config;
