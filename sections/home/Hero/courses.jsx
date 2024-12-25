// this code Fetches courses data asynchronously from an API and stores it in the local state.
import React, { useState, useEffect } from "react";
import ButtonAC from "../../../components/ButtonAC";
import Loading from "./loading";
import mazedlogo from "../../../public/images/circled_outline.png";
import paylogo from "../../../public/images/cart_icon.png";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CustomCard from "../../../components/CustomCard";
import { Tooltip } from "@chakra-ui/react";
import { Text, Box, Grid, GridItem } from "@chakra-ui/react";
import "./hero.css";
 const Courses = () => {
   const [data, setData] = useState(null);
   const [loading, setLoading] = useState(true);
   const [slidesPerView, setSlidesPerView] = useState(1);
   const [showWhiteLayer, setShowWhiteLayer] = useState(true);
   useEffect(() => {
     const fetchData = async () => {
       try {
         const response = await fetch(
           "https://sitev2.arabcodeacademy.com/wp-json/aca/v1/courses"
         );
         const result = await response.json();
         const formattedData = result.courses.map((course) => ({
           id: course.id,
           name: course.title,
           price: `$${course.price}`,
           image: course.imageURL,
           duration: `${course.total_videos} فيديو، ${course.total_duration}`,
           trainer: course.trainers
             .filter((trainer) => trainer.leader)
             .map((trainer) => `${trainer.first_name} ${trainer.last_name}`)
             .join(", "),
           description: `السعر الأصلي: ${course.original_price} ${course.currency}`,
           level: "غير محدد",
           isComingSoon: course.status === "coming_soon",
         }));
         setData(formattedData);
       } catch (error) {
         console.error("خطأ أثناء جلب البيانات:", error);
       } finally {
         setLoading(false);
       }
     };
 
     fetchData();
   }, []);
 
   useEffect(() => {
     const updateSlidesPerView = () => {
       const width = window.innerWidth;
       if (width >= 2200) {
         setSlidesPerView(5);
        } else if (width >= 1740) {
          setSlidesPerView(4);
        } else if (width >= 1380) {
          setSlidesPerView(3);
        } else if (width >= 1030) {
          setSlidesPerView(2);
        } else {
          setSlidesPerView(1);
        }
      };
      updateSlidesPerView();
      window.addEventListener("resize", updateSlidesPerView);
      return () => {
        window.removeEventListener("resize", updateSlidesPerView);
      };
    }, []);
  
    const handleSlideChange = (swiper) => {
      if (swiper.activeIndex > 0) {
        setShowWhiteLayer(false);
      } else {
        setShowWhiteLayer(true);
      }
    };
  
    if (loading) return <Loading />;
    return (
      <Box
        marginBottom={112}
        paddingTop={2}
        paddingBottom={2}
        paddingLeft={3}
        marginLeft="31px"
        marginRight="67px"
      >
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween="-200px"
          navigation={true}
          onSlideChange={handleSlideChange}
          breakpoints={{
           320: {
             slidesPerView: 1,
           },
           1030: {
             slidesPerView: 2,
           },
           1380: {
             slidesPerView: 3,
           },
           1740: {
             slidesPerView: 4,
           },
           2200: { slidesPerView: 5 },
         }}
       >
        {data &&
          data
            .filter((item) => item.isComingSoon === false)
            .map((item, index) => (
              <SwiperSlide
                key={item.id}
                style={{
                  width: "300px",
                  marginRight: index === 0 ? "115px" : "0",
                  position: "relative",
                }}
              >
                <CustomCard
                  title={
                    <Tooltip label={item.name} aria-label="Full Title">
                      <span>
                        {item.name.length > 15
                          ? `${item.name.slice(0, 15)}...`
                          : item.name}
                      </span>
                    </Tooltip>
                  }
                  price={item.price}
                  trainerName={item.trainer}
                  duration={item.duration}
                  imageSrc="/images/85ec0a9778292af7f20d1502a6ed0702.png"
                  applyFilter={true}
                  buttons={[
                    <ButtonAC
                      key="read-more"
                      borderRadius="6px"
                      mb="30px"
                      color="white"
                      bg="secondary"
                      text="اقرأ المزيد"
                      icon={mazedlogo}
                      sx={{
                        width: "143px",
                        height: "44px",
                        fontWeight: "normal",
                        fontSize: "17px",
                      }}
                    />,
                    <ButtonAC
                      key="buy"
                      borderRadius="6px"
                      alignSelf="center"
                      mb="30px"
                      //  sizeVariant="lg"
                      color="white"
                      bg="tomato"
                      text="شراء"
                      icon={paylogo}
                      sx={{
                        width: "143px",
                        height: "44px",
                        fontWeight: "normal",
                        fontSize: "17px",
                      }}
                    />,
                  ]}
                />
                {showWhiteLayer && index === slidesPerView && (
                  <Box
                    position="absolute"
                    top="0"
                    left="0"
                    right="0"
                    bottom="0"
                    backgroundColor="white"
                    pointerEvents="none"
                    marginRight={-5}
                  />
                )}
              </SwiperSlide>
            ))}
      </Swiper>

      <Grid templateColumns="repeat(4, 1fr)" gap="4">
        <GridItem colSpan={1}>
          <Text
            className="recommended"
            marginRight="170px"
            marginBottom="69px"
            paddingTop="40px"
            color="#713488"
            borderBottom="2px solid #713488"
            width="70px"
            fontWeight="bold"
            fontSize="27px"
          >
            قريباً{" "}
          </Text>
        </GridItem>

        <GridItem colSpan={3}></GridItem>
      </Grid>

      <Box marginBottom={112} paddingTop={2} paddingBottom={2} paddingLeft={3}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween="-200px"
          navigation={true}
          onSlideChange={handleSlideChange}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            1030: {
              slidesPerView: 2,
            },
            1380: {
              slidesPerView: 3,
            },
            1740: {
              slidesPerView: 4,
            },
            2200: { slidesPerView: 5 },
          }}
        >
          {data &&
            data
              .filter((item) => item.isComingSoon === true)
              .map((item, index) => (
                <SwiperSlide
                  key={item.id}
                  style={{
                    width: "300px",
                    marginRight: index === 0 ? "115px" : "0",
                    position: "relative",
                  }}
                >
                  <CustomCard
                    title={
                      <Tooltip label={item.name} aria-label="Full Title">
                        <span>
                          {item.name.length > 15
                            ? `${item.name.slice(0, 15)}...`
                            : item.name}
                        </span>
                      </Tooltip>
                    }
                    price={item.price}
                    trainerName={item.trainer}
                    duration={item.duration}
                    imageSrc="/images/85ec0a9778292af7f20d1502a6ed0702.png"
                    applyFilter={true}
                    buttons={[
                      <ButtonAC
                        key="read-more"
                        borderRadius="6px"
                        mb="30px"
                        color="white"
                        bg="secondary"
                        text="اقرأ المزيد"
                        icon={mazedlogo}
                        sx={{
                          width: "143px",
                          height: "44px",
                          fontWeight: "normal",
                          fontSize: "17px",
                        }}
                      />,
                      <ButtonAC
                        key="buy"
                        borderRadius="6px"
                        alignSelf="center"
                        mb="30px"
                        color="white"
                        bg="tomato"
                        text="شراء"
                        icon={paylogo}
                        sx={{
                          width: "143px",
                          height: "44px",
                          fontWeight: "normal",
                          fontSize: "17px",
                        }}
                      />,
                    ]}
                  />
                  {showWhiteLayer && index === slidesPerView && (
                    <Box
                      position="absolute"
                      top="0"
                      left="0"
                      right="0"
                      bottom="0"
                      backgroundColor="white"
                      pointerEvents="none"
                      marginRight={-5}
                    />
                  )}
                </SwiperSlide>
              ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default Courses;
