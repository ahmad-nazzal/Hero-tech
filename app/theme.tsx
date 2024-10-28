import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
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
          fontWeight: "bold",
        },
        heading2: {
          fontSize: { base: "18px", md: "27px", lg: "30px" },
          fontWeight: "semibold",
        },
        heading3: {
          fontSize: { base: "16px", md: "24px", lg: "28px" },
          fontWeight: "medium",
        },
        body1: {
          fontSize: { base: "14px", md: "17px", lg: "19px" },
          fontWeight: "normal",
        },
        body2: {
          fontSize: { base: "15px", md: "18px", lg: "20px" },
          fontWeight: "medium",
        },
      },
    },
  },
});

export default theme;
