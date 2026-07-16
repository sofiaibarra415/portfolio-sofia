import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#FFFFFF',
      black: '#000000',
      bg: {
        DEFAULT: '#0A0A0F',
        surface: '#14141F',
        elevated: '#1C1C29',
      },
      ink: {
        DEFAULT: '#F4F4F6',
        muted: '#A6A6B8',
        faint: '#6C6C80',
      },
      border: 'rgba(255,255,255,0.08)',
      iris: '#6C5CE7',
      spring: '#37E8A0',
      flare: '#FF6B57',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        sans: ['var(--font-body)', 'sans-serif'],
      },
      fontSize: {
        hero: ['clamp(2.75rem, 7vw, 6.5rem)', { lineHeight: '0.98', letterSpacing: '-0.02em' }],
        display: ['clamp(2rem, 4.5vw, 3.75rem)', { lineHeight: '1.02', letterSpacing: '-0.01em' }],
      },
    },
  },
  plugins: [],
}
export default config
