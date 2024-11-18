import React from 'react';
import { ReactNode } from "react";


import {
  Card,
   Spacer,
   CardHeader,
   CardBody,
   CardFooter,
   Image,
   Text,
   Heading,
   Flex,

  Box,
} from "@chakra-ui/react";

interface CustomCardProps {
  title: string; 
  price: string; 
  trainerName?: string;
  duration?: string; 
  imageSrc: string;
  boxShadow?: string;
  cardWidth?: string;
  cardHeight?: string;
  headerBg?: string;
  headerWidth?: string;
  headerHeight?: string;
  imageWidth?: string;  
  imageHeight?: string; 
  imageMargin?: string; 
  applyFilter?: boolean;
  borderRadius: string; 
  marginRight?: string; 
  marginBottom?: string; 
  display?: string; 
  alignItems?: string; 
  justifyContent?: string; 
  buttons: ReactNode[];
}

const CustomCard: React.FC<CustomCardProps> = ({
  title,
  price,
  trainerName,
  duration,
  imageSrc,
  buttons,
  boxShadow ,  
  cardWidth,
  cardHeight ,
  headerBg ,
  headerWidth ,
  headerHeight ,
  imageWidth, 
imageHeight,
imageMargin,
applyFilter , 
borderRadius ,  
marginRight , 
marginBottom,
display , 
alignItems , 
justifyContent , 
}: CustomCardProps) => {
  return (
    <Card
    marginBottom={marginBottom}
    boxShadow={boxShadow}
    borderRadius="11px"
    bg="white"
    width={cardWidth}
     height={cardHeight}
    >
      <CardHeader
       pt="0"
       pr="0"
        display={ display}
  justifyContent={justifyContent}
  alignItems={alignItems}
  >
        <Box
          bg={headerBg}
           p="10"
      borderRadius={borderRadius}
          width={headerWidth}
          height={headerHeight}
          display={display}
          justifyContent={justifyContent}
          alignItems={alignItems}
         
        >         
         <Image    
           height={imageHeight}
           width={imageWidth} 
          marginRight={imageMargin}
         src={imageSrc}
          alt={title} 
          style={{
            filter: applyFilter ? "invert(1)" : "none" 
          }}
          />

        </Box>
      </CardHeader>

      <CardBody marginRight={marginRight} >
        <Flex 
      
        marginLeft="20px"
        >

        <Text
              
                  size="lg"
                  fontWeight="bold"
                  fontSize="23px"
                  color="#713488"
                  paddingTop={1}
                  textAlign="center" 
              
                >            {title}
    </Text>

    <Spacer />
    <Text color="#713488" fontSize="30px" fontWeight="bold">

    {price}
          </Text>
        </Flex>
      
<Box color="#713488" fontSize="18px" fontWeight="normal" 

>
                <Text mb="1">
              
                  {trainerName}</Text>
                <Text>{duration}</Text>
              </Box>
      </CardBody>

      <CardFooter paddingTop={0}>
  <Flex gap="13px" 
  
  //marginRight="12px"
  
  >
    {buttons && buttons.length > 0 ? (
      buttons.map((button, index) => (
        <React.Fragment key={index}>{button}</React.Fragment>
      ))
    ) : (
      <p>No buttons available</p> 
    )}
  </Flex>
</CardFooter>

    </Card>
  );
};

export default CustomCard;
