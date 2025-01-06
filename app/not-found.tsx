import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import notfound from "../public/images/notfound.png";
export default function NotFound() {
  return (
    <>
      <Flex
        minH="100vh"
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Image
          src={notfound}
          alt="404 page not found"
          width={250}
          height={250}
        />

        <Text
          fontSize="5xl"
          fontWeight="bold"
          textAlign="center"
          mt="4"
          color={"primary"}
        >
          Error 404
        </Text>
        <Text
          fontSize="2xl"
          fontWeight="semibold"
          textAlign="center"
          color={"primary"}
        >
          Page Not Found
        </Text>
      </Flex>
    </>
  );
}
