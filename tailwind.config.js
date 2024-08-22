/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobileS: "320px",
      mobileM: "375px",
      mobileL: "425px",
      tablet: "768px",
      laptop: "1024px",
      laptopL: "1440px",
      laptopXl: "1920px",
      laptop4k: "2560px",
    },
    extend: {
      fontWeight: {
        medium: "600",
      },
      width: {
        mobile: "80vw",
        mobileL: "82vw",
        tablet: "90vw",
      },
      height: {
        mobile: "80vh",
        mobileL: "82vh",
        tablet: "90vh",
      },
      colors: {
        offWhite: "#f2f1f0",
        grayWhite: "#f8f8f8",
        lightGray: "#eaeaea",
        gray: "#dddd",
        darkGray: "#575757",
        orangeTheme: "#FF924B",
        powderBlue: "#72A7FF",
        red: "#FF4B34",
        purple: "#8A2BE2",
        yellow: "#FFF52B",
        pink: "#FF91DA",
        green: "#1E8449",
        filed: "#967BB6",
        approved: "#1E8449",
        containerBg: "#EDECF2",
      },
      zIndex: {
        999999: "999999",
        99999: "99999",
        9999: "9999",
        999: "999",
        99: "99",
        9: "9",
        1: "1",
      },
    },
  },
  plugins: [],
};
