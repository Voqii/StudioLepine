/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#FF6B1A',      // 🎃 Halloween Orange
          light: '#FF8C42',        // Lighter pumpkin orange
          dark: '#CC5500',         // Deep Halloween orange
          muted: '#FFB380',        // Muted orange
        },
        halloween: {
          orange: '#FF6B1A',       // Primary pumpkin orange
          black: '#1a1a1a',        // Deep black
          purple: '#6B2C91',       // Spooky purple
          green: '#39FF14',        // Eerie green glow
        },
        sage: {
          DEFAULT: '#7A8B7A',      // Muted sage green - technical/natural
          light: '#9DAF9D',
          dark: '#5F6F5F',
        },
        steel: {
          DEFAULT: '#6B7280',      // Steel gray - industrial/technical
          light: '#9CA3AF',
          dark: '#4B5563',
        },
        sky: {
          DEFAULT: '#87CEEB',      // Sky blue - creative/thoughtful
          light: '#B0D9F0',
          dark: '#6BB6D9',
          muted: '#A8D5E6',
        }
      },
      fontFamily: {
        mono: ['lexia-mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        sans: ['address-sans-pro', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        'tighter': '-0.02em',
        'tight': '-0.01em',
        'normal': '0',
        'wide': '0.01em',
        'wider': '0.02em',
        'widest': '0.05em',
      },
      lineHeight: {
        'tight': '1.2',
        'snug': '1.4',
        'normal': '1.6',
        'relaxed': '1.75',
      },
    },
  },
  plugins: [],
}
