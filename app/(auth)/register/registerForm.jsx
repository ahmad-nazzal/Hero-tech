"use client";
import {
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Text,
  Select,
  Checkbox,
  Button,
  Box,
  Heading,
  HStack,
  Image,
  ChakraProvider,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@chakra-ui/react";

const RegisterForm = () => {
  const router = useRouter();
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [country, setCountry] = useState("");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
    let isValid = true;

    if (!emailRegex.test(email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        emailError: "الايميل غير صالح",
      }));
      isValid = false;
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        emailError: undefined,
      }));
    }

    if (!passwordRegex.test(password)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        passwordError:
          "كلمة المرور يجب أن تحتوي على حرف كبير، رقم، وطول 6 أحرف على الأقل",
      }));
      isValid = false;
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        passwordError: undefined,
      }));
    }

    if (password !== passwordConfirm) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        passwordConfirmError: "لا يوجد تطابق في كلمة السر",
      }));
      isValid = false;
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        passwordConfirmError: undefined,
      }));
    }

    return isValid;
  };

  const handleNextAction = async () => {
    if (step === 1) {
      if (validate()) {
        setStep(2);
      }
    } else if (step === 2) {
      const newErrors = {};
      if (!firstName) newErrors.firstName = "يرجى إدخال اسمك الأول.";
      if (!lastName) newErrors.lastName = "يرجى إدخال اسم العائلة.";
      if (!username) newErrors.username = "يرجى إدخال اسم المستخدم.";
      if (!country) newErrors.country = "يرجى اختيار بلد الإقامة.";
      if (!privacyAccepted)
        newErrors.privacyAccepted = "يرجى الموافقة على سياسة الخصوصية.";

      if (Object.keys(newErrors).length === 0) {
        setLoading(true);

        const checkResponse = await fetch("/api/userExist", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });
        const checkData = await checkResponse.json();

        if (checkData.exists) {
          setErrors({
            ...errors,
            emailError:
              "عنوان البريد الإلكترونى هذا مسجل بالفعل. حاول تسجيل الدخول باستخدام بريدًا إلكترونيًا مختلفًا",
          });

          reset();
          setLoading(false);
          return;
        } else {
          const userData = {
            email,
            password,
            firstName,
            lastName,
            username,
            country,
          };

          const response = await fetch("/api/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData),
          });
          if (response.ok) {
            toast({
              title: "تمت العملية بنجاح",
              description: "تمت عمليات التسجيل بنجاح!",
              status: "success",
              duration: 5000,
              isClosable: true,
            });
            if (router) router.push("/signin");
            reset();
          } else {
            toast({
              title: "خطأ في التسجيل",
              description: "حدث خطئ اثناء عمليات الارسال.",
              status: "error",
              duration: 5000,
              isClosable: true,
            });
          }
        }
      }

      setErrors(newErrors);
      setLoading(false);
    }
  };

  const reset = () => {
    setFirstName("");
    setLastName("");
    setUsername("");
    setCountry("");
    setPassword("");
    setPasswordConfirm("");
    setPrivacyAccepted(false);
    setStep(1);
  };

  return (
    <ChakraProvider>
      <Box
        bg="#fff"
        w="full"
        width="800px"
        height="900px"
        mx="auto"
        mt={290}
        mb={225}
        p={5}
        borderRadius="lg"
        boxShadow="0 2px 8px rgba(0, 0, 0, 0.35)"
      >
        <VStack spacing={10} w="full" align="right" mt="35px">
          <Heading
            fontSize="23px"
            fontWeight="bold"
            color="#783BA2"
            textAlign="right"
            mr={8}
          >
            {step === 1 ? (
              <Box textAlign="right">قم بإنشاء حسابك على الأكاديمية!</Box>
            ) : (
              <VStack spacing={3} align="stretch">
                <Box textAlign="right">
                  أنت على بعد خطوة واحدة فقط من الانضمام إلينا!
                </Box>
                <Box textAlign="right">أنشئ ملف التعريف الخاص بك</Box>
              </VStack>
            )}
          </Heading>

          <VStack color="#783BA2" mt={9} spacing="44px" width="88%" mr={8}>
            {step === 1 ? (
              <>
                <FormControl isInvalid={errors.emailError}>
                  <FormLabel fontSize="18px">
                    <Box display="flex" alignItems="center">
                      <Image
                        src="./icons/letter.svg"
                        alt="Email Icon"
                        h="16px"
                        w="20.7px"
                        mr={2}
                        ml={2}
                      />
                      عنوان البريد الإلكتروني
                    </Box>
                  </FormLabel>
                  <Input
                    fontSize="16px"
                    type="email"
                    placeholder="لن نشارك بريدك الإلكتروني أبدًا مع أي شخص"
                    rounded="md"
                    height="54px"
                    variant="outline"
                    borderColor={errors.emailError ? "#DB4A39" : "#A64DC7"}
                    focusBorderColor="#A067B6"
                    errorBorderColor="#DB4A39"
                    borderWidth={errors.emailError ? "0.0px" : "1px"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    color="#A067B6"
                    _placeholder={{ color: "#A067B6" }}
                  />
                  {errors.emailError && (
                    <FormErrorMessage color="#DB4A39">
                      {errors.emailError}
                    </FormErrorMessage>
                  )}
                </FormControl>

                <FormControl isInvalid={errors.passwordError}>
                  <FormLabel fontSize="18px">
                    <Box display="flex" alignItems="center">
                      <Image
                        src="./icons/key.svg"
                        alt="Pass Icon"
                        h="20px"
                        w="22px"
                        mr={2}
                        ml={2}
                      />
                      كلمة المرور
                    </Box>
                  </FormLabel>
                  <Input
                    fontSize="16px"
                    type="password"
                    height="54px"
                    placeholder="قم بإنشاء كلمة مرور قوية"
                    rounded="md"
                    variant="outline"
                    borderColor="#A64DC7"
                    focusBorderColor="#783BA2"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    color="#A067B6"
                    _placeholder={{ color: "#A067B6" }}
                  />
                  {errors.passwordError && (
                    <Text fontSize="xs" color="red.500" mt={1}>
                      {errors.passwordError}
                    </Text>
                  )}
                </FormControl>

                <FormControl isInvalid={errors.passwordConfirmError}>
                  <FormLabel fontSize="18px">
                    <Box display="flex" alignItems="center">
                      <Image
                        src="./icons/key.svg"
                        alt="Pass Icon"
                        h="20px"
                        w="22px"
                        mr={2}
                        ml={2}
                      />
                      تأكيد كلمة المرور
                    </Box>
                  </FormLabel>
                  <Input
                    fontSize="16px"
                    type="password"
                    height="54px"
                    placeholder="أعد إدخال كلمة المرور الخاصة بك للتأكد من مطابقتها"
                    rounded="md"
                    variant="outline"
                    borderColor="#A64DC7"
                    focusBorderColor="#783BA2"
                    value={passwordConfirm}
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                    color="#A067B6"
                    _placeholder={{ color: "#A067B6" }}
                  />
                  {errors.passwordConfirmError && (
                    <Text fontSize="xs" color="red.500" mt={1}>
                      {errors.passwordConfirmError}
                    </Text>
                  )}
                </FormControl>
              </>
            ) : (
              <>
                <HStack width="100%" spacing={4} mt={-4}>
                  <FormControl isInvalid={errors.firstName}>
                    <FormLabel fontSize="18px">
                      <Box display="flex" alignItems="center">
                        <Image
                          src="./icons/user-check.svg"
                          alt="First Name Icon"
                          h="16px"
                          w="20.75px"
                          mr={2}
                          ml={2}
                        />
                        الاسم الأول
                      </Box>
                    </FormLabel>
                    <Input
                      height="54px"
                      fontSize="16px"
                      type="text"
                      placeholder="ادخل اسمك الأول"
                      rounded="md"
                      variant="outline"
                      borderColor="#A64DC7"
                      focusBorderColor="#783BA2"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      color="#A067B6"
                      _placeholder={{ color: "#A067B6" }}
                    />
                    {errors.firstName && (
                      <Text fontSize="xs" color="red.500" mt={1}>
                        {errors.firstName}
                      </Text>
                    )}
                  </FormControl>

                  <FormControl isInvalid={errors.lastName}>
                    <FormLabel fontSize="18px">
                      <Box display="flex" alignItems="center">
                        <Image
                          src="./icons/user-check.svg"
                          alt="Last Name Icon"
                          h="16px"
                          w="20.75px"
                          mr={2}
                          ml={2}
                        />
                        الاسم الثاني
                      </Box>
                    </FormLabel>
                    <Input
                      height="54px"
                      fontSize="16px"
                      type="text"
                      placeholder="ادخل اسمك الأخير"
                      rounded="md"
                      variant="outline"
                      borderColor="#A64DC7"
                      focusBorderColor="#783BA2"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      color="#A067B6"
                      _placeholder={{ color: "#A067B6" }}
                    />
                    {errors.lastName && (
                      <Text fontSize="xs" color="red.500" mt={1}>
                        {errors.lastName}
                      </Text>
                    )}
                  </FormControl>
                </HStack>
                <FormControl isInvalid={errors.username}>
                  <FormLabel fontSize="18px">
                    <Box display="flex" alignItems="center">
                      <Image
                        src="./icons/user-alt.svg"
                        alt="Name Icon"
                        h="16.39px"
                        w="17px"
                        mr={2}
                        ml={2}
                      />
                      اسم المستخدم
                    </Box>
                  </FormLabel>
                  <Input
                    height="54px"
                    fontSize="16px"
                    type="text"
                    placeholder="اختر اسم مستخدم فريداً"
                    rounded="md"
                    variant="outline"
                    borderColor="#A64DC7"
                    focusBorderColor="#783BA2"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    color="#A067B6"
                    _placeholder={{ color: "#A067B6" }}
                  />
                  {errors.username && (
                    <Text fontSize="xs" color="red.500" mt={1}>
                      {errors.username}
                    </Text>
                  )}
                </FormControl>

                <FormControl isInvalid={errors.country}>
                  <FormLabel fontSize="18px">
                    <Box display="flex" alignItems="center">
                      <Image
                        src="./icons/map-marker-alt.svg"
                        alt="Map Icon"
                        h="21.12px"
                        w="16.6px"
                        mr={2}
                        ml={2}
                      />
                      بلد الإقامة
                    </Box>
                  </FormLabel>
                  <Box position="relative">
                    <Select
                      fontSize="16px"
                      rounded="md"
                      variant="outline"
                      borderColor="#A64DC7"
                      focusBorderColor="#783BA2"
                      color="#A067B6"
                      height="54px"
                      placeholder="اختر بلدك"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      _placeholder={{ color: "#A067B6" }}
                      sx={{
                        appearance: "none",
                        backgroundImage: `url('./icons/rotated_arrow_270deg.png')`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "left 10px center",
                        paddingLeft: "30px",
                        pr: "25px",
                      }}
                    >
                      <option value="السعودية">السعودية</option>
                      <option value="مصر">مصر</option>
                      <option value="الإمارات">الإمارات</option>
                      <option value="الكويت">الكويت</option>
                      <option value="قطر">قطر</option>
                      <option value="فلسطين">فلسطين</option>
                      <option value="لبنان">لبنان</option>
                      <option value="سوريا">سوريا</option>
                      <option value="الأردن">الأردن</option>
                      <option value="البحرين">البحرين</option>
                      <option value="عُمان">عُمان</option>
                      <option value="العراق">العراق</option>
                      <option value="اليمن">اليمن</option>
                      <option value="ليبيا">ليبيا</option>
                      <option value="تونس">تونس</option>
                      <option value="الجزائر">الجزائر</option>
                      <option value="المغرب">المغرب</option>
                      <option value="السودان">السودان</option>
                    </Select>
                    <Box
                      position="absolute"
                      right="1"
                      top="1"
                      h="80%"
                      w="21px"
                      bg="white"
                    ></Box>
                  </Box>

                  {errors.country && (
                    <Text fontSize="xs" color="red.500" mt={1}>
                      {errors.country}
                    </Text>
                  )}
                </FormControl>

                <FormControl isRequired={errors.privacyAccepted}>
                  <Checkbox
                    iconColor="#783BA2"
                    mr={100}
                    isChecked={privacyAccepted}
                    onChange={(e) => setPrivacyAccepted(e.target.checked)}
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
                    يرجى تأكيد موافقتك على سياسة الخصوصية الخاصة بنا
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

          <HStack justify="space-between">
            {step === 2 && (
              <Button
                bg="#FF6542"
                color="white"
                w="24%"
                h="55px"
                mt={2}
                leftIcon={
                  <Image
                    src="./icons/left.svg"
                    alt="Arrow"
                    boxSize="25px"
                    style={{ transform: "rotate(180deg)" }}
                  />
                }
                onClick={() => setStep(1)}
              >
                رجوع
              </Button>
            )}
            setLoading(true);
            <Button
              bg="#00BE98"
              color="white"
              fontSize="16px"
              w="24%"
              mr={295}
              mt={2}
              h="55px"
              borderRadius="10px"
              onClick={handleNextAction}
              isLoading={loading}
              loadingText="تحميل..."
              _loading={{
                bg: "#34A853",
                color: "#2C8B2D",
              }}
              position="relative"
            >
              <Flex justifyContent="space-between" w="100%" alignItems="center">
                <Box flex="1" textAlign="center">
                  {step === 1 ? "التالي" : "إنشاء حسابي"}
                </Box>
                <Image
                  src={
                    step === 2
                      ? "./images/profile_circled.png"
                      : "./icons/left.svg"
                  }
                  alt="Arrow"
                  boxSize="25px"
                />
              </Flex>
            </Button>
          </HStack>
          <VStack spacing={5} mt="-19px" w="full" align="center">
            <Text
              color="#713488"
              fontSize="18px"
              textAlign="center"
              borderBottom="2px solid #713488"
            >
              لديك حساب مسبقاً
            </Text>
            <Text color="#713488" fontSize="18px" textAlign="center">
              يمكنك تسجيل الدخول باستخدام
            </Text>
            <HStack spacing={4} mt="-10px" mr="15px">
              <Button
                backgroundColor="#3566A5"
                color="white"
                h="49px"
                w="155px"
                fontSize="21px"
                onClick={() => handleSocialLogin("facebook")}
                _hover={{ bg: "#2a4d7f" }}
                borderRadius="10px"
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
                h="49px"
                w="155px"
                fontSize="21px"
                pr={-2}
                onClick={() => handleSocialLogin("google")}
                _hover={{ bg: "#b3362a" }}
                borderRadius="10px"
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
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default RegisterForm;
