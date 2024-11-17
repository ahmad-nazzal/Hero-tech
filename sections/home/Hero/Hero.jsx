"use client";
import { Suspense } from "react";
import "./hero.css";
//import bookIcon from "../../../public/icons/book-icon.png";
import Courses from "./courses.jsx";
import Loading from "./loading.jsx";
import {
  Text,
  Flex,
  List,
  ListItem,
  Box,
  Container,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import masaratlogo from "../../../public/images/masaratlogo.png";
import ButtonAC from "../../../components/ButtonAC";
import { useBreakpointValue } from "@chakra-ui/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import mazedlogo from "../../../public/images/🦆 icon _more horiz circled outline_.png";
import CustomCard from "../../../components/CustomCard";
export default function Hero() {
  return (
    <>
      <Box
        as="section"
        minH="100vh"
        overflow="hidden"
        className="slider-image-section"
      >
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
              style={{ backgroundImage: "url('/images/bac.jpg')" }}
            >
              <div className="overlay overlay1"></div>
              <div className="overlay overlay2"></div>
              <Grid
                templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
                height="100%"
                gap={{ lg: 20, sm: 0 }}
                maxW={{ base: "100%", lg: "1200px" }}
                mx="auto"
                px={{ base: 8, sm: 10, lg: 0 }}
              >
                <GridItem flexGrow={1} flexShrink={0}>
                  <Box
                    width={{ base: "100%", lg: "auto" }}
                    height="100%"
                    display="flex"
                    alignItems="center"
                    paddingTop={{ base: 5, sm: 30 }}
                    paddingRight={{ base: 90, lg: 100, sm: 150 }}
                    paddingLeft={{ base: 90, sm: 150, lg: 50 }}
                    paddingBottom={{ base: 0, lg: 150 }}
                    fontSize={{ base: "23px", sm: "33px", lg: "25px" }}
                    textAlign={{ lg: "right", sm: "center", base: "center" }}
                  >
                    <p className="content">
                      تعمل الاكادمية العربية للبرمجة كجسر يربط العقول
                      التكنولوجيةالعربية في المهجر بالطلبة العرب أينما كانوا
                    </p>
                  </Box>
                </GridItem>

                <GridItem flexGrow={1} flexShrink={0}>
                  <Box
                    height="100%"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    textAlign={{ base: "center", sm: "center", lg: "right" }}
                  >
                    <Container
                      maxW="1200px"
                      width="100%"
                      display="flex"
                      flexDirection="column"
                      gap={3}
                      paddingLeft={{ lg: 100, sm: 100 }}
                      paddingRight={{ lg: 0, sm: 100 }}
                      paddingBottom={{ sm: 70, lg: 0 }}
                      marginBottom={{ base: 20 }}
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
                          marginTop={{ base: 0 }}
                          sx={{
                            width: "235px",
                            height: "60px",
                          }}
                        />
                      )}
                      <p className="content">
                        تقدم الأكاديمية العربية للبرمجة تجربة تعلم متميزة من
                        خلال مجموعة من الدروس والمناهج الاحترافية بجودة عالية
                      </p>
                      <p className="content">
                        وأسلوب تدريسي ممتع يتناسب مع مختلف الطرق التعليمية
                        للمبتدئين والمحترفين بإشراف مدربين ومبرمجين ذوي خبرة
                        عالمية في المجال التقني
                      </p>
                      {!useBreakpointValue({
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
                    </Container>
                  </Box>
                </GridItem>
              </Grid>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="slide"
              style={{ backgroundImage: "url('/images/talaween.png')" }}
            >
              <div className="overlay overlay1"></div>
              <div className="overlay overlay2"></div>
            </div>
          </SwiperSlide>
        </Swiper>

        <Box as="section" overflow="hidden" bg="#9D809B">
          <List
            display="flex"
          paddingTop={3}
          paddingBottom={13}
            justifyContent="center"
            
                  >
                    
            <Flex
              height={450}
              width={900}
              padding={60}

            bg="white"
              borderRadius="11"
              boxShadow="0px 4px 12px rgba(0, 0, 0, 0.37)"
            
              justifyContent="center"  
              alignItems="center"  
              gap={9}    
      
            >
              <ListItem    >
                <CustomCard
                
                  title="دروس وانماط الميدجورني"
                  description="وصف قصير للكارد"
                  imageSrc="/icons/transparent-book-icon-open-blank-book-pages-icon-education-ico-5f9bad3ade7008 1.png"
                  applyFilter={false}
                  buttons={[
                    <ButtonAC
                      key="read-more"
                      borderRadius="6px"
                      mb="30px"
                      color="white"
                      bg="secondary"
                      text="المزيد..."
                      icon={mazedlogo}
                      sx={{
                        width: "200px",
                        height: "60px",
                        
                        fontSize: "17px",
                        fontWeight: "bold"
                      }}
                    
                    />,
                  ]}
                
                imageWidth="77.21px"
                imageHeight="57.78px"
                        boxShadow="0px 0px 0px rgba(0, 0, 0, 0)"
                         cardWidth="250px"
                        //cardHeight="450px"
                        cardHeight="350px"
                        headerBg="#783BA2"
                        headerWidth="130px"
                        headerHeight="130px"
                    borderRadius="50%"
                    marginRight="30px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center" 
                />
              </ListItem>
              <ListItem     >
                <CustomCard
                  title="بنك الأسئلة التقنية"
                  description="وصف قصير للكارد"
                  imageSrc="/icons/transparent-test-quiz-icon-my-classroom-icon-check-icon-5dd1c17b65bb03 1.png"
                  applyFilter={false}
                  buttons={[
                    <ButtonAC
                      key="read-more"
                      borderRadius="6px"
                      mb="30px"
                      color="white"
                      bg="secondary"
                            text="المزيد..."
                      icon={mazedlogo}
                      sx={{
                        width: "200px",
                        height: "60px",
                  fontWeight: "bold",
                        fontSize: "17px",
                      }}
                    />,
                  ]}
                  boxShadow="0px 0px 0px rgba(0, 0, 0, 0)"
                        cardWidth="250px"
                        cardHeight="350px"
        
                        imageWidth="48.31px"
                imageHeight="64.28px"
                        headerBg="#783BA2"
                        headerWidth="130px"
                        headerHeight="130px"
                            borderRadius="50%"
                    marginRight="30px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center" 
                />
              </ListItem>
              <ListItem   
  
              >
                <CustomCard
                  title="دروس وانماط الميدجورني"
                  description="وصف قصير للكارد"
                  imageSrc="/icons/kisspng-education-logo-image-e-learning-5cce15891e7a39 1.png"
                  applyFilter={false}
                  buttons={[
                    <ButtonAC
            
                      key="read-more"
                      borderRadius="6px"
                      mb="30px"
                      color="white"
                      bg="secondary"
                            text="المزيد..."
                      icon={mazedlogo}
                      sx={{
                        width: "200px",
                        height: "60px",
                      
                        fontSize: "17px",
                         fontWeight: "bold"
                      }}
                    />,
                  ]}
                  boxShadow="0px 0px 0px rgba(0, 0, 0, 0)"
                         cardWidth="250px"
        
                        cardHeight="350px"
                        headerBg="#783BA2"
                        headerWidth="140px"
                        headerHeight="130px"
                              imageWidth="58.48px"
                imageHeight="55.61px"
                    borderRadius="50%"
                    marginRight="30px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center" 
                />
              </ListItem>
            </Flex>
          </List>
        </Box>
      </Box>

      <main  >
        <Grid templateColumns="repeat(4, 1fr)" gap="4">
          <GridItem colSpan={1}>
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

          {/*Put here Search Bar*/}
          <GridItem colSpan={3}></GridItem>
        </Grid>

        <Suspense  fallback={<Loading />}>
          <Courses />
    
        </Suspense>
      </main>
    </>
  );
}


