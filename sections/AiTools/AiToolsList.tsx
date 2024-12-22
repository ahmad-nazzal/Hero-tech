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

  // تحديث الأدوات المفلترة عند تغيير البحث أو البيانات
  useEffect(() => {
    if (!aiTools) return;

    let filtered = aiTools;

    // تطبيق فلتر البحث
    if (searchQuery) {
      filtered = filtered.filter((tool: AiToolsCardProps) =>
        tool.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // تطبيق فلتر المفضلة
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
          direction={{ base: "column", sm: "column", md: "column", lg: "row" }}
          align="flex-end"
          wrap="nowrap"
        >
          <ButtonAC
            onClick={handleShowFavorites}
            mb="30px"
            mr="100px"
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
          />
          <Box mt="-30px" flexGrow={1} mb="30px">
            <SearchBar placeholder="ابحث" onSearch={updateSearchQuery} />
          </Box>
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
