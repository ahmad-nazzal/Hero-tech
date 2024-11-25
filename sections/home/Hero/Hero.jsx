"use client";
import { Suspense } from "react";
import "./hero.css";
import Courses from "./courses.jsx";
import Loading from "./loading.jsx";

import SearchBar from "../../../components/SearchBar";
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

export default function Hero() {
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
                  <Box
                    height="100%"
                    display="flex"
                    width={740}
                    alignItems="center"
                    paddingTop={{ base: 5, sm: 30, lg: 19 }}
                    marginRight={{ lg: 85 }}
                    paddingRight={{ base: 90, lg: 150, sm: 150 }}
                    paddingBottom={{ base: 0, lg: 150 }}
                    paddingLeft={{ base: 90, sm: 150, lg: 4 }}
                    fontSize={{ base: "23px", sm: "33px", lg: "40px" }}
                    textAlign={{ lg: "right", sm: "center", base: "center" }}
                    sx={{
                      "@media (min-width: 1280px) and (max-width: 1400px)": {
                        width: "610px",
                      },
                    }}
                  >
                    <p>
                      تعمل الاكادمية العربية للبرمجة كجسر يربط العقول
                      التكنولوجية العربية في المهجر بالطلبة العرب أينما كانوا
                    </p>
                  </Box>
                </GridItem>

                <GridItem className="content" flexGrow={1} flexShrink={0}>
                  <Box
                    height="37%"
                    width={{ base: "100%", lg: 770 }}
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    fontSize={{ base: "10px", sm: "10px", lg: "23px" }}
                    textAlign={{ base: "center", sm: "center", lg: "right" }}
                    paddingTop={{ lg: 162 }}
                    paddingRight={{ lg: 104, sm: 100 }}
                    paddingBottom={{ sm: 70, lg: 0 }}
                    marginTop={{ lg: 202 }}
                    marginBottom={{ base: 20 }}
                    sx={{
                      "@media (min-width: 1280px) and (max-width: 1650px)": {
                        width: "450px",
                      },
                    }}
                  >
                    <Container
                      width="100%"
                      display="flex"
                      flexDirection="column"
                      gap={5}
                    >
                      {useBreakpointValue({
                        base: true,
                        sm: false,
                        lg: false,
                      }) && (
                        <ButtonAC
                          alignSelf="center"
                          mt={8}
                          size="lg"
                          color="white"
                          bg="secondary"
                          text="المسارات التعليمية"
                          icon={masaratlogo}
                          marginLeft={{ lg: 170 }}
                          sx={{
                            width: "235px",
                            height: "60px",
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
                          text="المسارات التعليمية"
                          icon={masaratlogo}
                          marginTop={{ lg: 70, sm: 0 }}
                          sx={{
                            width: "310px",
                            height: "80px",
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
                  <Box
                    height="100%"
                    display="flex"
                    width={740}
                    alignItems="center"
                    marginRight={{ lg: 85 }}
                    paddingRight={{ base: 90, lg: 150, sm: 150 }}
                    paddingLeft={{ base: 90, sm: 150, lg: 4 }}
                    fontSize={{ base: "23px", sm: "33px", lg: "40px" }}
                    textAlign={{ lg: "right", sm: "center", base: "center" }}
                    sx={{
                      "@media (min-width: 1280px) and (max-width: 1400px)": {
                        width: "610px",
                      },
                    }}
                  >
                    <p>
                      في الأكاديمية العربية للبرمجة، نسعى لإعداد جيل جديد من
                      المبرمجين العرب الذين يمتلكون الأدوات والمهارات اللازمة
                      لمواكبة التطور التكنولوجي العالمي
                    </p>
                  </Box>
                </GridItem>
                <GridItem className="content" flexGrow={1} flexShrink={0}>
                  <Box
                    height="37%"
                    width={{ base: "100%", lg: 770 }}
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    fontSize={{ base: "10px", sm: "10px", lg: "23px" }}
                    textAlign={{ base: "center", sm: "center", lg: "right" }}
                  
                    paddingRight={{ lg: 104, sm: 100 }}
                    paddingBottom={{ sm: 70, lg: 0 }}
                    marginTop={{ lg: 202 }}
                    marginBottom={{ base: 20 }}
                    sx={{
                      "@media (min-width: 1280px) and (max-width: 1650px)": {
                        width: "450px",
                      },
                    }}
                  >
                    <Container
                      width="100%"
                      display="flex"
                      flexDirection="column"
                      gap={5}
                    >
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

      <main style={{ margin: "0", width: "100%", overflow: "hidden" }}>
        <Grid templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }} gap="4">
          <GridItem colSpan={{ base: 4, md: 1 }}>
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

          <GridItem colSpan={3} className="grid-item">
            <SearchBar placeholder="..... مقدمة لمحرك الألعاب اليونتي" />
          </GridItem>
        </Grid>

        <Suspense fallback={<Loading />}>
          <Courses />
        </Suspense>
      </main>
    </>
  );
}
