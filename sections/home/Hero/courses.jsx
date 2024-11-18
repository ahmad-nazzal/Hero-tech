import React, { useEffect, useState } from "react";
import ButtonAC from "../../../components/ButtonAC";

import mazedlogo from "../../../public/images/circled_outline.png";
import paylogo from "../../../public/images/cart_icon.png";
import Loading from "./loading";
import { Navigation, Pagination,Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CustomCard from '../../../components/CustomCard';
import { Tooltip } from '@chakra-ui/react';

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
//async & await : Because API process takes time
async function getData() {
  //Loading 5 mintues
  await new Promise((resolve) => setTimeout(resolve, 1000));
  //revalidate:3600 => 3600 seconds, which means that every hour the browser goes to check the data in db.json
  const res = await fetch("http://localhost:4000/courses", {
    next: { revalidate: 0 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Courses = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData();
        setData(result);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
      breakpoints={{
        320: {
          slidesPerView: 1,
        
        },
        480: {
          slidesPerView: 1,
          
        },
        766: {
          slidesPerView: 2,
        
        }
        ,
        1300: {
          slidesPerView: 3,
        
        },
        1700: {
          slidesPerView: 4,  
        
        }
      }}
  
    >
      
      {data && data.filter((item) => item.isComingSoon === false) .map((item, index) => (

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
      ...(window.innerWidth < 766
        && index === 1
        ? { marginRight: "200px" }
        : {}),
      ...(window.innerWidth >= 766 && window.innerWidth < 1300
        ? { marginRight:   index === 0
          ? "115px":index === 2 ? "230px" : "0" }
        : {}),
  ...(window.innerWidth >= 1500 && window.innerWidth < 1700
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
  ...(window.innerWidth >= 1700
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
         
         title={ <Tooltip label={item.name} aria-label="Full Title">
         <span>
           {item.name.length > 15 ? `${item.name.slice(0, 15)}...` : item.name}
         </span>
       </Tooltip>}

              price={item.price}        
              trainerName={item.trainer} 
              duration={item.duration}   
              imageSrc={
                              item.image

              
              }
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
                />


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
قريباً            </Text>
          </GridItem>

        
          <GridItem colSpan={3} >
          </GridItem>
        </Grid>

    <Box 
marginBottom={112}
paddingTop={2}
paddingBottom={2}

paddingLeft={3}

  
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
        
        }
        ,
        1300: {
          slidesPerView: 3,
        
        },
        1700: {
          slidesPerView: 4,  
        
        }
      }}
  
  
    >
      
      {data && data
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
      ...(window.innerWidth < 766
        && index === 1
        ? { marginRight: "200px" }
        : {}),
      ...(window.innerWidth >= 766 && window.innerWidth < 1300
        ? { marginRight:   index === 0
          ? "115px":index === 2 ? "230px" : "0" }
        : {}),
  ...(window.innerWidth >= 1500 && window.innerWidth < 1700
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
  ...(window.innerWidth >= 1700
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
         
         title={ <Tooltip label={item.name} aria-label="Full Title">
         <span>
           {item.name.length > 15 ? `${item.name.slice(0, 15)}...` : item.name}
         </span>
       </Tooltip>}

              price={item.price}        
              trainerName={item.trainer} 
              duration={item.duration}   
              imageSrc={
                              item.image

              
              }
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
                />


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
    border: 6px solid #713488; /* الإطار الخارجي */
    border-radius: 50%; /* لجعل الشكل دائرياً */
    background: transparent; /* خلفية شفافة */
    display: flex;
    align-items: center;
    justify-content: center;
  }
  /* إزالة سهم Swiper الافتراضي */
  .swiper-button-prev::after, .swiper-button-next::after {
    content: ''; /* إزالة النص الافتراضي */
    display: block ; /* تأكيد منع أي عنصر افتراضي */
    width: 20px; /* عرض السهم */
    height: 20px; /* ارتفاع السهم */
    background: none ; /* منع أي أيقونات افتراضية */
    font-size: 0 ; /* إزالة أي تأثير للنص */
    color: transparent ; /* إزالة اللون */
    border: none ; /* منع أي تأثير افتراضي */
  }
  /* تعديل سهم السابق */
  .swiper-button-prev::after {
  
      width: 20px; /* عرض السهم */
    height: 20px; /* ارتفاع السهم */
    border-left: 6px solid #713488; /* سماكة ولون الخط الأيسر للسهم */
    border-bottom: 6px solid #713488; /* سماكة ولون الخط السفلي للسهم */
    transform: rotate(225deg); /* تشكيل السهم */
  }

  /* تعديل سهم التالي */
  .swiper-button-next::after {
    
      width: 20px; /* عرض السهم */
    height: 20px; /* ارتفاع السهم */
    border-right: 6px solid #713488; /* سماكة ولون الخط الأيمن للسهم */
    border-top: 6px solid #713488; /* سماكة ولون الخط العلوي للسهم */
    transform: rotate(225deg); /* تشكيل السهم */
  }

    
  `}
</style>

  </Box>
  
  
  );
};

export default Courses;
