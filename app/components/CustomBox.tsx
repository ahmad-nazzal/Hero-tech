import { Box, BoxProps, Text } from "@chakra-ui/react";

interface CustomBoxProps extends BoxProps {
  title: string;
  description: string;
  opacity?: number;
  children?: React.ReactNode;
}

const CustomBox: React.FC<CustomBoxProps> = ({
  children,
  title,
  description,
  bg = "white",
  p = 8,
  borderWidth = { base: 1, lg: 0 },
  borderColor = "primary",
  boxShadow = {
    base: "lg",
    lg: "-4px -4px 6px rgba(0, 0, 0, 0.1), 4px 4px 6px rgba(0, 0, 0, 0.1), 0 8px 12px rgba(0, 0, 0, 0.1)",
  },
  rounded = "lg",
  opacity = 1,
  ...props
}) => {
  return (
    <Box
      bg={bg}
      p={p}
      borderWidth={borderWidth}
      borderColor={borderColor}
      boxShadow={boxShadow}
      rounded={rounded}
      opacity={opacity}
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      {...props}
    >
      <Text
        fontSize="2xl"
        fontWeight="700"
        color="primary"
        mb={{ base: 6, md: 10, lg: 12 }}
      >
        {title}
      </Text>
      <Text fontSize="19px" fontWeight="500" color="primary">
        {description}
      </Text>
      {children}
    </Box>
  );
};

export default CustomBox;
