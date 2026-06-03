import type { Config } from 'tailwindcss'
import tailwindcssAnimate from 'tailwindcss-animate'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary - Midnight Blue
        primary: {
          DEFAULT: '#1D3557',
          hover: '#2A4A6E',
          light: '#3D6A8C',
          50: '#E8EDF2',
          100: '#D1DCE6',
          200: '#A3B9CC',
          300: '#7596B3',
          400: '#477399',
          500: '#1D3557',
          600: '#172A46',
          700: '#112034',
          800: '#0B1523',
          900: '#060B11',
        },
        // Secondary - Steel Blue
        secondary: {
          DEFAULT: '#457B9D',
          hover: '#3A6B8A',
          light: '#6A9CBE',
          50: '#ECF2F6',
          100: '#D9E5ED',
          200: '#B3CBDC',
          300: '#8DB1CA',
          400: '#6797B9',
          500: '#457B9D',
          600: '#37627E',
          700: '#294A5E',
          800: '#1C313F',
          900: '#0E191F',
        },
        // Accent - Amber
        accent: {
          DEFAULT: '#F59E0B',
          hover: '#D97706',
          light: '#FBBF24',
          50: '#FEF3E7',
          100: '#FDE8CF',
          200: '#FBD19F',
          300: '#F9BA6F',
          400: '#F7A33F',
          500: '#F59E0B',
          600: '#C47E09',
          700: '#935F06',
          800: '#623F04',
          900: '#312002',
        },
        // Backgrounds
        background: {
          DEFAULT: '#F1FAEE',
          alt: '#F8FAFC',
          dark: '#0F172A',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          alt: '#F8FAFC',
          dark: '#1E293B',
        },
        // Text colors
        text: {
          primary: '#0F172A',
          secondary: '#475569',
          tertiary: '#64748B',
          disabled: '#94A3B8',
          inverse: '#FFFFFF',
        },
        // Border
        border: {
          DEFAULT: '#E2E8F0',
          light: '#F1F5F9',
          dark: '#334155',
        },
        // Status colors
        success: {
          DEFAULT: '#10B981',
          hover: '#059669',
          light: '#34D399',
        },
        warning: {
          DEFAULT: '#F59E0B',
          hover: '#D97706',
          light: '#FBBF24',
        },
        error: {
          DEFAULT: '#E11D48',
          hover: '#BE123C',
          light: '#FB7185',
        },
        info: {
          DEFAULT: '#3B82F6',
          hover: '#2563EB',
          light: '#60A5FA',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
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
        '128': '128px',
        '160': '160px',
        '192': '192px',
      },
      fontSize: {
        'h1': ['64px', { lineHeight: '120%', fontWeight: '700', letterSpacing: '-0.02em' }],
        'h2': ['48px', { lineHeight: '120%', fontWeight: '700', letterSpacing: '-0.01em' }],
        'h3': ['32px', { lineHeight: '120%', fontWeight: '600' }],
        'h4': ['24px', { lineHeight: '120%', fontWeight: '600' }],
        'h5': ['20px', { lineHeight: '120%', fontWeight: '600' }],
        'body-large': ['18px', { lineHeight: '160%' }],
        'body': ['16px', { lineHeight: '160%' }],
        'body-small': ['14px', { lineHeight: '160%' }],
        'caption': ['12px', { lineHeight: '150%' }],
      },
      borderRadius: {
        'card': '16px',
        'card-lg': '20px',
        'button': '10px',
        'badge': '20px',
        'full': '9999px',
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgb(0 0 0 / 0.05), 0 1px 2px -1px rgb(0 0 0 / 0.05)',
        'card-hover': '0 20px 25px -5px rgb(0 0 0 / 0.08), 0 8px 10px -6px rgb(0 0 0 / 0.05)',
        'card-lg': '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
        'mockup': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'button': '0 2px 4px rgba(0, 0, 0, 0.05)',
        'button-hover': '0 4px 8px rgba(0, 0, 0, 0.1)',
        'glow-primary': '0 0 20px rgba(29, 53, 87, 0.3)',
        'glow-accent': '0 0 20px rgba(245, 158, 11, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-up': 'fadeUp 0.6s ease-out',
        'slide-in': 'slideIn 0.4s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'blob': 'blob 7s infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0px)' },
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #1D3557 0%, #2A4A6E 100%)',
        'cta-gradient': 'linear-gradient(135deg, #1D3557 0%, #457B9D 100%)',
        'accent-gradient': 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
        'grid-pattern': 'radial-gradient(circle at 1px 1px, #E2E8F0 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
      transitionTimingFunction: {
        'bounce-out': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [tailwindcssAnimate],
}

export default config