import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                accent: '#D76060',
                primary: '#8C8C8C',
                secondary: '#C49191',
            },
            gridTemplateRows: {
                '4': 'repeat(4, minmax(0, 0.4fr))',
      },
    },
  },
  plugins: [],
} satisfies Config;
