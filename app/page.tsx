"use client";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import AboutUs from "../sections/home/AboutUs/AboutUs";
import ContactUs from "../sections/home/ContactUs/ContactUs";
import Quiz from "../sections/home/Quiz/Quiz";

export default function Home() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Quiz></Quiz>
        <AboutUs></AboutUs>
        <ContactUs></ContactUs>
      </ChakraProvider>
    </>
  );
}
