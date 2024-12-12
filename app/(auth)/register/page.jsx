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
  Select,
  Checkbox
} from "@chakra-ui/react";

const Page = () => {
  const [step, setStep] = useState(1); // To track form step
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const [errors, setErrors] = useState({});

  const handleNext = () => {
    const newErrors = {};
    if (step === 1) {
      if (!email) newErrors.email = "يرجى إدخال البريد الإلكتروني.";
      if (!password || password.length < 6)
        newErrors.password = "يرجى إدخال كلمة مرور صالحة (أكثر من 6 أحرف).";
      if (password !== passwordConfirm)
        newErrors.passwordConfirm = "كلمات المرور غير متطابقة.";

      if (Object.keys(newErrors).length === 0) {
        setStep(2); // Move to step 2
      }
    } else if (step === 2) {
      if (!firstName) newErrors.firstName = "يرجى إدخال اسمك الأول.";
      if (!lastName) newErrors.lastName = "يرجى إدخال اسم العائلة.";
      if (!username) newErrors.username = "يرجى إدخال اسم المستخدم.";
      if (!country) newErrors.country = "يرجى اختيار بلد الإقامة.";
      if (!privacyAccepted)
        newErrors.privacyAccepted = "يرجى الموافقة على سياسة الخصوصية.";

      if (Object.keys(newErrors).length === 0) {
        alert("تم إدخال البيانات بنجاح!");
        reset();
      }
    }

    setErrors(newErrors); // Show errors if any
  };

  const reset = () => {
    setFirstName("");
    setLastName("");
    setUsername("");
    setCountry("");
    setEmail("");
    setPassword("");
    setPasswordConfirm("");
    setPrivacyAccepted(false);
    setStep(1); // Reset to step 1 after submission
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
            {step === 1
              ? "قم بإنشاء حسابك على الأكاديمية!"
              : "أنت على بعد خطوة واحدة فقط من الانضمام إلينا!"}
          </Heading>

          <VStack spacing={4} w="full">
            {step === 1 ? (
              <>
                <FormControl isRequired isInvalid={errors.email}>
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
                  {errors.email && (
                    <Text fontSize="xs" color="red.500" mt={1}>
                      {errors.email}
                    </Text>
                  )}
                </FormControl>

                <FormControl isRequired isInvalid={errors.password}>
                  <FormLabel>كلمة المرور</FormLabel>
                  <Input
                    type="password"
                    placeholder="قم بإنشاء كلمة مرور قوية"
                    rounded="md"
                    variant="outline"
                    borderColor="#A64DC7"
                    focusBorderColor="#783BA2"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {errors.password && (
                    <Text fontSize="xs" color="red.500" mt={1}>
                      {errors.password}
                    </Text>
                  )}
                </FormControl>

                <FormControl isRequired isInvalid={errors.passwordConfirm}>
                  <FormLabel>تأكيد كلمة المرور</FormLabel>
                  <Input
                    type="password"
                    placeholder="أعد إدخال كلمة المرور"
                    rounded="md"
                    variant="outline"
                    borderColor="#A64DC7"
                    focusBorderColor="#783BA2"
                    value={passwordConfirm}
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                  />
                  {errors.passwordConfirm && (
                    <Text fontSize="xs" color="red.500" mt={1}>
                      {errors.passwordConfirm}
                    </Text>
                  )}
                </FormControl>
              </>
            ) : (
              <>
                <FormControl isRequired isInvalid={errors.firstName}>
                  <FormLabel>الاسم الأول</FormLabel>
                  <Input
                    type="text"
                    placeholder="ادخل اسمك الأول"
                    rounded="md"
                    variant="outline"
                    borderColor="#A64DC7"
                    focusBorderColor="#783BA2"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  {errors.firstName && (
                    <Text fontSize="xs" color="red.500" mt={1}>
                      {errors.firstName}
                    </Text>
                  )}
                </FormControl>

                <FormControl isRequired isInvalid={errors.lastName}>
                  <FormLabel>الاسم الثاني</FormLabel>
                  <Input
                    type="text"
                    placeholder="ادخل اسمك الأخير"
                    rounded="md"
                    variant="outline"
                    borderColor="#A64DC7"
                    focusBorderColor="#783BA2"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  {errors.lastName && (
                    <Text fontSize="xs" color="red.500" mt={1}>
                      {errors.lastName}
                    </Text>
                  )}
                </FormControl>

                <FormControl isRequired isInvalid={errors.username}>
                  <FormLabel>اسم المستخدم</FormLabel>
                  <Input
                    type="text"
                    placeholder="اختر اسم مستخدم فريداً"
                    rounded="md"
                    variant="outline"
                    borderColor="#A64DC7"
                    focusBorderColor="#783BA2"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  {errors.username && (
                    <Text fontSize="xs" color="red.500" mt={1}>
                      {errors.username}
                    </Text>
                  )}
                </FormControl>

                <FormControl isRequired isInvalid={errors.country}>
                  <FormLabel>بلد إقامتك</FormLabel>
                  <Select
                    placeholder="اختر بلدك"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  >
                    <option value="السعودية">السعودية</option>
                    <option value="مصر">مصر</option>
                    <option value="الإمارات">الإمارات</option>
                    <option value="الكويت">الكويت</option>
                    <option value="قطر">قطر</option>
                  </Select>
                  {errors.country && (
                    <Text fontSize="xs" color="red.500" mt={1}>
                      {errors.country}
                    </Text>
                  )}
                </FormControl>

                <FormControl isRequired isInvalid={errors.privacyAccepted}>
                  <Checkbox
                    isChecked={privacyAccepted}
                    onChange={(e) => setPrivacyAccepted(e.target.checked)}
                  >
                    أوافق على سياسة الخصوصية الخاصة بنا
                  </Checkbox>
                  {errors.privacyAccepted && (
                    <Text fontSize="xs" color="red.500" mt={1}>
                      {errors.privacyAccepted}
                    </Text>
                  )}
                </FormControl>
              </>
            )}
          </VStack>

          <HStack w="full" justify="space-between">
            {step === 2 && (
              <Button
                bg="gray.300"
                color="black"
                w="full"
                onClick={() => setStep(1)}
              >
                رجوع
              </Button>
            )}
            <Button bg="#34A853" color="white" w="full" onClick={handleNext}>
              {step === 1 ? "التالي" : "إنشاء حسابي"}
            </Button>
          </HStack>
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default Page;
