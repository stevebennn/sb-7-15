module.exports = {
  theme: {
    fontFamily: {
      // font stack for fallbacks
      sans: ["Inter", "system-ui"]
    },
    spacing: {
      px: "1px",
      "0": "0",
      "1": "0.25rem",
      "2": "0.5rem",
      "3": "0.75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "8": "2rem",
      "10": "2.5rem",
      "12": "3rem",
      "16": "4rem",
      "20": "5rem",
      "24": "6rem",
      "32": "8rem",
      "40": "10rem",
      "48": "12rem",
      "56": "14rem",
      "64": "16rem",
      "72": "18rem",
      "80": "20rem",
      "88": "22rem",
      "96": "24rem",
      "104": "26rem",
      "112": "28rem",
      "120": "30rem",
      "128": "32rem",
      "136": "34rem",
      "144": "36rem",
      "152": "38rem",
      "160": "40rem"
    },
    minHeight: theme => ({
      "0": "0",
      auto: "auto",
      ...theme("spacing"),
      full: "100%",
      screen: "100vh"
    }),
    extend: {
      colors: {
        // client primary color pallete
        primary: {
          lighter: "#2d3748",
          default: "#1a202c", //ecc94b
          dark: "#e3e"
        },
        // client primary color pallete
        secondary: {
          lighter: "#f6e05e",
          default: "#ecc94b", //1a202c
          dark: "#d69e2e"
        }
      },
      spacing: {
        xl: "10rem",
        lg: "6.25rem",
        md: "4rem",
        sm: "1.5rem",
        xs: ".75rem",
        "2/3": "66.666667%",
        "3/4": "75%",
        "1/2": "50%"
      }
    }
  },
  variants: {},
  plugins: [],
  purge: {
    // Filenames to scan for classes
    content: [
      "./src/**/*.html",
      "./src/**/*.js",
      "./src/**/*.jsx",
      "./src/**/*.ts",
      "./src/**/*.tsx",
      "./public/index.html"
    ],
    // Options passed to PurgeCSS
    options: {
      // Whitelist specific selectors by name
      // whitelist: [],
    }
  }
};
