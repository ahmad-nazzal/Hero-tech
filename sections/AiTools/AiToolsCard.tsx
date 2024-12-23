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
  const [isFavorited, setIsFavorited] = useState(false); 

  const toggleFavorite = (toolId: number) => {
    const storedFavorites = localStorage.getItem('favorites');
    const parsedFavorites = storedFavorites ? JSON.parse(storedFavorites) : [];
    setIsFavorited((prevState) => !prevState); 

    let updatedFavorites;
    if (parsedFavorites.includes(toolId)) {
      updatedFavorites = parsedFavorites.filter((id: number) => id !== toolId); 
    } else {
      updatedFavorites = [...parsedFavorites, toolId]; 
    }
  
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };
  
  return (
    <Box
      shadow="lg"
      width={{ lg: "400px", md: "370px",sm:"270px" }} 
      height={{lg:"528.3px" ,md:"528.3px",sm:"400px"}}
      rounded="sm"
      transition={"all 0.3s ease-in-out"}
      cursor={"pointer"}
      overflow="hidden"
      sx={{
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.35)',
      }}
    >
    
      <Flex direction="column" gap={4} h="full">
      
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
          src={isFavorited ? heartlogo : empHeartlogo}
            alt="Favorite Icon"
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
        onClick={() => toggleFavorite(tool.tool_id!)} 
    />
        </Box>
        <Box
          p={4}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          height="calc(100% - 193px)"
        >
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
          <Box
            fontWeight="500"
            color={"primary"}
            fontSize="17px"
            textAlign="start"
            mb={3}
            noOfLines={2}
            isTruncated
            flexShrink={0}
          >
            {truncatedDescription}
          </Box>
          <ButtonAC
            mx="auto"
            size="sm"
            text="المزيد"
            fontSize={{ lg: 17,base:14 }}
            alignSelf="center"
            bg="secondary"
            textColor="white"
            mb={2}
            sx={{
              flexDirection: { lg: 'row-reverse', sm: 'row-reverse', md:'row-reverse' }
              ,gap: '5px'
            }}
            icon={masedLogo}
          />
        </Box>
      </Flex>
    </Box>
  );
}
