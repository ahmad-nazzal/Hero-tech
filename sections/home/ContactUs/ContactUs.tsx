import { Box, Container } from "@chakra-ui/react"; // Keep only this import
import contactus from "../../../public/images/contactus.png";
import CustomBox from "../../../components/CustomBox";
import Button from "../../../components/Button";
import vector from "../../../public/images/vector.png";

function ContactUs() {
  return (
    <Box
      as="section"
      minH="100vh"
      bg="white"
      p={10}
      backgroundImage={`url(${contactus.src})`}
      backgroundSize={"cover"}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      display="flex"
      alignItems="center"
      justifyContent={{ base: "center", lg: "flex-end" }}
    >
      <Container
        maxW="1200px"
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems={{ base: "center", lg: "flex-end" }}
        gap={10}
      >
        <Box
          display="flex"
          flexDirection="column"
          gap={6}
          maxW="600px"
          width="100%"
          alignItems={{ base: "center", lg: "flex-end" }}
        >
          <CustomBox
            z-index={1}
            bg="rgba(255, 255, 255, 0.9)"
            title="أدوات تفاعلية والعاب تعليمية"
            description="تتميز الأكاديمية العربية للبرمجة بتطوير أدوات تفاعلية وألعاب تعليمية مبتكرة باستخدام أساليب الـتلعيب Gamification، مما يجعل عملية التعلم أكثر متعة وجاذبية. نقدم حلولًا مخصصة تلبي احتياجات المؤسسات والشركات، حيث نساعد في تصميم تجارب تعليمية تفاعلية تعزز من تفاعل المستخدمين وتحفزهم على التعلم بطرق غير تقليدية. سواء كنت تبحث عن تطوير مهارات فريق العمل أو تقديم تجربة تعليمية فريدة لعملائك، الأكاديمية العربية للبرمجة هي شريكك المثالي لتحقيق هذه الأهداف بنجاح."
            minH="50vh"
          >
            <Box z-index={2}>
              <Button
                text="تواصل معنا  "
                icon={vector}
                alignSelf={"center"}
                sizeVariant="md"
                fontWeight={"500"}
                fontSize={"18px"}
                bg={"secondary"}
                color={"white"}
                mt={8}
              />
            </Box>
          </CustomBox>
        </Box>
      </Container>
    </Box>
  );
}

export default ContactUs;
