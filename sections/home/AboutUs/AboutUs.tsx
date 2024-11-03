import { Box, Container, Grid, GridItem, Image } from "@chakra-ui/react";
import aboutus from "../../../public/images/aboutus.png";
import masaratlogo from "../../../public/images/masaratlogo.png";
import CustomBox from "../../../components/CustomBox";
import Button from "../../../components/Button";

export default function AboutUs() {
  return (
    <Box as="section" minH="100vh" bg="white" pt={20} overflow="hidden">
      <Grid
        templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
        height="100%"
        alignItems="center"
        justifyContent="center"
        gap={10}
        maxW={{ base: "100%", lg: "1200px" }}
        mx="auto"
        px={{ base: 8, sm: 10, lg: 0 }}
      >
        <GridItem flexGrow={1} flexShrink={0}>
          <Box
            width={{ base: "100%", lg: "auto" }}
            height="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            px={{ base: 6, sm: 8 }}
          >
            <Image
              src={aboutus.src}
              alt="About us"
              objectFit="contain"
              maxH={{ base: "auto", lg: "650px" }}
              maxW="100%"
              zIndex={1}
              borderRadius="md"
            />
          </Box>
        </GridItem>

        <GridItem flexGrow={1} flexShrink={0}>
          <Box
            height="100%"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            textAlign={{ base: "center", lg: "left" }}
            p={{ base: 8, sm: 10, lg: 0 }}
          >
            <Container
              maxW="1200px"
              width="100%"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              gap={3}
              p={{ base: 4, sm: 6 }}
            >
              <CustomBox
                title="الأكاديمية العربية للبرمجة"
                description="الأكاديمية العربية للبرمجة تقدم تجربة تعليمية مميزة وفريدة تركز على إنتاج فيديوهات تعليمية بعناصر تفاعلية وشاملة تناسب جميع الفئات العمرية والمستويات. نسعى لتمكين كل فرد من تعلم البرمجة بطريقة مبسطة وممتعة، مع مراعاة احتياجات المتعلمين وتقديم محتوى يلهمهم للتفوق والإبداع. سواء كنت مبتدئًا أو محترفًا، ستجد لدينا ما يلهمك ويطور مهاراتك في عالم البرمجة، مع دعم مستمر وموارد غنية تواكب أحدث التقنيات والأساليب التعليمية."
                bg="white"
                p={10}
                opacity={0.9}
              >
                <Button
                  alignSelf={"center"}
                  mt={8}
                  sizeVariant="lg"
                  color={"white"}
                  bg={"secondary"}
                  text="المسارات التعليمية"
                  icon={masaratlogo}
                ></Button>
              </CustomBox>
            </Container>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
}
