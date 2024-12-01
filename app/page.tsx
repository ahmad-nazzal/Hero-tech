"use client";
import Footer from "../sections/Footer/Footer";
import Hero from "../sections/home/Hero/Hero";
import Header from "../sections/header/header";
import { Service } from "../sections/home/ServiceSection/Service";
import Dad from "../sections/DadSection/Dad";

export default function Home() {
    return (
    <>
      <Header/>
      <Hero></Hero>
      <Service></Service>
      <Dad></Dad>
      <Footer></Footer>
    </>
  );
}
