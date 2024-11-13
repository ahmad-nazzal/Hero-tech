import Image from "next/image";

import ButtonAC from "../../components/ButtonAC";
import { Flex, List, Grid, GridItem, ListItem } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import registerlogo from "../../public/images/🦆 icon _profile circled_.png";
import loginlogo from "../../public/images/🦆 icon _log in_.png";

const Header = () => {
  return (
    <Flex
      bg="#783BA2"
      justifyContent="space-between"
      color="white"
      alignItems="center"
    >
      <Grid
        templateColumns={{ sm: "1fr 1fr 1fr", lg: "1fr 2fr 1fr" }}
        gap={0}
        alignItems="center"
        width="100%"
        pl={77}
        height={100}
      >
        <GridItem >
          <Image
            src="/images/8e6c847871186b9180f5ae9f99b6bcbc.png"
            width={280}
            height={66}
            style={{ margin: "10px 50px" }}
            alt="Logo"
          />
        </GridItem>
        <GridItem marginRight="390px">
          <List
            display="flex"
            gap="40px"
            justifyContent="center"
            fontWeight="bold"
            sx={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            <ListItem>
              <NavLink to="/sources">المصادر</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="/education-paths">المسارات التعليمية</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="/contact">التواصل</NavLink>
            </ListItem>
          </List>
        </GridItem>
        <GridItem
          display="flex"
          justifyContent="center"
          gap={45}
          marginRight="253px"
        >
          <ButtonAC
            alignSelf="center"
            mt={8}
            sizeVariant="lg"
            color="white"
            bg="secondary"
            text="إنشاء حساب"
            fontSize={22}
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
              width: "200px",
              height: "60px",
            }}
          />
          <ButtonAC
            alignSelf="center"
            mt={8}
            sizeVariant="lg"
            color="white"
            bg="tomato"
            text="تسجيل الدخول"
            fontSize={20}
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
              width: "200px",
              height: "60px",
            }}
          />
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default Header;
