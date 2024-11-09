"use client";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import AboutUs from "../sections/home/AboutUs/AboutUs";
import ContactUs from "../sections/home/ContactUs/ContactUs";
import Quiz from "../sections/home/Quiz/Quiz";
import Header from "../sections/header/header";

export default function Home() {

  const startDate = "2024-10-20T10:00:00";
  const endDate = "2024-11-25T23:59:59";

  return (
    <>
      <ChakraProvider theme={theme}>
        
        <Box dir={"rtl"} >
          <DiscountBanner
            startDate={startDate}
            endDate={endDate}
            promotionMessage="خصومات بنسبة 20% على الكورسات"
          />
        </Box>
        <Header />
        <Hero></Hero>
        <Quiz></Quiz>
        <AboutUs></AboutUs>
        <ContactUs></ContactUs>
      </ChakraProvider>
    </>
  );
}
