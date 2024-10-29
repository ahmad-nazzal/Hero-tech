"use client";
import { ChakraProvider , Box } from "@chakra-ui/react";
import DiscountBanner from "./components/DiscountBanner";
import theme from "./theme";
import Footer from "./components/Footer";

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
        <Footer />
        </Box>
      </ChakraProvider>
    </>
  );
}
