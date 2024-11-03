"use client";
import { Flex, Text } from "@chakra-ui/react";
import arabacademy from "../../assets/arabacademy.png";
import Image from "next/image";
import useResponsiveStyles from "../../Hooks/useResponsiveStyles";
export default function RightsSection() {
  const { textAlign } = useResponsiveStyles();

  return (
    <>
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
    </>
  );
}
