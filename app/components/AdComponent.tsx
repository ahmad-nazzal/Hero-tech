"use client";
import React from "react";
import { Box, Text } from "@chakra-ui/react";

interface Props {
  startDate: Date;
  endDate: Date;
}

const AdComponent: React.FC<Props> = ({ startDate, endDate }) => {
  const isValidDate = (
    startDate: Date,
    endDate: Date,
    currentDate: Date = new Date()
  ): boolean => {
    return currentDate >= startDate && currentDate <= endDate;
  };

  return (
    <Box
      padding="32px"
      display="grid"
      placeItems="center"
      background="tekhelet"
      color="white"
      textAlign="center"
    >
      {isValidDate(startDate, endDate) && (
        <Text variant={"heading1"} color="white" fontWeight="bold">
          خصومات تصل إلى 20% على الكورسات!
        </Text>
      )}
    </Box>
  );
};

export default AdComponent;
