import type { Config } from 'tailwindcss'

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
    },
    colors: {
      blue: '#42446E',
      grey: '#666666',
      dark: '#191919',
      white: "#FFFFFF",
      light: "rgba(241, 241, 241, 1)",
      bluep : "rgba(66, 68, 110, 0.7)",
      transparent: "#00000000",
    }
  },
  plugins: [],
}
export default config
