import React from "react";
import { Flex } from "@chakra-ui/react";

interface NoToolsMessageProps {
  isShowingFavorites: boolean;
}

export const NoToolsMessage: React.FC<NoToolsMessageProps> = ({
  isShowingFavorites,
}) => (
  <Flex
    justify="center"
    align="center"
    mt="60px"
    fontSize="30px"
    fontWeight="bold"
    color="primary"
  >
    {isShowingFavorites ? "لا توجد عناصر في المفضلة" : "العنصر غير متوفر"}
  </Flex>
);
