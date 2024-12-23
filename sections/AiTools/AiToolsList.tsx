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
import { useAiTools } from "../../hooks/useAiTools";
import { useFavorites } from "../../hooks/useFavorites";
import { useUrlSearch } from "../../hooks/useUrlSearch";

export default function AiToolsList() {
  const [filteredTools, setFilteredTools] = useState<AiToolsCardProps[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(12);
  const itemsPerPage = 4;
  const { aiTools, error, isLoading } = useAiTools();
  const {
    favorites,
    getFavoriteTools,
    toggleFavorite,
    isShowingFavorites,
    setIsShowingFavorites,
  } = useFavorites();
  const { searchQuery, updateSearchQuery } = useUrlSearch();
  useEffect(() => {
    if (!aiTools) return;

    let filtered = aiTools;
    if (searchQuery) {
      filtered = filtered.filter((tool: AiToolsCardProps) =>
        tool.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (isShowingFavorites) {
      filtered = getFavoriteTools(filtered);
    }

    setFilteredTools(filtered);
    setCurrentIndex(12);
    setHasMore(filtered.length > 12);
  }, [searchQuery, aiTools, isShowingFavorites, favorites]);

  const loadMore = () => {
    const nextIndex = currentIndex + itemsPerPage;
    if (nextIndex >= filteredTools.length) {
      setHasMore(false);
    } else {
      setCurrentIndex(nextIndex);
    }
  };

  const handleShowFavorites = () => {
    setIsShowingFavorites((prev) => !prev);
  };

  if (error)
    return (
      <Flex
        align="center"
        justify="center"
        height="100vh"
        fontWeight="700"
        fontSize="30px"
      >
        حدث خطأ في جلب البيانات
      </Flex>
    );
  if (isLoading)
    return (
      <Flex
        align="center"
        justify="center"
        height="100vh"
        fontWeight="700"
        fontSize="30px"
      >
        جاري التحميل ...
      </Flex>
    );

  return (
    <>
      <Header />
      <Box mx="auto" pb={10} px={5} py={10}>
      <Flex
    
        direction={{ base: "column", md: "column", lg: "row" }}
        align={{ base: "center", md: "center", lg: "flex-end" }}
        wrap="nowrap"
        mt={{lg:"0px",md:"80px",sm:"80px",base:"40px"}}
        mb={{lg:"30px"}}
        justifyContent={{ lg: "space-between" }}
      >
      
          <Box 
          mt="-30px"
           flexGrow={1}
           mb={{ base: 4, lg: 0 }} 
           order={{ lg: 2 }} 
           >
            <SearchBar placeholder="ابحث" onSearch={updateSearchQuery} />
          </Box>
          <ButtonAC
            onClick={handleShowFavorites}
    
            pr="10px"
            pl="0px"
            size="lg"
            color={isShowingFavorites ? "white" : "#783BA2"}
            bg={isShowingFavorites ? "#783BA2" : "white"}
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
              width: "140px",
              height: "44px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.35)",
              flexDirection: "row-reverse",
              gap: "7px",
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
            {isShowingFavorites
              ? "لا توجد عناصر في المفضلة"
              : "العنصر غير متوفر"}
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
                <AiToolsCard
                  tool={tool}
                  key={tool.tool_id}
                  isFavorite={favorites.includes(tool.tool_id ?? 0)}
                  onToggleFavorite={() => toggleFavorite(tool.tool_id ?? 0)}
                />
              ))}
            </Grid>
          </InfiniteScroll>
        )}
      </Box>
    </>
  );
}