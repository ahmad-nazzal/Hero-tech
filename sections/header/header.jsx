import ButtonAC from "../../components/ButtonAC";
import Image from "next/image";
import registerlogo from "../../public/images/profile_circled.png";
import loginlogo from "../../public/images/log_in.png";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  List,
  ListItem,
  Image as ChakraImage,
} from "@chakra-ui/react";
import Link from "next/link";

const Header = () => {
  return (
    <Box>
      {/* Desktop & Tablet Header */}
      <Flex
        bg="#783BA2"
        justifyContent="space-between"
        color="white"
        alignItems="center"
      >
        <Grid
          templateColumns={{
            base: "1fr 1fr",
            md: "1fr 2fr 1fr",
            sm: "1fr 2fr 1fr",
            lg: "1fr 2fr 1fr",
          }}
          alignItems="center"
          width="100%"
          height={{ lg: 100, sm: 100, base: 59 }}
        >
          <GridItem>
            <ChakraImage
              src="/images/8e6c847871186b9180f5ae9f99b6bcbc.png"
              width={{ base: 10.48, sm: 200, lg: 280 }}
              height={{ base: 1, sm: 34.2, lg: 61.79 }}
              alt="Logo"
              marginRight={{ lg: 97, sm: 2, base: 0 }}
            />
          </GridItem>
          <GridItem display="flex" justifyContent="center" alignItems="center">
            <List
              display="flex"
              gap={{ lg: "40px", md: "40px", sm: "10px" }}
              justifyContent="center"
              fontWeight="bold"
              fontSize={{ base: "12px", lg: "16px" }}
              sx={{
                "@media (max-width: 745px) and (min-width: 480px)": {
                  fontSize: "10px",
                },
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              }}
            >
              <ListItem>
                <Link
                  href="/sources"
                  style={{ display: "flex", alignItems: "center", gap: "3px" }}
                >
                  <ChakraImage
                    src="/images/Polygon 2.png"
                    alt="Dropdown Arrow Icon"
                    style={{ width: "12px", height: "10px", marginTop: "3px" }}
                  />
                  المصادر
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/education-paths">المسارات التعليمية</Link>
              </ListItem>
              <ListItem>
                <Link href="/contact">التواصل</Link>
              </ListItem>
            </List>
          </GridItem>
          <GridItem
            display="flex"
            justifyContent="left"
            gap={{ lg: 45, md: 5, sm: 3 }}
            marginLeft={{ lg: "75px", md: "20px", sm: "20px" }}
          >
            <ButtonAC
              alignSelf="center"
              mt={8}
              size="lg"
              color="white"
              bg="secondary"
              text="إنشاء حساب"
              fontSize={{ lg: 22, sm: 12 }}
              icon={
                <Image
                  src={registerlogo}
                  alt="Register Icon"
                  style={{ width: "30px", height: "30px" }}
                />
              }
              href="/register"
              marginTop={{ lg: 0 }}
              sx={{
                boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
                width: { sm: "140px", lg: "200px" },
                height: { sm: "50px", lg: "60px" },
                "@media (max-width: 745px) and (min-width: 480px)": {
                  width: "120px",
                  height: "45px",
                  fontSize: "8px",
                },
              }}
            />
            <ButtonAC
              alignSelf="center"
              mt={8}
              size="lg"
              color="white"
              bg="tomato"
              text="تسجيل الدخول"
              fontSize={{ lg: 20, sm: 10 }}
              icon={
                <Image
                  src={loginlogo}
                  alt="login Icon"
                  style={{ width: "25.71px", height: "30px" }}
                />
              }
              href="/signin"
              marginTop={{ lg: 0 }}
              sx={{
                boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
                width: { sm: "137px", lg: "200px" },
                height: { sm: "50px", lg: "60px" },
                "@media (max-width: 745px) and (min-width: 480px)": {
                  width: "120px",
                  height: "45px",
                  fontSize: "8px",
                },
              }}
            />
          </GridItem>
        </Grid>
      </Flex>
            
    </Box>
  );
};

export default Header;
