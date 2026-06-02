// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1D3557',   // Midnight Blue
          hover: '#2A4A6E',
          light: '#3D6A8C',
        },
        secondary: {
          DEFAULT: '#457B9D',   // Steel Blue
          hover: '#3A6B8A',
          light: '#6A9CBE',
        },
        accent: {
          DEFAULT: '#F59E0B',   // Amber
          hover: '#D97706',
          light: '#FBBF24',
        },
        background: '#F1FAEE',   // Cool off-white
        surface: '#FFFFFF',
        text: {
          primary: '#0F172A',
          secondary: '#475569',
          tertiary: '#64748B',
        },
        border: '#E2E8F0',
        success: '#10B981',
        warning: '#F59E0B',
        error: '#E11D48',
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '4': '4px',
        '8': '8px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '48': '48px',
        '64': '64px',
        '96': '96px',
        '120': '120px',
      },
      fontSize: {
        'h1': ['64px', { lineHeight: '120%', fontWeight: '700' }],
        'h2': ['48px', { lineHeight: '120%', fontWeight: '700' }],
        'h3': ['32px', { lineHeight: '120%', fontWeight: '600' }],
        'h4': ['24px', { lineHeight: '120%', fontWeight: '600' }],
        'body-large': ['18px', { lineHeight: '160%' }],
        'body': ['16px', { lineHeight: '160%' }],
        'body-small': ['14px', { lineHeight: '160%' }],
      },
      borderRadius: {
        'card': '16px',
        'button': '10px',
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgb(0 0 0 / 0.05), 0 1px 2px -1px rgb(0 0 0 / 0.05)',
        'card-hover': '0 20px 25px -5px rgb(0 0 0 / 0.05), 0 8px 10px -6px rgb(0 0 0 / 0.05)',
        'mockup': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}

export default config