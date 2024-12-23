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
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const searchValue = query.get("search") || "";
    setSearchQuery(searchValue);
    getAiTools();
  }, []);

  useEffect(() => {
    const loadUserFavorites = async () => {
      try {
        const storedFavorites = localStorage.getItem('favorites');
  
        if (storedFavorites) {
          setFavorites(JSON.parse(storedFavorites)); 
        } else {
        
          const response = await fetch('/api/getUserFavorites?email=marahsaadeh@gmail.com');
          const data = await response.json();
  
          if (data.success) {
            const validIds = data.favorites.map((id: string) => Number(id)).filter(Number.isFinite);
            setFavorites(validIds);
            localStorage.setItem('favorites', JSON.stringify(validIds));
          } else {
            console.error('Failed to fetch favorites:', data.message);
          }
        }
      } catch (error) {
        console.error('Error fetching favorites:', error);
      }
    };
  
    loadUserFavorites();
  }, []);
  
  
  
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);
  

  useEffect(() => {
    if (searchQuery) {
      const filtered = aiTools.filter(tool => tool.title.toLowerCase().includes(searchQuery.toLowerCase()));
      setFilteredTools(filtered);
    } else {
      setFilteredTools(aiTools);
    }
    setCurrentIndex(12);
  }, [searchQuery, aiTools]);

  async function getAiTools() {
    try {
      setLoading(true);
      const res = await fetch("https://sitev2.arabcodeacademy.com/wp-json/aca/v1/aitools");
      const data = await res.json();
      setAiTools(data?.data || []);
    } catch (error) {
      console.error("Failed to fetch AI tools:", error);
    } finally {
      setLoading(false);
    }
  }

  const loadMore = () => {
    const nextIndex = currentIndex + itemsPerPage;
    if (nextIndex >= filteredTools.length) {
      setHasMore(false);
    } else {
      setCurrentIndex(nextIndex);
    }
  };
  const showFavorites = () => {
    const storedFavorites = localStorage.getItem('favorites');
    const parsedFavorites = storedFavorites ? JSON.parse(storedFavorites) : [];
    const favoriteTools = aiTools.filter((tool) =>
      parsedFavorites.includes(tool.tool_id ?? 0) 
    );
  
    setFilteredTools(favoriteTools); 
  };
  
  
  
  if (loading) {
    return <Flex align="center" justify="center" height="100vh" fontWeight="700" fontSize="30px">جاري التحميل ...</Flex>;
  }

  return (
    <>
      <Header/>
      <Box 
      mx="auto" 
      pb={10} 
      px={5} py={10} 

      >
    <Flex
        direction={{ base: "column", md: "column", lg: "row" }}
        align={{ base: "center", md: "center", lg: "flex-end" }}
        wrap="nowrap"
        mt={{lg:"0px",md:"80px",sm:"80px",base:"40px"}}
        mb={{lg:"30px"}}
        justifyContent={{ lg: "space-between" }}
      >
        <Box
          flexGrow={1}
          mt="-30px"
          mb={{ base: 4, lg: 0 }} 
          order={{ lg: 2 }} 
        >
          <SearchBar
            placeholder="chatgpt...."
            onSearch={(value) => setSearchQuery(value)}
          />
        </Box>
        <ButtonAC
          onClick={showFavorites}
          size="lg"
          color="#783BA2"
          bg="white"
          text="المفضلة"
          fontSize={{ lg: 17, sm: 10 }}
          icon={
            <Image
              src={heartlogo}
              alt="Favorite Icon"
              style={{ width: "100", height: "20" }}
            />
          }
          sx={{
            width: '140px',
            height: '44px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.35)',
            flexDirection: 'row-reverse',
            gap: '7px'
          }}
          ml={{ lg: 2 }} 
          mr={{ lg: "100px" }} 
          order={{ lg: 1 }} 
        />
      </Flex>

{filteredTools.length === 0 ? (
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

    pl="100px"
    pr="100px"
      mt={12}
      justifyItems="center"
      alignItems="center"
      templateColumns={{
        base: "1fr",
        sm: "repeat(2, 1fr)",
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
