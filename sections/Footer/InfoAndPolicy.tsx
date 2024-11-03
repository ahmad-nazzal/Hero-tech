"use client";
import { Box, Button, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import CustomLine from "./CustomLine";
import Image from "next/image";
import useResponsiveStyles from "../../Hooks/useResponsiveStyles";
import masaratlogo from "../../public/images/masaratlogo.png";

export default function InfoAndPolicy() {
  const { infoColumns, textAlign, flexAlign } = useResponsiveStyles();

  return (
    <>
      <GridItem
        display="flex"
        flexDirection="column"
        alignItems={flexAlign}
        w="100%"
        px={{ base: 4, md: 0 }}
      >
        <Grid
          templateColumns={infoColumns}
          gap={{ base: 6, md: 20 }}
          justifyContent="center"
          alignItems="center"
          width="100%"
          maxW={{ base: "100%", md: "600px" }}
        >
          {/* "معلومات" section */}
          <Box width="100%">
            <Text
              fontSize="heading2"
              fontWeight="bold"
              color="white"
              textAlign={textAlign}
            >
              معلومات
            </Text>
            <CustomLine
              width="130px"
              bg="white"
              marginBottom={8}
              marginTop={3}
              mx={textAlign === "center" ? "auto" : "0"}
            />
            <Flex direction="column" alignItems={flexAlign} gap={4}>
              <Text color="white">المساعدة والدعم</Text>
              <Text color="white">رسالة الاكاديمية</Text>
              <Text color="white">حول الاكاديمية</Text>
            </Flex>
          </Box>

          {/* "السياسات" section */}
          <Box width="100%">
            <Text
              fontSize="heading2"
              fontWeight="bold"
              color="white"
              textAlign={textAlign}
            >
              السياسات
            </Text>
            <CustomLine
              width="130px"
              bg="white"
              marginBottom={8}
              marginTop={3}
              mx={textAlign === "center" ? "auto" : "0"}
            />
            <Flex direction="column" alignItems={flexAlign} gap={4}>
              <Text color="white">سياسة الاستخدام</Text>
              <Text color="white">سياسة الخصوصية</Text>
              <Text color="white">اخلاء مسؤولية</Text>
            </Flex>
          </Box>
        </Grid>

        {/* Button for المسارات التعليمية */}
        <Box
          mt={{ base: 8, lg: "100px" }}
          width="100%"
          display={{ base: "block", lg: "none" }} // Show on small screens, hide on large screens
        >
          <Button
            bg="secondary"
            size="lg"
            width={{ base: "100%", md: "auto", lg: "auto" }}
            height="80px"
            color="white"
            _hover={{ bg: "secondaryDark" }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap="10px"
            mx={textAlign === "center" ? "auto" : "0"}
          >
            <Image
              src={masaratlogo}
              alt="logo"
              width={40}
              height={40}
              style={{ objectFit: "contain" }}
              unoptimized
            />
            <Text fontSize="lg" fontWeight="bold">
              المسارات التعليمية
            </Text>
          </Button>
        </Box>
      </GridItem>
    </>
  );
}
