"use client";
import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  Text,
  Select,
  Checkbox,
  Button,
  Box,
  Heading,
  HStack,
  ChakraProvider,
} from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const router = useRouter();
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
        passwordError: "كلمة المرور يجب أن تحتوي على حرف كبير، رقم، وطول 6 أحرف على الأقل",
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

  const handleNext = async () => {

    if (step === 1) {
      if(validate()){  
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
          alert(
            "البريد الإلكتروني مسجل مسبقًا. يرجى استخدام بريد إلكتروني آخر."
          );
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
            alert("تمت عمليات الارسال بنجاح!");
            console.log("Response object received front end");
            if (router) router.push("/signin");
            reset();
          } else {
            alert(`حدث خطئ اثناء عمليات الارسال `);
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
    setEmail("");
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
                <FormControl isRequired isInvalid={errors.emailError}>
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
                  {errors.emailError && (
                    <Text fontSize="xs" color="red.500" mt={1}>
                      {errors.emailError}
                    </Text>
                  )}
                </FormControl>

                <FormControl isRequired isInvalid={errors.passwordError}>
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
                  {errors.passwordError && (
                    <Text fontSize="xs" color="red.500" mt={1}>
                      {errors.passwordError}
                    </Text>
                  )}
                </FormControl>

                <FormControl isRequired isInvalid={errors.passwordConfirmError}>
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
                  {errors.passwordConfirmError && (
                    <Text fontSize="xs" color="red.500" mt={1}>
                      {errors.passwordConfirmError}
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
                  {errors.country && (
                    <Text fontSize="xs" color="red.500" mt={1}>
                      {errors.country}
                    </Text>
                  )}
                </FormControl>

                <FormControl isRequired={errors.privacyAccepted}>
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
            setLoading(true);
            <Button
            
              bg="#34A853"
              color="white"
              w="full"
              onClick={handleNext}
              isLoading={loading}
              loadingText="تحميل..."
              _loading={{
                bg: "#34A853",
                color: "#2C8B2D",
                fontWeight: "bold",
              }}
            >
              {step === 1 ? "التالي" : "إنشاء حسابي"}
            </Button>
          </HStack>
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default RegisterForm;
