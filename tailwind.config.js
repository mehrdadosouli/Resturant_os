/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      morabbaLight: "morabbaLight",
      morabbaMedium: "morabbaMedium",
      morabbaBold: "morabbaBold",
    },
    extend: {
      colors: {
        primary_bg_btn: "rgba(0, 0, 0, 0.1)",
        primary_blue_light_0: "rgb(231, 250, 254,0)",
        primary_blue_light_100: "rgba(231, 250, 254, 1)",
        color1_category_f: "rgba(112, 130, 70, 0)",
        color1_category_t: "rgba(112, 130, 70, 10%)",
        color_category_f: "rgba(0, 0, 0, 0)",
        color_category_t: "rgba(0, 0, 0, 5%)",
        color3_category_f: "rgba(0, 0, 0, 0)",
        color3_category_t: "rgba(0, 0, 0, 5%)",
        color4_category_f: "rgba(240, 158, 0, 0)",
        color4_category_t: "rgba(240, 158, 0, 10%)",
        color5_category_f: "rgba(204, 38, 27, 0)",
        color5_category_t: "rgba(204, 38, 27, 10%)",
        color6_category_f: "rgba(108, 198, 63, 0)",
        color6_category_t: "rgba(108, 198, 63, 10%)",
        primary_lighten: "#rgba(0, 0, 0, 60%)",
        primary_Dark_Text: "#F9F9F9",
        primary_Dark_background: "#121212",
      },
    },
  },
  plugins: [],
};
