import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import masedLogo from "../../public/images/circled_outline.png";
import ButtonAC from "../../components/ButtonAC";
import { AiToolsCardProps } from "./types";

export function AiToolsCard({ tool }: { tool: AiToolsCardProps }) {
  const { title, description, tags } = tool;
  const words = description.split(" ");
  const truncatedDescription = words.slice(0, 5).join(" ") + "...";

  return (
    <Box
      shadow="lg"
      w="350px"
      h="500x"
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
