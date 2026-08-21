import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: '#05070F',
        primary: '#2563EB',
        accent: '#38BDF8',
        support: '#9CA3AF',
      },
      boxShadow: {
        glow: '0 0 40px rgba(37, 99, 235, 0.45)',
        neon: '0 0 25px rgba(56, 189, 248, 0.45)',
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
        aurora: 'radial-gradient(circle at top left, rgba(37,99,235,0.4), transparent 30%), radial-gradient(circle at bottom right, rgba(56,189,248,0.25), transparent 35%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' }
        },
        drift: {
          '0%, 100%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(12px,-18px,0)' }
        }
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        drift: 'drift 16s ease-in-out infinite',
      }
    }
  },
  plugins: [],
};

export default config;
