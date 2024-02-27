import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "banner-gmr": "url('/banner-gmr.png')",
      },
      colors: {
        "primary-blue": "#3C3E8E",
      },
    },
  },
  plugins: [],
}
export default config
