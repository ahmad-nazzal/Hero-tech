import { Heading, Center } from "@chakra-ui/react";
interface Props {
  startDate: string;
  endDate: string;
  promotionMessage?: string;
}

const DiscountBanner: React.FC<Props> = ({
  startDate,
  endDate,
  promotionMessage,
}) => {
  const isDateInRange = (
    startDate: string,
    endDate: string,
    currentDate: Date = new Date()
  ): boolean => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    return currentDate >= start && currentDate <= end;
  };

  return isDateInRange(startDate, endDate) ? (
    
    <Center bg="#462576" color="white" p="32px" height="120">
      <Heading 
       fontSize={{ base: "12px", sm:"23px",lg: "20px" }}
       mr="734px"  
       ml="799px"  
      >{promotionMessage}</Heading>
    </Center>  

  ) : null;
};

export default DiscountBanner;
