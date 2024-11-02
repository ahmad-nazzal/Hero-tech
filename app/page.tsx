"use client";
import AdComponent from "./components/AdComponent";
import HomePage from "./(home)/page";
export default function Home() {
  const date = new Date("2024-10-20T10:00:00");
  const date2 = new Date("2024-11-25T23:59:59");
  return (
    <>
      <AdComponent
        startDate={date}
        endDate={date2}
        adText="خصومات بنسبة 20% على الكورسات"
      />
      <HomePage/>
    </>
  );
}
