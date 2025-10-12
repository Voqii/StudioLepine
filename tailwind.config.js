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
          DEFAULT: '#000000',
          light: '#333333',
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
