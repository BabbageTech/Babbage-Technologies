import type { Config } from "tailwindcss";

/**
 * Reference / compatibility config for tooling that expects a
 * tailwind.config.ts (editor extensions, future v3 migration, etc).
 *
 * NOT loaded by the build. This project uses Tailwind v4, where the
 * source of truth is the `@theme` block in app/globals.css — that's
 * what `next build` actually reads via @tailwindcss/postcss. The
 * values below are kept in sync with that file by hand.
 *
 * If you want this file active instead, add
 *   @config "../tailwind.config.ts";
 * near the top of app/globals.css — but first delete the matching
 * tokens from the @theme block there, or the two will fight.
 */
const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Ink — dark surfaces / primary
        ink: {
          DEFAULT: "#14171A",
          soft: "#1D2124",
          line: "#2D3237",
          50: "#F2F2F1",
          100: "#E1E2E0",
          200: "#C3C5C1",
          300: "#9A9D97",
          400: "#6B6F68",
          500: "#14171A",
          600: "#101215",
          700: "#0C0E10",
          800: "#08090A",
          900: "#040505",
        },
        // Paper — light surfaces / background
        paper: {
          DEFAULT: "#ECE7DB",
          dim: "#E1DCCB",
          line: "#D2CAAE",
        },
        // Brass — primary accent
        brass: {
          DEFAULT: "#A97C3F",
          hover: "#8F6631",
          bright: "#CF9F56",
          50: "#FAF4EA",
          100: "#F1E3C9",
          200: "#E3C797",
          300: "#D5AB65",
          400: "#C79642",
          500: "#A97C3F",
          600: "#8F6631",
          700: "#6E4E26",
          800: "#4D371A",
          900: "#2C1F0F",
        },
        // Verdigris — secondary accent (oxidised copper)
        verdigris: {
          DEFAULT: "#3E6259",
          hover: "#345249",
          bright: "#598C7F",
          50: "#EAF1EF",
          100: "#CBDEDA",
          200: "#9DBEB5",
          300: "#6F9E90",
          400: "#547E71",
          500: "#3E6259",
          600: "#345249",
          700: "#28403A",
          800: "#1B2C27",
          900: "#0E1714",
        },
        // Backgrounds / surfaces (aliases used by shadcn-style primitives)
        primary: {
          DEFAULT: "#14171A",
          hover: "#1D2124",
          light: "#2D3237",
          foreground: "#EFECE3",
        },
        secondary: {
          DEFAULT: "#3E6259",
          hover: "#345249",
          light: "#598C7F",
          foreground: "#EFECE3",
        },
        accent: {
          DEFAULT: "#A97C3F",
          hover: "#8F6631",
          light: "#CF9F56",
          foreground: "#EFECE3",
        },
        background: {
          DEFAULT: "#ECE7DB",
          alt: "#E1DCCB",
          dark: "#14171A",
        },
        surface: {
          DEFAULT: "#F6F3EA",
          alt: "#E1DCCB",
          dark: "#1D2124",
        },
        text: {
          primary: "#16181B",
          secondary: "#5C584C",
          tertiary: "#8B8778",
          faint: "#8B8778",
          disabled: "#A7AC9E",
          inverse: "#EFECE3",
        },
        border: {
          DEFAULT: "#D2CAAE",
          light: "#E1DCCB",
          dark: "#2D3237",
        },
        // Status colours, kept in the brand palette rather than
        // generic traffic-light tones
        success: {
          DEFAULT: "#3E6259",
          hover: "#345249",
          light: "#598C7F",
        },
        warning: {
          DEFAULT: "#A97C3F",
          hover: "#8F6631",
          light: "#CF9F56",
        },
        error: {
          DEFAULT: "#A3402F",
          hover: "#8A3527",
          light: "#C76B56",
        },
        info: {
          DEFAULT: "#3E6259",
          hover: "#345249",
          light: "#598C7F",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
        heading: ["Fraunces", "Georgia", "serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "monospace"],
      },
      spacing: {
        "4": "4px",
        "8": "8px",
        "16": "16px",
        "24": "24px",
        "32": "32px",
        "48": "48px",
        "64": "64px",
        "96": "96px",
        "120": "120px",
        "128": "128px",
        "160": "160px",
        "192": "192px",
      },
      fontSize: {
        h1: ["64px", { lineHeight: "108%", fontWeight: "600", letterSpacing: "-0.01em" }],
        h2: ["48px", { lineHeight: "110%", fontWeight: "600", letterSpacing: "-0.01em" }],
        h3: ["32px", { lineHeight: "115%", fontWeight: "600" }],
        h4: ["24px", { lineHeight: "120%", fontWeight: "600" }],
        h5: ["20px", { lineHeight: "125%", fontWeight: "600" }],
        "body-large": ["18px", { lineHeight: "160%" }],
        body: ["16px", { lineHeight: "160%" }],
        "body-small": ["14px", { lineHeight: "160%" }],
        caption: ["12px", { lineHeight: "150%" }],
      },
      borderRadius: {
        card: "4px",
        "card-lg": "6px",
        button: "3px",
        badge: "3px",
      },
      boxShadow: {
        card: "0 1px 0 0 rgba(20, 23, 26, 0.06)",
        "card-hover": "0 6px 24px -8px rgba(20, 23, 26, 0.28)",
        "card-lg": "0 20px 50px -20px rgba(20, 23, 26, 0.35)",
        button: "0 1px 0 0 rgba(20, 23, 26, 0.15)",
        "button-hover": "0 3px 10px -2px rgba(20, 23, 26, 0.25)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "fade-up": "fadeUp 0.6s ease-out",
        "slide-in": "slideIn 0.4s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spinSlow 20s linear infinite",
        "spin-slow-reverse": "spinSlowReverse 26s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { transform: "translateX(-20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        float: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0px)" },
        },
        spinSlow: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        spinSlowReverse: {
          from: { transform: "rotate(360deg)" },
          to: { transform: "rotate(0deg)" },
        },
      },
      backgroundImage: {
        "grid-pattern": "radial-gradient(circle at 1px 1px, #D2CAAE 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      transitionTimingFunction: {
        "bounce-out": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
