import React from "react";
import ButtonAC from "../../../components/ButtonAC";

import mazedlogo from "../../../public/images/circled_outline.png";
import paylogo from "../../../public/images/cart_icon.png";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CustomCard from "../../../components/CustomCard";
import { Tooltip } from "@chakra-ui/react";

import { Text, Box, Grid, GridItem } from "@chakra-ui/react";

const Courses = () => {
  const data = [
    {
      id: 1,
      name: "دورة بايثون المتقدمة",
      price: "$30",
      image: "./images/7c8b39cf40000f1df8cf455fa1a43cd3.png",
      duration: "40 فيديو، 30 ساعة و 20 دقيقة",
      trainer: "محمود يوسف",
      description:
        "تعلم مهارات متقدمة في لغة بايثون بما في ذلك تحليل البيانات وبناء التطبيقات.",
      level: "متقدم",
      isComingSoon: false,
    },
    {
      id: 2,
      name: "دورة تطوير تطبيقات iOS باستخدام Swift",
      price: "$35",
      image: "./images/85ec0a9778292af7f20d1502a6ed0702.png",
      duration: "48 فيديو، 27 ساعة و 15 دقيقة",
      trainer: "ليلى فؤاد",
      description:
        "أساسيات تطوير التطبيقات للآيفون باستخدام لغة Swift من البداية حتى نشر التطبيق.",
      level: "متوسط",
      isComingSoon: false,
    },
    {
      id: 3,
      name: "دورة علوم البيانات باستخدام Python",
      price: "$50",
      image: "./images/73cc5aa029afdcdb49d30ce957150dec.png",
      duration: "60 فيديو، 45 ساعة و 10 دقائق",
      trainer: "أيمن جابر",
      description:
        "تعلّم كيفية استخدام بايثون لتحليل البيانات وتطبيقات التعلم الآلي.",
      level: "متقدم",
      isComingSoon: false,
    },
    {
      id: 4,
      name: "دورة التحليل الإحصائي باستخدام R",
      price: "$32",
      image: "./images/85ec0a9778292af7f20d1502a6ed0702.png",
      duration: "38 فيديو، 26 ساعة و 15 دقيقة",
      trainer: "رانيا سمير",
      description:
        "تعلّم التحليل الإحصائي باستخدام لغة R وتحليل البيانات الإحصائية.",
      level: "متوسط",
      isComingSoon: false,
    },
    {
      id: 5,
      name: "دورة أساسيات البرمجة باستخدام JavaScript",
      price: "$20",
      image: "./images/85ec0a9778292af7f20d1502a6ed0702.png",
      duration: "30 فيديو، 20 ساعة",
      trainer: "سامي القاضي",
      description: "مدخل إلى البرمجة باستخدام JavaScript للمبتدئين.",
      level: "مبتدئ",
      isComingSoon: false,
    },
    {
      id: 6,
      name: "دورة أساسيات البرمجة الكائنية باستخدام C++",
      price: "$28",
      image: "./images/7c8b39cf40000f1df8cf455fa1a43cd3.png",
      duration: "35 فيديو، 25 ساعة",
      trainer: "منى الحسن",
      description: "تعلم أساسيات البرمجة الكائنية باستخدام لغة C++.",
      level: "مبتدئ",
      isComingSoon: false,
    },
    {
      id: 7,
      name: "دورة تطوير واجهات المستخدم المتقدمة باستخدام Angular",
      price: "$45",
      image: "./images/85ec0a9778292af7f20d1502a6ed0702.png",
      duration: "65 فيديو، 50 ساعة",
      trainer: "عبد الله سعيد",
      description: "تقنيات متقدمة في بناء واجهات المستخدم باستخدام Angular.",
      level: "متقدم",
      isComingSoon: false,
    },
    {
      id: 8,
      name: "دورة الذكاء الاصطناعي",
      price: "$40",
      image: "./images/73cc5aa029afdcdb49d30ce957150dec.png",
      duration: "55 فيديو، 42 ساعة",
      trainer: "هالة محمد",
      description: "مقدمة إلى الذكاء الاصطناعي وكيفية بناء نماذج تعلم الآلة.",
      level: "متقدم",
      isComingSoon: false,
    },
    {
      id: 9,
      name: "دورة Ruby المتقدمة",
      price: "$40",
      image: "./images/73cc5aa029afdcdb49d30ce957150dec.png",
      duration: "52 فيديو، 24 ساعة و 45 دقيقة",
      trainer: "أحمد الشاذلي",
      description: "تعلم مهارات متقدمة في تطوير البرمجيات باستخدام Ruby.",
      level: "متقدم",
      isComingSoon: true,
    },
    {
      id: 10,
      name: "دورة Bootstrap لتصميم الواجهات",
      price: "$25",
      image: "./images/bootStrap.png",
      duration: "52 فيديو، 24 ساعة و 45 دقيقة",
      trainer: "خالد محمود",
      description:
        "كيفية استخدام Bootstrap لإنشاء مواقع تفاعلية وسريعة الاستجابة.",
      level: "متوسط",
      isComingSoon: true,
    },
    {
      id: 11,
      name: "دورة C# الشاملة",
      price: "$45",
      image: "./images/c.png",
      duration: "52 فيديو، 24 ساعة و 45 دقيقة",
      trainer: "منى الحسن",
      description: "كل ما تحتاج معرفته عن C# لتطوير تطبيقات سطح المكتب والويب.",
      level: "متقدم",
      isComingSoon: true,
    },
    {
      id: 12,
      name: "دورة PHP للمبتدئين",
      price: "$20",
      image: "./images/php.png",
      duration: "52 فيديو، 24 ساعة و 45 دقيقة",
      trainer: "أمل علي",
      description: "أساسيات البرمجة باستخدام PHP لبناء المواقع الديناميكية.",
      level: "مبتدئ",
      isComingSoon: true,
    },
    {
      id: 13,
      name: "دورة بايثون المتقدمة",
      price: "$30",
      image: "./images/7c8b39cf40000f1df8cf455fa1a43cd3.png",
      duration: "40 فيديو، 30 ساعة و 20 دقيقة",
      trainer: "محمود يوسف",
      description:
        "تعلم مهارات متقدمة في لغة بايثون بما في ذلك تحليل البيانات وبناء التطبيقات.",
      level: "متقدم",
      isComingSoon: true,
    },
    {
      id: 14,
      name: "دورة تطوير تطبيقات iOS باستخدام Swift",
      price: "$35",
      image: "./images/85ec0a9778292af7f20d1502a6ed0702.png",
      duration: "48 فيديو، 27 ساعة و 15 دقيقة",
      trainer: "ليلى فؤاد",
      description:
        "أساسيات تطوير التطبيقات للآيفون باستخدام لغة Swift من البداية حتى نشر التطبيق.",
      level: "متوسط",
      isComingSoon: true,
    },
  ];
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
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 1,
          },
          766: {
            slidesPerView: 2,
          },
          1300: {
            slidesPerView: 3,
          },
          1700: {
            slidesPerView: 4,
          },
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
                  marginRight:
                    index === 0
                      ? "115px"
                      : index === 3
                      ? "1px"
                      : index === 4
                      ? "150px"
                      : "0",
                  ...(typeof window !== "undefined" &&
                  window.innerWidth < 766 &&
                  index === 1
                    ? { marginRight: "200px" }
                    : {}),
                  ...(typeof window !== "undefined" &&
                  window.innerWidth >= 766 &&
                  window.innerWidth < 1300
                    ? {
                        marginRight:
                          index === 0 ? "115px" : index === 2 ? "230px" : "0",
                      }
                    : {}),
                  ...(typeof window !== "undefined" &&
                  window.innerWidth >= 1500 &&
                  window.innerWidth < 1700
                    ? {
                        marginRight:
                          index === 0
                            ? "115px"
                            : index === 3
                            ? "180px"
                            : index === 4
                            ? "150px"
                            : "0",
                      }
                    : {}),
                  ...(typeof window !== "undefined" && window.innerWidth >= 1700
                    ? {
                        marginRight:
                          index === 0
                            ? "115px"
                            : index === 3
                            ? "1px"
                            : index === 4
                            ? "150px"
                            : "0",
                      }
                    : {}),
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
                  imageSrc={item.image}
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
                  boxShadow="0px 4px 12px rgba(0, 0, 0, 0.17)"
                  cardWidth="350.03px"
                  cardHeight="510px"
                  headerBg="#FF6542"
                  headerWidth="350px"
                  headerHeight="286px"
                  imageWidth="200px"
                  imageHeight="200px"
                  imageMargin="38px"
                  borderRadius="11px 11px 0 0"
                  marginRight="20px"
                  marginBottom="55px"
                />
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
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 1,
            },
            766: {
              slidesPerView: 2,
            },
            1300: {
              slidesPerView: 3,
            },
            1700: {
              slidesPerView: 4,
            },
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
                    marginRight:
                      index === 0
                        ? "115px"
                        : index === 3
                        ? "1px"
                        : index === 4
                        ? "150px"
                        : "0",
                    ...(typeof window !== "undefined" &&
                    window.innerWidth < 766 &&
                    index === 1
                      ? { marginRight: "200px" }
                      : {}),
                    ...(typeof window !== "undefined" &&
                    window.innerWidth >= 766 &&
                    window.innerWidth < 1300
                      ? {
                          marginRight:
                            index === 0 ? "115px" : index === 2 ? "230px" : "0",
                        }
                      : {}),
                    ...(typeof window !== "undefined" &&
                    window.innerWidth >= 1500 &&
                    window.innerWidth < 1700
                      ? {
                          marginRight:
                            index === 0
                              ? "115px"
                              : index === 3
                              ? "180px"
                              : index === 4
                              ? "150px"
                              : "0",
                        }
                      : {}),
                    ...(typeof window !== "undefined" &&
                    window.innerWidth >= 1700
                      ? {
                          marginRight:
                            index === 0
                              ? "115px"
                              : index === 3
                              ? "1px"
                              : index === 4
                              ? "150px"
                              : "0",
                        }
                      : {}),
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
                    imageSrc={item.image}
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
                    boxShadow="0px 4px 12px rgba(0, 0, 0, 0.17)"
                    cardWidth="350.03px"
                    cardHeight="510px"
                    headerBg="#FF6542"
                    headerWidth="350px"
                    headerHeight="286px"
                    imageWidth="200px"
                    imageHeight="200px"
                    imageMargin="38px"
                    borderRadius="11px 11px 0 0"
                    marginRight="20px"
                    marginBottom="55px"
                  />
                </SwiperSlide>
              ))}
        </Swiper>
      </Box>
      <style>
        {`
    
  
   .swiper-button-prev, .swiper-button-next {
    width: 70px;
    height: 70px;
    border: 6px solid #713488; 
    border-radius: 50%; 
    background: transparent; 
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .swiper-button-prev::after, .swiper-button-next::after {
    content: ''; 
    display: block ; 
    width: 20px; 
    height: 20px; 
    background: none ; 
    font-size: 0 ; 
    color: transparent ; 
    border: none ; 
  }
  .swiper-button-prev::after {
  
      width: 20px; 
    height: 20px; 
    border-left: 6px solid #713488; 
    border-bottom: 6px solid #713488;
    transform: rotate(225deg); 
  }

  
  .swiper-button-next::after {
    
      width: 20px; 
    height: 20px;
    border-right: 6px solid #713488;
    border-top: 6px solid #713488;
    transform: rotate(225deg); 
  }

    
  `}
      </style>
    </Box>
  );
};

export default Courses;
