import type { Config } from 'tailwindcss'
import daisyui from 'daisyui'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bright-purple': '#6A0DAD', // Bright purple color for buttons
        'neutral-gray': {
          100: '#E0E0E0', // Light gray
          200: '#C0C0C0', // Medium light gray
          300: '#A0A0A0', // Medium gray
          400: '#808080', // Darker gray
          500: '#606060', // Even darker gray
          600: '#484848', // Dark gray
          700: '#303030', // Very dark gray
          800: '#1A1A1A', // Almost black gray
          900: '#0D0D0D', // Near black gray
        },
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        darkTheme: {
          "primary": "#6A0DAD", // Bright purple for buttons
          "secondary": "#8A2BE2", // Medium purple for secondary elements (BlueViolet)
          "accent": "#BA55D3", // Lighter shade of purple for accents (MediumOrchid)
          "neutral": "#606060", // Use a medium-dark gray for neutral elements
          "base-100": "#181820", // Set the base color to dark background
          "info": "#A0A0A0", // Info color set to medium gray
          "success": "#808080", // Success color set to darker gray
          "warning": "#C0C0C0", // Warning color set to medium light gray
          "error": "#E0E0E0", // Error color set to light gray
          "text": "#FFFFFF", // Text color set to white for contrast
        },
      },
    ],
  },
}

export default config