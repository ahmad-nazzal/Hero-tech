"use client";
import DiscountBanner from "../sections/DiscountBanner/DiscountBanner";
import AboutUs from "../sections/home/AboutUs/AboutUs";
import ContactUs from "../sections/home/ContactUs/ContactUs";
import ReviewList from "../sections/home/ReviewSection/ReviewList";
import Footer from "../sections/Footer/Footer";
import Hero from "../sections/home/Hero/Hero";

import Quiz from "../sections/home/Quiz/Quiz";

import { Box } from "@chakra-ui/react";
import { Service } from "../sections/home/ServiceSection/Service";
import Dad from "../sections/DadSection/Dad";

export default function Home() {
  const startDate = "2024-10-20T10:00:00";
  const endDate = "2024-11-25T23:59:59";

  return (
    <>
      <Box dir={"rtl"}>
        <DiscountBanner
          startDate={startDate}
          endDate={endDate}
          promotionMessage="خصومات بنسبة 20% على الكورسات"
        />
      </Box>
      <Hero></Hero>
      <Service></Service>
      <Dad></Dad>

      <Quiz></Quiz>
      <AboutUs></AboutUs>
      <ContactUs></ContactUs>
      <ReviewList></ReviewList>
      <Footer></Footer>
    </>
  );
}
