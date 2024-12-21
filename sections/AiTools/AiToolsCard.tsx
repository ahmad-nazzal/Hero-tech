import { Box, Flex, IconButton, useColorModeValue  } from "@chakra-ui/react";
import Image from "next/image";
import masedLogo from "../../public/images/circled_outline.png";
import ButtonAC from "../../components/ButtonAC";
import { AiToolsCardProps } from "./types";
import empHeartlogo from "../../public/images/emp-heart.png";
import heartlogo from "../../public/images/heart.png";
import { useState } from 'react';
export function AiToolsCard({ tool }: { tool: AiToolsCardProps }) {
  const { title, description, tags } = tool;
  const words = description.split(" ");
  const truncatedDescription = words.slice(0, 5).join(" ") + "...";
  const bg = useColorModeValue("white", "gray.800"); 
  const [isFavorited, setIsFavorited] = useState(false); // حالة لتتبع إذا كان القلب مفضلًا

  const toggleFavorite = () => setIsFavorited(!isFavorited); // تغيير حالة القلب

  return (
    <Box
      shadow="lg"
      width="400px" // تم تعديل العرض إلى 400px
      height="528.3px" // تم تعديل الارتفاع إلى 528.3px
      rounded="sm"
      transition={"all 0.3s ease-in-out"}
      cursor={"pointer"}
      overflow="hidden"
    >
    
      <Flex direction="column" gap={4} h="full">
        {/* تحديد ارتفاع ثابت للصورة */}
        <Box position="relative" width="100%" height="193px">
        
          <Image
            src="https://via.placeholder.com/400x193"
            alt="AI Tool Image"
            layout="fill"
            objectFit="cover"
          />
              <IconButton
        aria-label="Add to favorites"
        icon={
          <Image
          src={isFavorited ? heartlogo : empHeartlogo}// تأكد من المسار الصحيح للصورة
            alt="Favorite Icon"
              //  style={{   width:"100px", height:"20px" }}
              style={{   width:"100", height:"20" }}
          />
        }
        size="lg"
        rounded="full"
        position="absolute"
        mt="15px"
        left={4}
      
        bg={bg}
        boxShadow= '0 2px 8px rgba(0, 0, 0, 0.35)'
        onClick={toggleFavorite} // إضافة الوظيفة لتغيير الحالة عند النقر

    />
        </Box>

        {/* صندوق المحتوى */}
        <Box
          p={4}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          height="calc(100% - 193px)"
        >
          
          {/* العنوان */}
          <Box
            fontWeight="700"
            fontSize="23px"
            textAlign="end"
            textColor="primary"
            mb={2}
            noOfLines={1}
            isTruncated
            flexShrink={0}
          >
            {title}
          </Box>

          {/* التصنيفات */}
          <Box
            fontWeight="700"
            fontSize="18px"
            textAlign="end"
            textColor="primary"
            mb={2}
            noOfLines={1}
            isTruncated
            flexShrink={0}
          >
            {tags}
          </Box>

          {/* الوصف */}
          <Box
            fontWeight="500"
            color={"primary"}
            fontSize="17px"
            textAlign="start"
            mb={3}
            noOfLines={2}
            isTruncated
            flexShrink={0} // منع تغير الحجم عند تجاوز النص
          >
            {truncatedDescription}
          </Box>

          {/* الزر */}
          <ButtonAC
            mx="auto"
            text="المزيد"
            size="sm"
            alignSelf="center"
            bg="secondary"
            textColor="white"
            mb={2}
            icon={masedLogo}
          />
        
        </Box>
      </Flex>
    </Box>
  );
}
