"use client";
import "./hero.css";
import { Text, Box, Container, Grid, GridItem } from "@chakra-ui/react";
import masaratlogo from "../../../public/images/masaratlogo.png";
import ButtonAC from "../../../components/ButtonAC";
import { useBreakpointValue } from "@chakra-ui/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Suspense } from "react";
import "./hero.css";
import Courses from "./courses.jsx";
import Loading from "./loading.jsx";
import { Service } from "../ServiceSection/Service";
import Dad from "../../DadSection/Dad";
import SearchBar from "../../../components/SearchBar";

export default function Hero() {
  const sliderTextOneStyles = {
    height: "100%",
    display: "flex",
    justifyContent: { sm: "center" },
    width: { lg: 740, sm: 900 },
    lineHeight: { base: "normal", sm: "1.18", lg: "1.18" },
    alignItems: "center",
    paddingTop: { base: 5, sm: 5, lg: 19 },
    marginRight: { lg: 85, md: 28 },
    paddingRight: { base: 50, lg: 150 },
    paddingBottom: { base: 8, lg: 150 },
    paddingLeft: { base: 50, sm: 210, lg: 4 },
    fontSize: { base: "25px", sm: "50px", lg: "40px" },
    textAlign: { lg: "right", sm: "center", base: "center" },
    sx: {
      "@media (min-width: 1280px) and (max-width: 1400px)": {
        width: "610px",
      },
    },
  };

  const sliderTextTwoStyles = {
    height: "37%",
    lineHeight: "1.2",
    width: { base: "100%", lg: 770 },
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    fontSize: { base: "16px", sm: "25px", lg: "23px" },
    textAlign: { base: "center", sm: "center", lg: "right" },
    paddingTop: { lg: 162, sm: 7 },
    paddingRight: { lg: 95, md: 10 },
    paddingLeft: { lg: 10 },
    paddingBottom: { sm: 70, lg: 0 },
    marginTop: { lg: 202, sm: 20 },
    marginBottom: { base: 20 },
    sx: {
      "@media (min-width: 1280px) and (max-width: 1650px)": {
        width: "590px",
      },
    },
  };

  const commonContainerStyles = {
    width: { base: "100%", sm: "70%", lg: "100%" },
    display: "flex",
    flexDirection: "column",
    gap: { lg: 10, sm: 10, base: 3 },
    alignItems: { sm: "center" },
    marginRight: { lg: 0, sm: 10, md: 110 },
  };

  return (
    <>
      <Box as="section" overflow="hidden" className="slider-image-section">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          style={{
            width: "100%",
          }}
        >
          <SwiperSlide>
            <div
              className="slide"
              style={{
                backgroundImage:
                  "url('/images/medium-shot-happy-colleagues-working-together 1.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: "100%",
              }}
            >
              <div className="overlay overlay1"></div>
              <div className="overlay overlay2"></div>
              <Grid
                templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
                height="100%"
                mx="auto"
                px={{ base: 8, sm: 10, lg: 0 }}
              >
                <GridItem className="content" flexGrow={1} flexShrink={0}>
                  <Box {...sliderTextOneStyles}>
                    <p>
                      تعمل الاكادمية العربية للبرمجة كجسر يربط العقول
                      التكنولوجية العربية في المهجر بالطلبة العرب أينما كانوا
                    </p>
                  </Box>
                </GridItem>

                <GridItem className="content" flexGrow={1} flexShrink={0}>
                  <Box {...sliderTextTwoStyles}>
                    <Container {...commonContainerStyles}>
                      {useBreakpointValue({
                        base: true,
                        sm: false,
                        lg: false,
                      }) && (
                        <ButtonAC
                          alignSelf="center"
                          mb={8}
                          size="lg"
                          color="white"
                          bg="secondary"
                          text="المسارات التعليمية"
                          icon={masaratlogo}
                          sx={{
                            width: "200px",
                            height: "60px",
                            fontSize: { base: "14px" },
                            fontWeight: 900,
                          }}
                        />
                      )}
                      <p>
                        تقدم الأكاديمية العربية للبرمجة تجربة تعلم متميزة من
                        خلال مجموعة من الدروس والمناهج الاحترافية بجودة عالية
                      </p>
                      <p>
                        وأسلوب تدريسي ممتع يتناسب مع مختلف الطرق التعليمية
                        للمبتدئين والمحترفين بإشراف مدربين ومبرمجين ذوي خبرة
                        عالمية في المجال التقني
                      </p>
                      {useBreakpointValue({
                        base: false,
                        sm: true,
                        lg: true,
                      }) && (
                        <ButtonAC
                          color="white"
                          bg="secondary"
                          size="lg"
                          text="المسارات التعليمية"
                          icon={masaratlogo}
                          marginTop={{ lg: 70, sm: 10 }}
                          marginLeft={{ lg: 300, sm: -10 }}
                          sx={{
                            width: "310px",
                            height: "80px",
                            fontSize: { sm: "19px", lg: "17px" },
                            fontWeight: "900",
                            "@media (min-width: 1280px) and (max-width: 1650px)":
                              {
                                marginLeft: "90px",
                              },
                          }}
                        />
                      )}
                    </Container>
                  </Box>
                </GridItem>
              </Grid>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="slide"
              style={{
                backgroundImage:
                  "url('/images/medium-shot-happy-colleagues-working-together 1.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: "100%",
              }}
            >
              <div className="overlay overlay1"></div>
              <div className="overlay overlay2"></div>
              <Grid
                templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
                height="100%"
                mx="auto"
                px={{ base: 8, sm: 10, lg: 0 }}
              >
                <GridItem className="content" flexGrow={1} flexShrink={0}>
                  <Box {...sliderTextOneStyles}>
                    <p>
                      في الأكاديمية العربية للبرمجة، نسعى لإعداد جيل جديد من
                      المبرمجين العرب الذين يمتلكون الأدوات والمهارات اللازمة
                      لمواكبة التطور التكنولوجي العالمي
                    </p>
                  </Box>
                </GridItem>
                <GridItem className="content" flexGrow={1} flexShrink={0}>
                  <Box {...sliderTextTwoStyles}>
                    <Container {...commonContainerStyles}>
                      <p>
                        نؤمن بأن البرمجة ليست مجرد مهارة، بل هي لغة المستقبل
                        التي تفتح آفاقًا جديدة للإبداع والابتكار
                      </p>
                      <p>
                        انضم إلينا اليوم لتبدأ رحلتك في عالم التقنية بدعم من
                        خبرائنا، ومجتمعنا الملهم الذي يشجعك على التقدم خطوة
                        بخطوة نحو تحقيق أهدافك
                      </p>
                    </Container>
                  </Box>
                </GridItem>
              </Grid>
            </div>
          </SwiperSlide>
        </Swiper>
      </Box>
      <Service></Service>
<Dad></Dad>
      <main style={{ margin: "0", width: "100%", overflow: "hidden" }}>
  <Grid 
    templateColumns={{ 
      base: "1fr",   
      sm: "1fr",     
      md: "1fr",     
      lg: "repeat(4, 1fr)"  
    }} 
    gap="4"
  >
    <GridItem colSpan={{ base: 1, lg: 1 }}>
      <Text
        className="recommended"
        marginRight="237px"
        marginBottom="84px"
        paddingTop="153px"
        color="#713488"
        borderBottom="2px solid #713488"
        width="208px"
        fontWeight="bold"
        fontSize="27px"
      >
        الدورات التدريبية
      </Text>
    </GridItem>

    <GridItem colSpan={{ base: 1, lg: 3 }}>
      <SearchBar placeholder="..... مقدمة لمحرك الألعاب اليونتي" />
    </GridItem>
  </Grid>
        <Suspense fallback={<Loading />}>
          <Courses data={[
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
  
    ]}  />
        </Suspense>
      </main>

    </>
  );
}
