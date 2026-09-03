/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        paper: '#FAFAF8',
        surface: '#F3F2EE',
        ink: '#15181C',
        charcoal: '#1D2126',
        graphite: '#4A5158',
        steel: '#8A9098',
        line: '#DEDCD5',
        accent: {
          DEFAULT: '#2452D9',
          dark: '#1B3EA8',
          light: '#4E72E8',
          tint: '#EBF0FD',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        'display-1': ['clamp(2.75rem, 5vw + 1rem, 5.5rem)', { lineHeight: '1.02', letterSpacing: '-0.02em' }],
        'display-2': ['clamp(2.25rem, 3.5vw + 1rem, 3.75rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        h2: ['clamp(1.75rem, 2vw + 1rem, 2.5rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        h3: ['clamp(1.25rem, 1vw + 1rem, 1.625rem)', { lineHeight: '1.2' }],
      },
      maxWidth: {
        content: '84rem',
      },
      transitionTimingFunction: {
        engineer: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
