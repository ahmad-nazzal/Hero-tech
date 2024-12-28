import React from "react";
import { Flex, Box } from "@chakra-ui/react";

export const LoadingMessage: React.FC = () => (
  <Flex justify="center" align="center" mt={4} h="100px">
    <Box fontSize="3xl" fontWeight="bold" color={"primary"}>
      جاري التحميل...
    </Box>
  </Flex>
);
