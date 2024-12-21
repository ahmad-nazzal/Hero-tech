"use client";
import { Box, Flex, Grid } from "@chakra-ui/react";
import SearchBar from "../../components/SearchBar";
import { useEffect, useState } from "react";
import { AiToolsCardProps } from "./types";
import { AiToolsCard } from "./AiToolsCard";
import InfiniteScroll from "react-infinite-scroll-component";
import Header from "../header/header";
import ButtonAC from "../../components/ButtonAC";
import Image from "next/image";
import heartlogo from "../../public/images/emp-heart.png";

export default function AiToolsList() {
  const [loading, setLoading] = useState(true);
  const [aiTools, setAiTools] = useState<AiToolsCardProps[]>([]);
  const [filteredTools, setFilteredTools] = useState<AiToolsCardProps[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [hasMore, setHasMore] = useState(true);
  const itemsPerPage = 4;
  const [currentIndex, setCurrentIndex] = useState(12);

  // قراءة قيمة البحث من الرابط عند تحميل الصفحة
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const searchValue = query.get("search") || ""; // إذا لم يكن هناك قيمة، اجعلها فارغة
    setSearchQuery(searchValue); // تحديث حالة البحث
    getAiTools();
  }, []);

  useEffect(() => {
    handleSearch(); // قم بتطبيق البحث بناءً على قيمة searchQuery
  }, [searchQuery, aiTools]);

  useEffect(() => {
    // تحديث الرابط عند تغيير قيمة searchQuery
    const query = new URLSearchParams(window.location.search);
    if (searchQuery) {
      query.set("search", searchQuery);
    } else {
      query.delete("search");
    }
    history.pushState(
      null,
      "",
      `${window.location.pathname}?${query.toString()}`
    );
  }, [searchQuery]);

  async function getAiTools() {
    try {
      setLoading(true);
      const res = await fetch(
        "https://sitev2.arabcodeacademy.com/wp-json/aca/v1/aitools"
      );
      const data = await res.json();
      console.log("Fetched Data:", data);
      setAiTools(data?.data);
      setFilteredTools(data?.data);
    } catch (error) {
      console.error("Failed to fetch AI tools:", error);
    } finally {
      setLoading(false);
    }
  }

  const handleSearch = () => {
    if (searchQuery === "") {
      setFilteredTools(aiTools); // إذا لم يكن هناك نص بحث، اعرض كل الأدوات
    } else {
      const filtered = aiTools.filter((tool) =>
        tool.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      console.log("Filtered Tools:", filtered);
      setFilteredTools(filtered);
    }
    setCurrentIndex(12); // إعادة ضبط عدد العناصر المعروضة بعد البحث
  };

  const loadMore = () => {
    const nextIndex = currentIndex + itemsPerPage;
    if (nextIndex >= filteredTools.length) {
      setHasMore(false);
    }
    setCurrentIndex(nextIndex);
  };

  if (loading) {
    return (
      <Flex
        color={"primary"}
        alignItems="center"
        justify="center"
        height="100vh"
        fontWeight="700"
        fontSize="30px"
      >
        جاري التحميل ...
      </Flex>
    );
  }

  return (
    <>
      <Header/>
      <Box 
      mx="auto" 
      pb={10} 
      px={5} py={10} 
    //  border="1px solid red"
      >
      <Flex

      direction={{ base: "column",sm: "column",md: "column", lg: "row" }}

        align="flex-end"
      wrap="nowrap" 
    >
        <ButtonAC
          mb="30px"
          mr="100px" 
          pr="10px"
          pl="0px"
  size="lg"
  color="#783BA2" // لون النص
  bg="white" // لون الخلفية أبيض
  text="المفضلة" // نص الزر
  fontSize={{ lg: 17, sm: 10 }}
  icon={
    <Image
      src={heartlogo} // تأكد من المسار الصحيح للصورة
      alt="Favorite Icon"
        //  style={{   width:"100px", height:"20px" }}
        style={{   width:"100", height:"20" }}
    />
  }
  sx={{
    width: '140px',
    height: '44px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.35)',
  //  display: 'flex',
    flexDirection: 'row-reverse', // هذا يقوم بجعل الأيقونة على اليسار والنص على اليمين
    //alignItems: 'center',
  //  justifyContent: 'center',
    gap: '7px' // مسافة بين الأيقونة والنص
  }}
/>
<Box
ml="-73px"
mt="-30px"

  flexGrow={1} // تمدد لملء المساحة المتاحة
  mb="30px" // الهامش السفلي إذا لزم الأمر
>
          <SearchBar
            placeholder="chatgpt...."
    
            onSearch={(value) => setSearchQuery(value)} // تحديث حالة البحث عند إدخال النص
      
    />
    </Box>
  
    
    </Flex>
        {filteredTools.length === 0 ? ( // التحقق إذا لم تكن هناك نتائج
          <Flex
            justify="center"
            align="center"
            mt="60px"
            fontSize="30px"
            fontWeight="bold"
            color="primary"
          >
            العنصر غير متوفر
          </Flex>
        ) : (
          <InfiniteScroll
            dataLength={currentIndex}
            next={loadMore}
            hasMore={hasMore}
            loader={<Box>جاري التحميل...</Box>}
          >
            <Grid
              mt={12}
              justifyItems="center"
              alignItems="center"
              templateColumns={{
                base: "1fr",
                sm: "1fr",
                md: "repeat(2, 1fr)",
                lg: "repeat(4, 1fr)",
              }}
              gap={5}
            >
              {filteredTools?.slice(0, currentIndex).map((tool) => (
                <AiToolsCard tool={tool} key={tool.tool_id} />
              ))}
            </Grid>
          </InfiniteScroll>
        )}
      </Box>
    </>
  );
}
