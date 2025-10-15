import type { Config } from 'tailwindcss'
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        tertiary: 'var(--tertiary)',
        quaternary: 'var(--quaternary)'
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '1000%': { opacity: '1' }
        }
      },
      animation: {
        'fade-in': 'fade-in 1s ease-out'
      }
    }
  },
  plugins: []
}

export default config
