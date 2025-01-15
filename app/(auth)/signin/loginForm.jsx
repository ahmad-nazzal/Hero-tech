"use client";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  VStack,
  Heading,
  HStack,
  Image,
  ChakraProvider,
  Text,
  Checkbox
//Flex,
} from "@chakra-ui/react";
import ButtonAC from "../../../components/ButtonAC";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let newErrors = {};
    let isValid = true;

    if (!email) {
      newErrors.email = "يرجى إدخال البريد الإلكتروني.";
      isValid = false;
    } else if (!emailRegex.test(email)) {
      newErrors.email = "يرجى إدخال بريد إلكتروني صالح.";
      isValid = false;
    }

    if (!password) {
      newErrors.password = "يرجى إدخال كلمة المرور.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    const res = await signIn("signIn", {
      email,
      password,
      redirect: false,
    });

    if (res.ok) {
      router.push("/");
    } else {
      setErrors(prevErrors => ({ ...prevErrors, form: "بيانات تسجيل الدخول غير صحيحة. حاول مرة أخرى." }));
    }
    setLoading(false);
  };

  return (
    <ChakraProvider>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        h="100vh"
        w="100%"

      >
        <Box
          w="100%"
          maxW="900px"
          bg="white"
        //  p={6}
        pr={6}


boxShadow="0 2px 8px rgba(0, 0, 0, 0.35)"
display="flex"  // استخدام flex للتقسيم
justifyContent="space-between"  // لتوزيع المساحة بين الأقسام
alignItems="center"
>

        <VStack  m={5}  spacing={5} align="stretch" color="#783BA2">
            <Heading  fontSize="20px" textAlign="right" fontWeight="normal">
              {"تسجيل الدخول"}
            </Heading>

            <FormControl  isInvalid={!!errors.email}>
                  <FormLabel >
                  <Box fontSize="16px" display="flex" alignItems="center">
                      <Image
                        src="./icons/letter.svg"
                        alt="Email Icon"
                        h="16px"
                        w="20.7px"
                        mr={2}
                        ml={2}
                      />
                    اسم المستخدم أو البريد الإلكتروني<Text  >*</Text>
                    </Box>
                  
                    </FormLabel>
              <Input
                type="email"
               rounded="md"
               variant="outline"
               borderColor={errors.email ? "#DB4A39" : "#A64DC7"}
               focusBorderColor="#A067B6"
               errorBorderColor="#DB4A39"
               borderWidth={errors.email ? "0.0px" : "1px"}
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               color="#A067B6"
               _placeholder={{ color: "#A067B6" }}
              />
            {errors.email && (
                <Text fontSize="xs" color="red.500" mt={1}>
                  {errors.email}
                </Text>
              )}
            </FormControl>
            <FormControl isInvalid={!!errors.password}>
            <FormLabel >
            <Box fontSize="16px" display="flex" alignItems="center">
            <Image
                        src="./icons/key.svg"
                        alt="Pass Icon"
                        h="20px"
                        w="20px"
                        mr={2}
                        ml={2}
                      />
              كلمة المرور<Text  >*</Text>
              </Box>
              </FormLabel>
            
              <Input
                type="password"
                 rounded="md"
               variant="outline"
               borderColor={errors.password ? "#DB4A39" : "#A64DC7"}
               focusBorderColor="#A067B6"
               errorBorderColor="#DB4A39"
               borderWidth={errors.password ? "0.0px" : "1px"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                color="#A067B6"
                _placeholder={{ color: "#A067B6" }}
               />
              {errors.password && (
                <Text fontSize="xs" color="red.500" mt={1}>
                  {errors.password}
                </Text>
              )}
            </FormControl>
            {errors.form && (
              <Text fontSize="sm" color="red.500" mt={2}>
                {errors.form}
              </Text>
            )}
<Text fontSize="16px" textAlign="right" mt={2} mr={2} cursor="pointer">
    نسيت كلمة المرور؟
  </Text>
  <HStack  spacing={4} mt="-10px" mr="10px" mb="5px">
  <Checkbox
                    iconColor="#783BA2"
            
                    sx={{
                      ".chakra-checkbox__control": {
                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.35)",
                        border: "0.1px solid #783BA2",
                      },
                      ".chakra-checkbox__label": {
                        boxShadow: "none",
                      },
                    }}
                  >
      البقاء متصلاً
    </Checkbox>
  </HStack>
<HStack spacing={4} mt="-10px" mr="15px">
  
<ButtonAC
  isLoading={loading}
              loadingText="جارٍ تسجيل الدخول..."
              colorScheme="teal"
              width="full"
              mt={4}
              onClick={handleLogin}
alignSelf="center"

size="lg"
color="white"
bg="#00BE98"

text="تسجيل الدخول"
fontSize={{ lg: 15, sm: 10 }}
icon={
  <Image
    src="./images/log_in.png"
    alt="login Icon"
    style={{ width: "23px", height: "26px" }}
  />
}
href="/signin"
marginTop={{ lg: 0 }}
sx={{
  boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
  width: { sm: "137px", lg: "200px" },
  height: { sm: "50px", lg: "50px" },
  "@media (max-width: 745px) and (min-width: 480px)": {
    width: "120px",
    height: "45px",

  },
}}
/>
            <ButtonAC
                  alignSelf="center"
                
                  size="lg"
                  bg="tomato"
                color="white"
                  text="إنشاء حساب جديد"
                  
                  variant="outline"
                  w="full"
                  mt={4}
                  fontSize={{ lg: 15, sm: 10 }}
        
                  icon={
                    <Image
                    //  src={registerlogo}
                      src="./images/profile_circled.png"
                      alt="Register Icon"
                      style={{ width: "25px", height: "25px" }}
                    />
                  }
                  href="/register"
                  marginTop={{ lg: 0 }}
                  sx={{
                    boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
                    width: { sm: "140px", lg: "200px" },
                    height: { sm: "50px", lg: "50px" },
                    "@media (max-width: 745px) and (min-width: 480px)": {
                      width: "120px",
                      height: "45px",
                    
                    },
                  }}
                />


            </HStack>


            <Text color="#713488"  textAlign="center">
              يمكنك تسجيل الدخول باستخدام
            </Text>
            <HStack spacing={4} mt="-10px" mr="80px">
              <Button
                backgroundColor="#3566A5"
                color="white"
                h="45px"
                w="135px"
                  fontSize="17px"
                onClick={() => handleSocialLogin("facebook")}
                _hover={{ bg: "#2a4d7f" }}
                borderRadius="5px"
                boxShadow="0px 6px 4px -2px rgba(0, 0, 0, 0.3)"
              >
                <HStack spacing={2} alignItems="center">
                  <Text>Facebook</Text>
                  <Box height="49px" width="0.5px" bg="white"></Box>{" "}
                  <Image
                    src="./icons/facebook-f.svg"
                    alt="Facebook Icon"
                    w="18px"
                    h="21px"
                  />
                </HStack>
              </Button>
              <Button
                backgroundColor="#DB4A39"
                color="white"
                h="45px"
                w="135px"
                fontSize="17px"
                pr={-2}
                onClick={() => signIn("google", { callbackUrl: "/" })}
                _hover={{ bg: "#b3362a" }}
                borderRadius="5px"
                boxShadow="0px 6px 4px -2px rgba(0, 0, 0, 0.3)"
              >
                <HStack spacing={2} alignItems="center">
                  <Text ml="8px">Google</Text>
                  <Box height="49px" width="0.5px" bg="white"></Box>{" "}
                  <Image
                    ml={-7}
                    src="./icons/google-plus-g.svg"
                    alt="Google Icon"
                    w="30px"
                    h="19px"
                  />
                </HStack>
              </Button>
            </HStack>

          
          </VStack>
          <Box h="100%"  >
    <Image
      src="/images/login-img.png"  
      alt="Login Image"
      w="100%"
    h="full"
    />
  </Box>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default LoginForm;