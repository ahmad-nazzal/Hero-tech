
import { Box, Flex, IconButton, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";
import masedLogo from "../../public/images/circled_outline.png";
import ButtonAC from "../../components/ButtonAC";
import { AiToolsCardProps } from "./types";
import empHeartlogo from "../../public/images/emp-heart.png";
import heartlogo from "../../public/images/heart.png";

interface AiToolsCardComponentProps {
  tool: AiToolsCardProps;
  isFavorite: boolean;
  onToggleFavorite: (toolId: number) => void;
}

export function AiToolsCard({ tool, isFavorite, onToggleFavorite }: AiToolsCardComponentProps) {
  const { tool_id, title, description, tags } = tool;
  const words = description.split(" ");
  const truncatedDescription = words.slice(0, 5).join(" ") + "...";
  const bg = useColorModeValue("white", "gray.800");

  const handleFavoriteClick = () => {
    if (tool_id) {
      onToggleFavorite(tool_id);
    }
  };

  return (
    <Box
      shadow="lg"
      width={{ lg: "400px", md: "370px",sm:"270px" }} 
      height={{lg:"528.3px" ,md:"528.3px",sm:"400px"}}
      rounded="sm"
      transition="all 0.3s ease-in-out"
      cursor="pointer"
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
            aria-label={isFavorite ? "إزالة من المفضلة" : "إضافة إلى المفضلة"}
            icon={
              <Image
                src={isFavorite ? heartlogo : empHeartlogo}
                alt="Favorite Icon"
                style={{ width: "100", height: "20" }}
              />
            }
            size="lg"
            rounded="full"
            position="absolute"
            mt="15px"
            left={4}
            bg={bg}
            boxShadow="0 2px 8px rgba(0, 0, 0, 0.35)"
            onClick={handleFavoriteClick}
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
            color="primary"
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
            text="المزيد"
            fontSize={{ lg: 17,base:14 }}
            size="sm"
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