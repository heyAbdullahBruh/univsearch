/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          pink: "#FFB3C6",
          pinkDeep: "#FF6B9D",
          green: "#52B788",
          greenDark: "#1B4332",
          blue: "#4895EF",
          blueDark: "#1A2A6C",
        },
        surface: { light: "#FFF5F7", card: "#FFFFFF", border: "#FFD6E0" },
        dark: { page: "#0D1B0F", card: "#1B4332", border: "#2D6A4F" },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', "monospace"],
        display: ['"Space Mono"', '"Courier New"', "monospace"],
      },
      animation: {
        "fade-up": "fadeUp 0.5s ease forwards",
        "slide-in": "slideIn 0.4s ease forwards",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
        shimmer: "shimmer 1.8s linear infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: 0, transform: "translateY(24px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        slideIn: {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
        glowPulse: {
          "0%,100%": { boxShadow: "0 0 8px #FF6B9D55" },
          "50%": { boxShadow: "0 0 24px #FF6B9DAA" },
        },
        shimmer: {
          from: { backgroundPosition: "-200% 0" },
          to: { backgroundPosition: "200% 0" },
        },
      },
      backdropBlur: { xs: "2px" },
      boxShadow: {
        "card-light": "0 2px 24px 0 rgba(255,107,157,0.10)",
        "card-dark": "0 2px 24px 0 rgba(82,183,136,0.12)",
        "glow-pink": "0 0 20px rgba(255,107,157,0.35)",
        "glow-green": "0 0 20px rgba(82,183,136,0.35)",
      },
    },
  },
  plugins: [],
};
