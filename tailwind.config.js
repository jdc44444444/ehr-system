module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#007AFF',
        'primary-dark': '#0051D5',
        success: '#34C759',
        warning: '#FF9500',
        danger: '#FF3B30',
      },
      borderRadius: {
        'card': '16px',
      },
      boxShadow: {
        'card': '0 4px 24px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 8px 32px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
}
