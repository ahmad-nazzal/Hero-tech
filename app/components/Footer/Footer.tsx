import {
  Grid,
  GridItem,
  Box,
  Text,
  Button,
  Flex,
  useBreakpointValue,
  Hide,
} from "@chakra-ui/react";
import CustomLine from "./CustomLine";
import Image from "next/image";
import discord from "../../assets/discord.png";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import linkedin from "../../assets/linkedin.png";
import threds from "../../assets/threds.png";
import tiktok from "../../assets/tiktok.png";
import x from "../../assets/x.png";
import youtube from "../../assets/youtube.png";
import location from "../../assets/location.png";
import tele from "../../assets/tele.png";
import msg from "../../assets/msg.png";
import masaratlogo from "../../assets/masaratlogo.png";
import arabacademy from "../../assets/arabacademy.png";
import vector from "../../assets/Vector.png";

export default function Footer() {
  const columns = useBreakpointValue({
    base: "1fr",
    md: "1fr",
    lg: "repeat(3, 1fr)",
  });

  const infoColumns = useBreakpointValue({
    base: "1fr",
    md: "repeat(2, minmax(200px, 1fr))",
    lg: "repeat(2, 1fr)",
  });

  const resourceColumns = useBreakpointValue({
    base: "1fr",
    md: "repeat(2, 1fr)",
    lg: "repeat(4, 1fr)",
  });

  const textAlign = useBreakpointValue({
    base: "center",
    md: "center",
    lg: "start",
  });

  const flexAlign = useBreakpointValue({
    base: "center",
    md: "center",
    lg: "flex-start",
  });

  return (
    <Box
      as="footer"
      bg="primary"
      py={20}
      w="100%"
      minW="100%"
      overflowX="hidden"
    >
      <Box maxW="1200px" mx="auto" px={{ base: 0, md: 6 }} w="100%">
        <Grid
          templateColumns={columns}
          gap={{ base: 4, md: 8, lg: 4 }}
          justifyContent="center"
          alignItems="center"
          w="100%"
        >
          {/*  information and policies section  */}
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
            <Hide breakpoint="(min-width: 1200px) and (max-width: 1399px)">
              <Box mt={{ base: 8, lg: "100px" }} width="100%">
                <Button
                  bg="secondary"
                  size="lg"
                  width={{ base: "100%", md: "350px" }}
                  height="90px"
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

          {/*  contact us section  */}
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
                  onClick={() => alert("تواصل معنا عبر الهاتف: +447918713367")}
                  mx={textAlign === "center" ? "auto" : "0"}
                >
                  <Image src={vector} alt="call us" width={24} height={22} />
                  <Text fontWeight="normal">تواصل معنا</Text>
                </Button>
              </Flex>
            </Box>
          </GridItem>

          {/* social media section */}
          <GridItem width="100%" px={{ base: 4, md: 0 }}>
            <Box
              w="100%"
              maxW={{ base: "100%", md: "400px" }}
              p={6}
              bg="white"
              borderRadius="5px"
              color="primary"
              mx="auto"
              height="auto"
              minHeight="400px"
            >
              <Text textAlign={textAlign} fontWeight="bold" mb={4}>
                مواقع التواصل الاجتماعي
              </Text>
              <CustomLine
                width="70%"
                bg="primary"
                marginBottom={8}
                mx={textAlign === "center" ? "auto" : "0"}
              />
              <Flex direction="column" gap={6} alignItems={flexAlign}>
                <Grid
                  templateColumns="repeat(4, 1fr)"
                  gap={4}
                  justifyContent="center"
                  width="100%"
                  maxW="300px"
                >
                  <Image src={facebook} alt="Facebook" width={32} height={32} />
                  <Image src={discord} alt="Discord" width={33} height={33} />
                  <Image src={youtube} alt="YouTube" width={40} height={40} />
                  <Image src={x} alt="X" width={32} height={32} />
                </Grid>
                <Grid
                  templateColumns="repeat(4, 1fr)"
                  gap={4}
                  justifyContent="center"
                  width="100%"
                  maxW="300px"
                >
                  <Image src={tiktok} alt="TikTok" width={36} height={36} />
                  <Image src={threds} alt="Threads" width={33} height={32} />
                  <Image src={linkedin} alt="LinkedIn" width={34} height={34} />
                  <Image
                    src={instagram}
                    alt="Instagram"
                    width={34}
                    height={34}
                  />
                </Grid>
              </Flex>
              <Text textAlign={textAlign} color="primary" mt={10}>
                انضم الآن إلى مجتمع المبرمجين في الأكاديمية وابدأ رحلتك نحو
                احتراف البرمجة!
              </Text>
            </Box>
          </GridItem>
        </Grid>

        {/*  sources section */}
        <Box mt={10} px={{ base: 4, md: 0 }}>
          <Text
            fontSize="heading2"
            fontWeight="bold"
            color="white"
            textAlign={textAlign}
          >
            المصادر
          </Text>
          <CustomLine
            width="130px"
            bg="white"
            marginBottom={4}
            marginTop={2}
            mx={textAlign === "center" ? "auto" : "0"}
          />
          <Grid
            templateColumns={resourceColumns}
            gap={4}
            mt={10}
            width="100%"
            justifyContent="center"
          >
            {[
              "المدونة",
              "المنتدى",
              "قاموس الكلمات",
              "دروس فيديو قصيرة",
              "ادوات ذكاء اصطناعي",
              "بنك اسئلة تقنية",
              "لغة ضاد",
              "دروس وانماط الميد جورني",
            ].map((source, index) => (
              <Box
                key={index}
                padding={4}
                border="1px solid #fff"
                borderRadius="5px"
                color="white"
                textAlign={textAlign}
                height="100%"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                {source}
              </Box>
            ))}
          </Grid>
          <CustomLine width="100%" bg="white" marginTop={10} />
        </Box>

        {/* rigts section   */}
        <Flex
          justifyContent={{ base: "center", md: "space-between" }}
          mt={10}
          color="white"
          flexDirection={{ base: "column", md: "row" }}
          alignItems="center"
          gap={{ base: 4, md: 0 }}
          px={{ base: 4, md: 0 }}
        >
          <Image
            src={arabacademy}
            alt="Arab Academy Logo"
            width={80}
            height={50}
            style={{ objectFit: "contain" }}
          />
          <Text textAlign={textAlign}>
            جميع الحقوق محفوظة © {new Date().getFullYear()} الأكاديمية العربية
            للبرمجة
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}
