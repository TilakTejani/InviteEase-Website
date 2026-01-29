/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'inviteease-primary': 'rgba(15, 118, 110, 1)',
        'inviteease-primaryLight': 'rgba(20, 184, 166, 1)',
        'inviteease-primaryDark': 'rgba(13, 90, 82, 1)',
        'inviteease-secondary': 'rgba(71, 85, 105, 1)',
        'inviteease-warning': 'rgba(245, 158, 11, 1)',
        'inviteease-warningLight': 'rgba(251, 191, 36, 1)',
        'inviteease-text': 'rgba(30, 41, 59, 1)',
        'inviteease-textSecondary': 'rgba(100, 116, 139, 1)',
        'inviteease-bgDefault': 'rgba(248, 250, 252, 1)',
        'inviteease-bgLight': 'rgba(241, 245, 249, 1)',
        'inviteease-border': 'rgba(226, 232, 240, 1)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, rgba(15, 118, 110, 1) 0%, rgba(34, 197, 94, 1) 100%)',
        'gradient-warning': 'linear-gradient(135deg, rgba(245, 158, 11, 1) 0%, rgba(251, 191, 36, 1) 100%)',
        'gradient-main': 'linear-gradient(135deg, rgba(241, 245, 249, 1) 0%, rgba(248, 250, 252, 1) 50%, rgba(241, 245, 249, 1) 100%)',
        'gradient-appbar': 'linear-gradient(135deg, rgba(248, 250, 252, 0.95) 0%, rgba(255, 255, 255, 0.95) 50%, rgba(241, 245, 249, 0.95) 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'float-slow': 'ambient-float 10s ease-in-out infinite',
        'tropical-glow': 'tropical-glow 2s infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'ambient-float': {
          '0%, 100%': { transform: 'rotate(25deg) translateY(0px)' },
          '50%': { transform: 'rotate(25deg) translateY(-40px)' },
        },
        'tropical-glow': {
          '0%': { boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.2)' },
          '100%': { boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.5)' },
        }
      }
    },
  },
  plugins: [],
}
