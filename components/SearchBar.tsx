import {
  Input,
  InputGroup,
  InputLeftElement,
  Box,
  useBreakpointValue,
} from "@chakra-ui/react";
import Image from "next/image";
import Search from "../public/images/Search.svg";

interface SearchBarProps {
  placeholder: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder }) => {
  const inputWidth = useBreakpointValue({
    base: "100%",
    md: "100%",
    lg: "50%",
  });

  return (
    <Box display="flex" justifyContent="flex-end" width="100%">
      <InputGroup width={inputWidth} dir="ltr">
        <InputLeftElement height="100%" pointerEvents="none" marginLeft="1rem">
          <Box display="flex" alignItems="center" height="100%">
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              height="100%"
              pr="0.5rem"
            >
              <Image
                src={Search.src}
                alt="Search"
                width={25}
                height={25}
                style={{ objectFit: "contain", height: "20px", width: "20px" }}
              />
            </Box>

            <Box
              height="4rem"
              width="0.25rem"
              overflow="hidden"
              bg="primary"
              ml="0.5rem"
            />
          </Box>
        </InputLeftElement>

        <Input
          height="4rem"
          border="2px"
          borderColor="primary"
          rounded="full"
          type="search"
          placeholder={placeholder}
          paddingLeft="2.5rem"
          _focus={{
            borderColor: "primary",
            boxShadow: `0 0 0 1px ${"primary"}`,
          }}
          _hover={{ borderColor: "primary" }}
          _placeholder={{ color: "primary" }}
          _active={{ borderColor: "primary" }}
          textAlign="right"
        />
      </InputGroup>
    </Box>
  );
};

export default SearchBar;
