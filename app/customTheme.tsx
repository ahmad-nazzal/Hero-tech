import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  fonts: {
    heading: "Arial, sans-serif",
    body: "Roboto, sans-serif",
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "17px",
    lg: "20px",
    xl: "30px",
  },
  colors: {
    primary: "#462576",
    secondary: "#00BE98",
    white: "#fff",
    grape: "#783BA2",
    tekhelet: "#462576",
    turquoise: "#00BE98",
    tomato: "#FF6542",
    lightBeige: "#EADAC1",
  },
  components: {
    Text: {
      variants: {
        heading1: {
          fontSize: { base: "20px", md: "40px", lg: "50px" },
          fontWeight: "bold",
        },
        heading2: {
          fontSize: { base: "18px", md: "27px", lg: "30px" },
          fontWeight: "semibold",
        },
        body1: {
          fontSize: { base: "14px", md: "17px", lg: "19px" },
        },
        body2: {
          fontSize: { base: "15px", md: "18px", lg: "20px" },
        },
      },
    },
  },
});

export default customTheme;
