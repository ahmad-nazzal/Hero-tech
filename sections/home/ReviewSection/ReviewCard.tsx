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
import ReviewCardProps from "./ReviewCardProps";

export default function ReviewCard({
  reviewerName,
  reviewerLastName,
  reviewText,
  rating,
  date,
}: ReviewCardProps) {
  // إنشاء قائمة النجوم بناءً على التقييم
  const stars = Array.from({ length: 5 }, (_, index) =>
    index < rating ? "/images/Star1.png" : "/images/Starempty.png"
  ).reverse();

  return (
    <Box
      px={10}
      py={10}
      width="100%"
      height="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Card
        height="400px"
        width="100%"
        maxW="384px"
        overflow="hidden"
        boxShadow="xl"
        borderRadius="md"
        position="relative"
      >
        {/* الخلفية */}
        <Image
          src="/images/Rectangle.png"
          alt="Rectangle"
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="150px"
          objectFit="cover"
          zIndex={0}
        />

        {/* صورة المستخدم */}
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
            textAlign="center"
            mb={5}
            color="primary"
            fontWeight="700"
            fontSize="19px"
          >
            {reviewerName} {""} {reviewerLastName}
          </Heading>
          <Text
            textAlign="center"
            noOfLines={3}
            color="primary"
            fontWeight="500"
            fontSize="18px"
          >
            {reviewText}
          </Text>
        </CardBody>

        <CardFooter
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          position="relative"
          zIndex={2}
        >
          {/* النجوم */}
          <Flex
            gap={1}
            justifyContent="flex-end"
            dir="rtl"
            sx={{
              img: {
                width: ["15px", "20px", "23px"],
                height: ["15px", "20px", "24px"],
              },
            }}
          >
            {stars.map((starSrc, index) => (
              <Image
                key={index}
                src={starSrc}
                alt={`star-${index}`}
                objectFit="contain"
              />
            ))}
          </Flex>

          {/* التاريخ */}
          <Box mx={5} color="gray.500" fontSize="14px">
            {date}
          </Box>
        </CardFooter>
      </Card>
    </Box>
  );
}
