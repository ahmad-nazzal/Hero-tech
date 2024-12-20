"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Heading,
  ChakraProvider,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();
  const {status } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const validate = () => {
    if (!email) {
      setError("يرجى إدخال البريد الإلكتروني.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("يرجى إدخال بريد إلكتروني صالح.");
      return false;
    }
    if (!password) {
      setError("يرجى إدخال كلمة المرور.");
      return false;
    }
    setError("");
    return true;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    console.log("***********res***********");
    console.log(res);
    if (!res.ok) {
      setError("البريد الإلكتروني أو كلمة المرور غير صحيحة.");
    } else if (res?.error) {
      setError("بيانات تسجيل الدخول غير صحيحة. حاول مرة أخرى.");
    } else {
      alert("تم تسجيل الدخول بنجاح!");
      if (router) router.push("/");
      // يمكنك إضافة التوجيه هنا بعد تسجيل الدخول بنجاح
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
        p={4}
        bg="gray.50"
      >
        <Box
          w="100%"
          maxW="400px"
          bg="white"
          boxShadow="md"
          borderRadius="lg"
          p={6}
        >
          <VStack spacing={4} align="stretch">
            <Heading as="h2" size="md" textAlign="center" color="purple.600">
              {status === "authenticated" ? "مرحبًا، تم تسجيل الدخول!" : "تسجيل الدخول"}
            </Heading>

            {status === "authenticated" ? (
              <>
                <Text fontSize="xs" color="gray.500" mt={3}>
                  {`حالة الجلسة: ${status}`}
                </Text>
                <Button
                  colorScheme="red"
                  w="100%"
                  size="sm"
                  onClick={() => signOut({ redirect: false })}
                >
                  تسجيل الخروج
                </Button>
              </>
            ) : (
              <>
                <FormControl isRequired isInvalid={!!error}>
                  <FormLabel fontSize="sm">البريد الإلكتروني</FormLabel>
                  <Input
                    type="email"
                    placeholder="أدخل بريدك الإلكتروني"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    size="sm"
                    borderColor="purple.300"
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel fontSize="sm">كلمة المرور</FormLabel>
                  <Input
                    type="password"
                    placeholder="أدخل كلمة المرور"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    size="sm"
                    borderColor="purple.300"
                  />
                </FormControl>

                {error && (
                  <Text fontSize="xs" color="red.500" mt={1}>
                    {error}
                  </Text>
                )}

                <Button
                  colorScheme="teal"
                  w="100%"
                  size="sm"
                  onClick={handleLogin}
                  isLoading={loading}
                  loadingText="جارٍ تسجيل الدخول..."
                >
                  تسجيل الدخول
                </Button>
              </>
            )}
          </VStack>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default LoginForm;