"use client";
import { Grid, Box } from "@chakra-ui/react";
import InfoAndPolicy from "./InfoAndPolicy";
import Contact from "./Contact";
import SocialMedia from "./SocialMedia";
import Sources from "./Sources";
import RightsSection from "./RightsSection";
import useResponsiveStyles from "../../Hooks/useResponsiveStyles";

export default function Footer() {
  const { columns } = useResponsiveStyles();

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
          <InfoAndPolicy></InfoAndPolicy>

          {/*  contact us section  */}
          <Contact></Contact>

          {/* social media section */}
          <SocialMedia></SocialMedia>
        </Grid>

        {/*  sources section */}

        <Sources></Sources>
        {/* rigts section   */}
        <RightsSection></RightsSection>
      </Box>
    </Box>
  );
}
