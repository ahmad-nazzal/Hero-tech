import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import ButtonAC from "./ButtonAC";
import circled_outline from "../public/images/circled_outline.png";

interface ServiceCardProps {
  card: {
    id: string | number;
    icon: string;
    title: string;
  };
  imageWidth: number;
  imageHeight: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  card,
  imageWidth,
  imageHeight,
}) => {
  return (
    <Box
      width={{ sm: 150, md: 220, lg: 200 }}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box
        bg="#783BA2"
        borderRadius="full"
        width={{ base: 120, md: 173, lg: 130 }}
        minH={{ base: 110, md: 173, lg: 130 }}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Image
          src={card.icon}
          alt={card.title}
          width={imageWidth}
          height={imageHeight}
        />
      </Box>
      <Text
        fontWeight="bold"
        textAlign="center"
        fontSize={{ base: 18, md: 25, lg: 23 }}
        color="#713488"
      >
        {card.title}
      </Text>
      <ButtonAC
        bg="secondary"
        text="المزيد ..."
        icon={circled_outline}
        color="white"
      />
    </Box>
  );
};

export default ServiceCard;
