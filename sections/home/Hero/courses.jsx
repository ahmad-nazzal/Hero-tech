import React, { useEffect, useState } from "react";
import ButtonAC from "../../../components/ButtonAC";
import mazedlogo from "../../../public/images/🦆 icon _more horiz circled outline_.png";
import paylogo from "../../../public/images/🦆 icon _cart_.png";
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

  Box,
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
marginRight="77px"


    marginLeft="48px"
    >
    <Swiper    
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={109}
      navigation={true} 
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
          slidesPerView: 5,  
        
        },
      }}
  
    >
      
      {data && data.map((item, index) => (

<SwiperSlide
key={item.id}
style={
  index === 0
    ? { marginRight: "130px" }
    : index === 3
    ? { marginLeft: "400px" }
    : {}
}
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
              boxShadow="0px 4px 12px rgba(0, 0, 0, 0.34)"
              cardWidth="350.03px"
              cardHeight="510px"
              headerBg="#FF6542"
              headerWidth="350px"
              headerHeight="286px"
  
                imageWidth="280px"
                imageHeight="280px"
                borderRadius="11px 11px 0 0"
             marginRight="20px"
            
             marginBottom="55px"
            />

            
        </SwiperSlide>
      ))}
    </Swiper>

    <style>
  {`
    
  
    .swiper-button-prev {
      width: 65px;
      height: 65px; 
      border: 6px solid #713488;



      margin-left: -90px; 
      
    }


    .swiper-button-next {
      width: 65px;
      height: 65px;
  
  border: 6px solid #713488;
      margin-right: -90px;

    }

    
  `}
</style>

  </Box>
  
  
  );
};

export default Courses;
