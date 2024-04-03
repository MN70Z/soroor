/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-color": "#202222",
        gray: {
          "100": "rgba(255, 255, 255, 0.1)",
          "200": "rgba(255, 255, 255, 0.5)",
          "300": "rgba(255, 255, 255, 0.05)",
          "400": "rgba(255, 255, 255, 0.6)",
        },
        "solid-white": "#fff",
        "primary-color": "#398378",
        cadetblue: "#529c91",
        gainsboro: {
          "100": "#e6e6e6",
          "200": "rgba(230, 230, 230, 0.09)",
        },
        dimgray: "#545454",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        "title-header-5-bold": "'Open Sans'",
        jost: "Jost",
        "josefin-sans": "'Josefin Sans'",
        inter: "Inter",
      },
      borderRadius: {
        xl: "20px",
        "3xl": "22px",
      },
    },
    fontSize: {
      base: "16px",
      xl: "20px",
      sm: "14px",
      "13xl": "32px",
      lgi: "19px",
      "7xl": "26px",
      "21xl": "40px",
      "5xl": "24px",
      xs: "12px",
      "37xl": "56px",
      "15xl": "34px",
      "26xl": "45px",
      inherit: "inherit",
    },
    screens: {
      mq1400: {
        raw: "screen and (max-width: 1400px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
