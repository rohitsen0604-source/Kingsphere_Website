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
          DEFAULT: '#070B0E',
          secondary: '#0B1317',
          surface: '#0F1A1F',
          elevated: '#14232A',
        },
        royal: {
          obsidian: '#070B0E',
          midnight: '#0B1317',
          sapphire: '#0F1A1F',
          slate: '#14232A',
        },
        gold: {
          DEFAULT: '#DDB763',
          primary: '#DDB763',
          champagne: '#F8E9C6',
          metallic: '#C9A34F',
          muted: 'rgba(221, 183, 99, 0.16)',
          border: 'rgba(221, 183, 99, 0.32)',
          borderLight: 'rgba(248, 233, 198, 0.48)',
          hover: '#ECCB7E',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#FFFFFF',
          muted: '#F3F4F6',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Plus Jakarta Sans', 'Manrope', 'Inter', 'sans-serif'],
        serif: ['var(--font-sans)', 'Plus Jakarta Sans', 'Manrope', 'Inter', 'sans-serif'],
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
