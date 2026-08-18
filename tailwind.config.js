/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#F9F8F3',
          paper: '#F3F0E6',
          muted: '#E9E5D9',
        },
        sovereign: {
          navy: '#0A192F',
          blue: '#002E5B',
          deep: '#040E1A',
          border: '#1E3A5F',
        },
        trust: {
          green: '#00875A',
          soft: '#E6F4ED',
          border: '#9BD6B7',
        },
        authority: {
          gold: '#D9A700',
          soft: '#FFF8E1',
          border: '#F3D266',
        },
        escalation: {
          red: '#C92A2A',
          soft: '#FDF2F2',
          border: '#F8A5A5',
        }
      },
      fontFamily: {
        serif: ['Newsreader', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'IBM Plex Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}
