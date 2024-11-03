import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Text,
  Heading,
  Box,
  Flex,
} from "@chakra-ui/react";
import star from "../../../public/images/Star 1.png";
import Rectangle from "../../../public/images/Rectangle.png";
import ReviewCardProps from "./ReviewCardProps";

export default function ReviewCard({
  name,
  review,
  rating,
  date,
}: ReviewCardProps) {
  const stars = Array.from({ length: 5 }, (_, index) =>
    index < rating ? star.src : null
  );

  return (
    <Box p={10} mx={"auto"}>
      <Card
        maxW="100%"
        mx="auto"
        minH="320px"
        boxShadow="xl"
        borderRadius="lg"
        overflow="hidden"
        position={"relative"}
        h={"fit-content"}
        p={"5px"}
        rounded={"lg"}
      >
        <Image
          src={Rectangle.src}
          alt="Rectangle"
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="150px"
          objectFit="cover"
          zIndex={0}
        />

        <Image
          mt={12}
          src="https://via.placeholder.com/100"
          alt="صورة المستخدم"
          borderRadius="full"
          boxSize="100px"
          mx="auto"
          position="relative"
          zIndex={2}
        />
        <CardBody gap="4" position="relative" zIndex={2}>
          <Heading
            size="md"
            textAlign={"center"}
            mb={5}
            color={"primary"}
            fontWeight={"700"}
            fontSize={"19px"}
          >
            {name}
          </Heading>
          <Text
            textAlign={"center"}
            noOfLines={3}
            color={"primary"}
            fontWeight={"500"}
            fontSize={"18px"}
          >
            {review}
          </Text>
        </CardBody>
        <CardFooter
          gap="5"
          display={"flex"}
          justifyContent={"space-between"}
          justifyItems={"center"}
          alignItems={"center"}
          position="relative"
          zIndex={2}
        >
          <Flex>
            {stars.map(
              (starSrc, index) =>
                starSrc && (
                  <Image
                    key={index}
                    src={starSrc}
                    alt={`star-${index}`}
                    width={23}
                    height={24}
                    objectFit={"contain"}
                    ml={1}
                  />
                )
            )}
          </Flex>
          <Box mx={5}>{date}</Box>
        </CardFooter>
      </Card>
    </Box>
  );
}
