"use client";
import { ChakraProvider, Box } from "@chakra-ui/react";
import DiscountBanner from "../sections/DiscountBanner/DiscountBanner";
import theme from "./theme";
import AboutUs from "../sections/home/AboutUs/AboutUs";
import ContactUs from "../sections/home/ContactUs/ContactUs";
import ReviewList from "../sections/home/ReviewSection/ReviewList";
import Footer from "../sections/Footer/Footer";
import Hero from "../sections/home/Hero/Hero";
export default function Home() {
  const startDate = "2024-10-20T10:00:00";
  const endDate = "2024-10-25T23:59:59";

  return (
    <>
      <ChakraProvider theme={theme}>
        <Box dir={"rtl"}>
          <DiscountBanner
            startDate={startDate}
            endDate={endDate}
            promotionMessage="خصومات بنسبة 20% على الكورسات"
          />
        </Box>
        <Hero></Hero>
        <AboutUs></AboutUs>
        <ContactUs></ContactUs>
        <ReviewList></ReviewList>
        <Footer></Footer>
      </ChakraProvider>
    </>
  );
}
