import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Hide,
  Text,
} from "@chakra-ui/react";
import CustomLine from "./CustomLine";
import Image from "next/image";
import useResponsiveStyles from "@/app/Hooks/useResponsiveStyles";
import masaratlogo from "../../assets/masaratlogo.png";

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

        {/* the button for  المسارات التعليمية */}
        <Hide breakpoint="(min-width: 700px) and (max-width: 1300px)">
          <Box mt={{ base: 8, lg: "100px" }} width="100%">
            <Button
              bg="secondary"
              size="lg"
              width={{ base: "100%", md: "none", lg: "none" }}
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
        </Hide>
      </GridItem>
    </>
  );
}
