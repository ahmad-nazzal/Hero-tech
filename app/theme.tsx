import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  breakpoints: {
    sm: "30em", // 480px
    md: "64em", // 1024px
    lg: "80em", // 1280px
    xl: "90em", // 1440px
    "2xl": "120em", // 1920px
  },
  colors: {
    primary: "#462576", // Tekhelet
    secondary: "#00BE98", // Turquoise
    white: "#fff",
    grape: "#783BA2",
    tomato: "#FF6542",
    lightBeige: "#EADAC1",
  },
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Roboto, sans-serif",
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
  },
  components: {
    Text: {
      // Add text styles to the Text component
      variants: {
        heading1: {
          fontSize: { base: "20px", md: "40px", lg: "50px" },
          fontWeight: "700",
        },
        heading2: {
          fontSize: { base: "18px", md: "27px", lg: "30px" },
          fontWeight: "700",
        },
        heading3: {
          fontSize: { base: "16px", md: "24px", lg: "28px" },
          fontWeight: "500",
        },
        body1: {
          fontSize: { base: "14px", md: "17px", lg: "19px" },
          fontWeight: "500",
        },
        body2: {
          fontSize: { base: "15px", md: "18px", lg: "20px" },
          fontWeight: "500",
        },
      },
    },
  },
});

export default theme;
