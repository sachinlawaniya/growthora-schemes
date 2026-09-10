/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#f97316", // Orange 500
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
          dark: "#ea580c",
          accent: "#d97706",
          soft: "#fff7ed",
          soft2: "#ffedd5",
        },
        navy: {
          DEFAULT: "#0D1836",
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#070D1E",
        },
        ink: {
          DEFAULT: "#0f172a",
          light: "#334155",
          muted: "#64748b",
        },
        borderLight: "#e2e8f0",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Bricolage Grotesque', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'brand-glow': '0 10px 25px -3px rgba(249, 115, 22, 0.25)',
        'card-soft': '0 4px 20px rgba(13, 24, 54, 0.05)',
        'card-hover': '0 16px 36px rgba(13, 24, 54, 0.08)',
      }
    },
  },
  plugins: [],
}
