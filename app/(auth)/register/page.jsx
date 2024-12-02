"use client";
import { useState } from "react";
import {
  ChakraProvider,
  Box,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Text,
  Button,
  HStack,
} from "@chakra-ui/react";

const Page = () => {
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const handleSubmit = async () => {
    //e.preventDefault();
    let hasError = false;
    console.log(" تم ادخال البيانات التالية :", { username, email, password });
  // Store data in DataBase
  const response = await fetch("api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, email, password }),
  });
  console.log("Response received from Back-end to Front-end. Object printed in console:", response);
if(response.ok){  console.log("Done!!!!All steps completed successfully. Response received from Back-end and printed in terminal.");
}
  if (!username) {
      setUsernameError(true);
      hasError = true;
    } else {
      setUsernameError(false);
    }

    if (!email) {
      setEmailError(true);
      hasError = true;
    } else {
      setEmailError(false);
    }
    if (!password || password.length < 6) {
      setPasswordError(true);
      hasError = true;
    } else {
      setPasswordError(false);
    }
    if (!hasError) {
      alert("تم إدخال البيانات بنجاح!");
      reset();
    }
  };

  return (
    <ChakraProvider>
      <Box
        bg="#fff"
        w="full"
        maxW="md"
        mx="auto"
        mt={10}
        p={5}
        borderRadius="lg"
        boxShadow="lg"
      >
        <VStack spacing={4} align="center" w="full">
          <Heading size="lg" textAlign="center" color="#713488">
            قم بإنشاء حسابك على الأكاديمية!
          </Heading>

          <VStack spacing={4} w="full">
            <FormControl isRequired isInvalid={usernameError}>
              <FormLabel>اسم المستخدم</FormLabel>
              <Input
                type="text"
                placeholder="اسم المستخدم"
                rounded="md"
                variant="outline"
                borderColor="#A64DC7"
                focusBorderColor="#783BA2"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {usernameError && (
                <Text fontSize="xs" color="red.500" mt={1}>
                  يرجى إدخال اسم المستخدم.
                </Text>
              )}
            </FormControl>
            <FormControl isRequired isInvalid={emailError}>
              <FormLabel>عنوان البريد الإلكتروني</FormLabel>
              <Input
                type="email"
                placeholder="عنوان البريد الإلكتروني"
                rounded="md"
                variant="outline"
                borderColor="#A64DC7"
                focusBorderColor="#783BA2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && (
                <Text fontSize="xs" color="red.500" mt={1}>
                  يرجى إدخال عنوان البريد الإلكتروني.
                </Text>
              )}
            </FormControl>

            <FormControl isRequired isInvalid={passwordError}>
              <FormLabel>كلمة المرور</FormLabel>
              <Input
                type="password"
                placeholder="كلمة المرور"
                rounded="md"
                variant="outline"
                borderColor="#A64DC7"
                focusBorderColor="#783BA2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            
            </FormControl>
            {/*
            <FormControl>
              <FormLabel>تأكيد كلمة المرور</FormLabel>
              <Input
                type="password"
                placeholder="تأكيد كلمة المرور"
                rounded="md"
                variant="outline"
                borderColor="#A64DC7"
                focusBorderColor="#783BA2"
              />
              <Text fontSize="xs" color="red.500" mt={1}>
                كلمات المرور غير متطابقة. يرجى المحاولة مرة أخرى.
              </Text>
            </FormControl>**/}
          </VStack>

          <HStack w="full" justify="space-between">
            <Button bg="#34A853" color="white" w="full" onClick={handleSubmit}>
              إنشاء حسابي
            </Button>
          </HStack>

          <Text fontSize="sm" color="gray.500">
            لديك حساب مسبقًا؟
          </Text>

          <Text fontSize="sm">يمكنك تسجيل الدخول باستخدام:</Text>
          <HStack spacing={4}>
            <Button bg="#DB4437" color="white" w="full">
              Google
            </Button>
            <Button bg="#3B5998" color="white" w="full">
              Facebook
            </Button>
          </HStack>
        </VStack>
      </Box>
    </ChakraProvider>
  );
};
export default Page;
