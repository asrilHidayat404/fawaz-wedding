export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0000ff', // ganti dengan kode warna utama yang Anda inginkan
        // Anda bisa menambah warna kustom lainnya di sini
        secondary: '#282828',
        optional: "#eaeaea"
      },
    },

  },
  plugins: [],
}