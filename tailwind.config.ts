import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          blue:  '#00D4FF',
          bg:    '#020812',
          card:  '#0a1628',
          muted: '#4a7a8a',
          text:  '#c8e8f0',
        },
      },
      fontFamily: {
        display: ['Orbitron', 'monospace'],
        mono:    ['Space Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config
