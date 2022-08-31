/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customize:{
          bodybackground: "#101216",
          backgroundcolor: "#191B1F",
          backgroundgradient1 : "#1A151B",
          backgroundgradient2 : "#311C21",
          backgroundgradient3 : "#191A2E",
          inputbackgroundcolor: "#3d3d3d",
          textcolor: "#CFCDE5",
          color: "#E6E6FF",
          hover: "#292944",
          bordercolor: "#434257",
          bordercolor2: "#40424a",
          buttoncolor: "#81BAB0",
          buttoncolor2: "#5652E5",
          buttonhovercolor: "#9edbd1",
          buttonhoverbordercolor: "#6aeb72",
          buttonhovertextcolor: "#0b9613",
          circleborder: "#BAEFB2",
        }
      }
    },
  },
  plugins: [],
}
