"use client";
import DiscountBanner from "./components/DiscountBanner";

export default function Home() {
  const startDate = "2024-10-20T10:00:00";
  const endDate = "2024-10-25T23:59:59";

  return (
    <>
      <DiscountBanner
        startDate={startDate}
        endDate={endDate}
        promotionMessage="خصومات بنسبة 20% على الكورسات"
      />
    </>
  );
}
