"use client";
import { Box } from "@chakra-ui/react";
import ReviewCard from "./ReviewCard";
import { Navigation, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCardProps from "./ReviewCardProps";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// Import custom styles
import "./ReviewList.css";
import { useEffect, useState } from "react";

const ReviewList = () => {
  useEffect(() => {
    getReviews();
  });
  const [reviews, setReviews] = useState<ReviewCardProps[]>([]);
  async function getReviews() {
    const res = await fetch(
      "https://sitev2.arabcodeacademy.com/wp-json/aca/v1/reviews"
    );
    try {
      const data = await res.json();
      setReviews(data.reviews);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Box width="100%" padding={4}>
      <Swiper
        modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={0}
        navigation
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        style={{
          width: "100%",
          height: "100%",
          paddingLeft: "25px",
          paddingRight: "25px",
        }}
      >
        {reviews.map((user) => (
          <SwiperSlide key={user.id}>
            <ReviewCard
              reviewerName={user.reviewerName}
              reviewerLastName={user.reviewerLastName}
              reviewText={user.reviewText}
              rating={user.rating}
              date={user.date}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default ReviewList;
