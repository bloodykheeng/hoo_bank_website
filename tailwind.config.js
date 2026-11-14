/** @type {import('tailwindcss').Config} */
// Colours are the admin dashboard's (pesa_nextjs_admin app/globals.css), as CSS variables in src/index.css so
// one class works in light and dark ("dark" class on <html>, set by src/theme.js).
const v = (name) => `rgb(var(--${name}) / <alpha-value>)`;

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: v("bg"),
        "bg-deep": v("bg-deep"),
        card: v("card"),
        ink: v("ink"),
        muted: v("muted"),
        faint: v("faint"),
        line: v("line"),
        brand: {
          DEFAULT: v("brand"),
          mid: v("brand-mid"),
          ink: v("brand-ink"),
          deep: v("brand-deep"),
          soft: v("brand-soft"),
        },
        amber: {
          DEFAULT: v("amber"),
          ink: v("amber-ink"),
          soft: v("amber-soft"),
        },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', "Figtree", "system-ui", "sans-serif"],
        sans: ["Figtree", "system-ui", "-apple-system", '"Segoe UI"', "Roboto", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "Consolas", "monospace"],
      },
      maxWidth: { page: "76rem" },
      keyframes: {
        rise: { from: { opacity: "0", transform: "translateY(14px)" }, to: { opacity: "1", transform: "none" } },
        ride: { from: { transform: "scaleX(0)" }, to: { transform: "scaleX(1)" } },
        ping2: { "75%, 100%": { transform: "scale(2.2)", opacity: "0" } },
      },
      animation: {
        rise: "rise .7s cubic-bezier(.2,.7,.2,1) both",
        ping2: "ping2 1.6s cubic-bezier(0,0,.2,1) infinite",
      },
    },
  },
  plugins: [],
};
