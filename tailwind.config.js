/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '1.5rem',
        lg: '2rem',
      },
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      colors: {
        // Refined Minimal Premium palette
        brass: {
          50: '#FBF8F0',
          100: '#F4ECD8',
          200: '#E8D7AF',
          300: '#DCC287',
          400: '#D0AD5E',
          500: '#C8A055', // primary accent
          600: '#A8853E',
          700: '#806530',
          800: '#594623',
          900: '#332815',
        },
        ink: {
          50: '#F5F4F2',
          100: '#E7E5E1',
          200: '#C8C4BD',
          300: '#A8A29A',
          400: '#78716C',
          500: '#57534E',
          600: '#44403C',
          700: '#292524',
          800: '#1C1917', // primary ink
          900: '#0C0A09',
        },
        cream: {
          50: '#FFFFFE',
          100: '#FDFDF9',
          200: '#FAFAF5', // primary background
          300: '#F5F4ED',
          400: '#EDEBE0',
        },
        // Semantic
        bg: 'rgb(var(--bg) / <alpha-value>)',
        fg: 'rgb(var(--fg) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        subtle: 'rgb(var(--subtle) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        border: 'rgb(var(--border) / <alpha-value>)',
        card: 'rgb(var(--card) / <alpha-value>)',
      },
      // Extra opacity steps used by slash-color modifiers (e.g. border-ink-800/12).
      // @apply validates these against the opacity scale, so non-default values
      // must be registered here or the production build fails.
      opacity: {
        4: '0.04',
        6: '0.06',
        8: '0.08',
        12: '0.12',
        15: '0.15',
        22: '0.22',
        65: '0.65',
        85: '0.85',
      },
      fontFamily: {
        // Distinctive typography — Fraunces (serif display), Geist (body), Amiri (Arabic serif), Cairo (Arabic body)
        serif: ['Fraunces', 'Amiri', 'serif'],
        sans: ['Geist', 'Cairo', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono"', '"JetBrains Mono"', 'ui-monospace', 'monospace'],
        arabic: ['Amiri', 'serif'],
        'arabic-sans': ['Cairo', 'sans-serif'],
      },
      fontSize: {
        // Editorial scale
        'display-2xl': ['clamp(3.5rem, 8vw, 7rem)', { lineHeight: '0.95', letterSpacing: '-0.04em' }],
        'display-xl': ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1', letterSpacing: '-0.035em' }],
        'display-lg': ['clamp(2rem, 4.5vw, 3.5rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-md': ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
      },
      letterSpacing: {
        'tightest': '-0.04em',
        'mega': '0.18em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'shimmer': 'shimmer 2.5s linear infinite',
        'marquee': 'marquee 40s linear infinite',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
        'scroll-hint': 'scrollHint 1.8s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(0.85)' },
        },
        scrollHint: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.6' },
          '50%': { transform: 'translateY(6px)', opacity: '1' },
        },
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'out-quart': 'cubic-bezier(0.25, 1, 0.5, 1)',
      },
    },
  },
  plugins: [],
}
