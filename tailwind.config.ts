import type { Config } from 'tailwindcss'
import { addIconSelectors } from '@iconify/tailwind'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/libs/ui/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
    }
  },
  plugins: [
    addIconSelectors(['mdi'])
  ]
}
export default config
