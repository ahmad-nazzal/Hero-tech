import { useBreakpointValue } from "@chakra-ui/react";

const useResponsiveStyles = () => {
  const columns = useBreakpointValue({
    base: "1fr",
    md: "1fr",
    lg: "repeat(3, 1fr)",
  });

  const infoColumns = useBreakpointValue({
    base: "1fr",
    md: "repeat(2, minmax(200px, 1fr))",
    lg: "repeat(2, 1fr)",
  });

  const resourceColumns = useBreakpointValue({
    base: "1fr",
    md: "repeat(2, 1fr)",
    lg: "repeat(4, 1fr)",
  });

  const textAlign = useBreakpointValue<'left' | 'center' | 'right' | 'justify'>({
    base: "center",
    md: "center",
    lg: "right",
  }) || "center"; // Default value to ensure it's always a valid TextAlign

  const flexAlign = useBreakpointValue({
    base: "center",
    md: "center",
    lg: "flex-start",
  });

  return {
    columns,
    infoColumns,
    resourceColumns,
    textAlign,
    flexAlign,
  };
};

export default useResponsiveStyles;
