"use client";
import { Box, Button, Flex, GridItem, Text } from "@chakra-ui/react";
import CustomLine from "./CustomLine";
import Image from "next/image";
import location from "../../public/images/location.png";
import tele from "../../public/images/tele.png";
import msg from "../../public/images/msg.png";
import vector from "../../public/images/vector.png";
import useResponsiveStyles from "../../Hooks/useResponsiveStyles";

export default function Contact() {
  const { textAlign, flexAlign } = useResponsiveStyles();
  return (
    <>
      <GridItem width="100%" px={{ base: 4, md: 0 }}>
        <Box
          color="primary"
          w="100%"
          maxW={{ base: "100%", md: "400px" }}
          p={6}
          bg="white"
          borderRadius="5px"
          mx="auto"
          height="auto"
          minHeight="400px"
        >
          <Text textAlign={textAlign} fontWeight="bold" mb={4}>
            التواصل
          </Text>
          <CustomLine
            width="30%"
            bg="primary"
            marginBottom={8}
            mx={textAlign === "center" ? "auto" : "0"}
          />
          <Flex direction="column" gap={6} alignItems={flexAlign}>
            <Flex alignItems="center" gap={4}>
              <Image src={location} alt="location" width={17} height={27} />
              <Text>المقر الرئيسي: بريطانيا، لندن</Text>
            </Flex>
            <Flex alignItems="center" gap={4}>
              <Image src={tele} alt="tele" width={23} height={22} />
              <Text>+447918713367</Text>
            </Flex>
            <Flex alignItems="center" gap={4}>
              <Image src={msg} alt="msg" width={23} height={17} />
              <Text>info@arabcodeacademy.com</Text>
            </Flex>
            <Button
              marginTop={4}
              bg="secondary"
              color="white"
              _hover={{ bg: "secondaryDark" }}
              size="sm"
              display="flex"
              alignItems="center"
              gap={2}
              mx={textAlign === "center" ? "auto" : "0"}
            >
              <Image src={vector} alt="call us" width={24} height={22} />
              <Text fontWeight="normal">تواصل معنا</Text>
            </Button>
          </Flex>
        </Box>
      </GridItem>
    </>
  );
}
