"use client";
import Image from "next/image";
import facebook from "../../assets/facebook.png";
import discord from "../../assets/discord.png";
import x from "../../assets/x.png";
import youtube from "../../assets/youtube.png";
import instagram from "../../assets/instagram.png";
import tiktok from "../../assets/tiktok.png";
import threds from "../../assets/threds.png";
import linkedin from "../../assets/linkedin.png";

import { Grid, GridItem, Flex, Box, Text } from "@chakra-ui/react";
import useResponsiveStyles from "../../Hooks/useResponsiveStyles";
import CustomLine from "./CustomLine";

export default function SocialMedia() {
  const { textAlign, flexAlign } = useResponsiveStyles();
  return (
    <>
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
              <Image src={instagram} alt="Instagram" width={34} height={34} />
            </Grid>
          </Flex>
          <Text textAlign={textAlign} color="primary" mt={10}>
            انضم الآن إلى مجتمع المبرمجين في الأكاديمية وابدأ رحلتك نحو احتراف
            البرمجة!
          </Text>
        </Box>
      </GridItem>
    </>
  );
}
