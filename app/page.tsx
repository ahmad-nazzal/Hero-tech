"use client";
import { ChakraProvider } from "@chakra-ui/react";
import AdComponent from "./components/AdComponent";
import customTheme from "./customTheme";

export default function Home() {
  const date = new Date("2024-10-20T10:00:00");
  const date2 = new Date("2024-10-25T23:59:59");

  return (
    <ChakraProvider theme={customTheme}>
      <AdComponent startDate={date} endDate={date2} />
    </ChakraProvider>
  );
}
