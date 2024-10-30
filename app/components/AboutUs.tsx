import {
  Box,
  Grid,
  GridItem,
  Text,
  Image,
  Button,
  HStack,
} from "@chakra-ui/react";
import aboutus from "../assets/aboutus.png";
import masaratlogo from "../assets/masaratlogo.png";

export default function AboutUs() {
  return (
    <Box as="section" height="100vh" bg="white" p={10}>
      <Grid
        templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
        height="100%"
        alignItems="center"
        gap={10}
        maxW="1200px"
        mx="auto"
      >
        {/* Section for Image */}
        <GridItem>
          <Box
            width={{ base: "100%", lg: "auto" }}
            height="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Image
              src={aboutus.src}
              alt="About us"
              objectFit="contain"
              maxH={{ base: "auto", lg: "650px" }}
              maxW="100%"
            />
          </Box>
        </GridItem>

        {/* Section for Text */}
        <GridItem>
          <Box
            height="100%"
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Box
              bg="white"
              p={8}
              borderWidth={{ base: 1, lg: 0 }}
              borderColor="primary"
              boxShadow={{
                base: "lg",
                lg: "-4px -4px 6px rgba(0, 0, 0, 0.1), 4px 4px 6px rgba(0, 0, 0, 0.1), 0 8px 12px rgba(0, 0, 0, 0.1)",
              }}
              rounded="lg"
            >
              <Text
                fontSize="2xl"
                fontWeight="bold"
                color="primary"
                mb={{ base: 6, md: 10, lg: 20 }}
              >
                التجربة التعليمية في الأكاديمية العربية للبرمجة
              </Text>
              <Text fontSize="lg" fontWeight="500" color="primary">
                الأكاديمية العربية للبرمجة تقدم تجربة تعليمية مميزة وفريدة تركز
                على إنتاج فيديوهات تعليمية بعناصر تفاعلية وشاملة تناسب جميع
                الفئات العمرية والمستويات. نسعى لتمكين كل فرد من تعلم البرمجة
                بطريقة مبسطة وممتعة، مع مراعاة احتياجات المتعلمين وتقديم محتوى
                يلهمهم للتفوق والإبداع. سواء كنت مبتدئًا أو محترفًا، ستجد لدينا
                ما يلهمك ويطور مهاراتك في عالم البرمجة، مع دعم مستمر وموارد غنية
                تواكب أحدث التقنيات والأساليب التعليمية.
              </Text>
            </Box>

            {/* Centered Button with Logo and Text */}
            <Button
              alignSelf="center"
              w={250}
              h={70}
              bg="secondary"
              color="white"
              mt={10}
              fontWeight="900"
            >
              <HStack spacing={2} justifyContent="center" alignItems="center">
                <Image
                  src={masaratlogo.src}
                  alt="مسارات"
                  objectFit="contain"
                  w={47}
                  h={38}
                />
                <Text>المسارات التعليمية</Text>
              </HStack>
            </Button>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
}
