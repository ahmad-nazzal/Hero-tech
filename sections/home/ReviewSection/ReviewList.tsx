import { Box } from "@chakra-ui/react";
import ReviewCard from "./ReviewCard";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCardProps from "./ReviewCardProps";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// Import custom styles
import "./ReviewList.css";

const ReviewList = () => {
  const usersCardInfo: ReviewCardProps[] = [
    {
      id: 1,
      name: "محمد",
      review: "جودة عالية ومناهج احترافية !شكرا للاكاديمية العربية للبرمجة",
      rating: 2,
      date: "10/10/2022",
    },
    {
      id: 2,
      name: "سليم",
      review: "جودة عالية ومناهج احترافية !شكرا للاكاديمية العربية للبرمجة",
      rating: 3,
      date: "10/10/2022",
    },
    {
      id: 3,
      name: "محمود",
      review: "جودة عالية ومناهج احترافية !شكرا للاكاديمية العربية للبرمجة",
      rating: 5,
      date: "10/10/2022",
    },
    {
      id: 4,
      name: "سلمى",
      review: "جودة عالية ومناهج احترافية !شكرا للاكاديمية العربية للبرمجة",
      rating: 4,
      date: "10/10/2022",
    },
    {
      id: 5,
      name: "دانا",
      review: "جودة عالية ومناهج احترافية !شكرا للاكاديمية العربية للبرمجة",
      rating: 4,
      date: "10/10/2022",
    },
  ];

  return (
    <Box width="100%" padding={4}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        navigation
        pagination={{
          clickable: true,
          dynamicBullets: false,
        }}
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
          paddingBottom: "60px",
          paddingLeft: "25px",
          paddingRight: "25px",
        }}
      >
        {usersCardInfo.map((user) => (
          <SwiperSlide key={user.id}>
            <ReviewCard
              name={user.name}
              review={user.review}
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
