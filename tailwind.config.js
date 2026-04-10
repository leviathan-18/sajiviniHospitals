/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        hospital: {
          blue: "#194555",
          berry: "#AD3048",
          coral: "#F37D79",
          mint: "#A3D3CC"
        }
      }
    }
  },
  plugins: []
};
