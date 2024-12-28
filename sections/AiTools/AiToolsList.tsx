"use client";

import React, { Suspense, useState, useEffect } from "react";
import { Box, Flex, Grid } from "@chakra-ui/react";
import SearchBar from "../../components/SearchBar";
import { AiToolsCardProps } from "./types";
import { AiToolsCard } from "./AiToolsCard";
import InfiniteScroll from "react-infinite-scroll-component";
import ButtonAC from "../../components/ButtonAC";
import Image from "next/image";
import heartLogo from "../../public/images/emp-heart.png";
import { useAiTools } from "../../hooks/useAiTools";
import { useFavorites } from "../../hooks/useFavorites";
import { useUrlSearch } from "../../hooks/useUrlSearch";

export default function AiToolsList() {
  // Define initial display count and items to load per scroll event
  const initialDisplayCount = 8;
  const itemsPerLoad = 4;

  // State variables for displayed and filtered tools, loading states, and pagination
  const [displayedTools, setDisplayedTools] = useState<AiToolsCardProps[]>([]);
  const [filteredTools, setFilteredTools] = useState<AiToolsCardProps[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // Hooks for fetching tools, favorites, and search query
  const { aiTools, error, isLoading } = useAiTools();
  const {
    favorites,
    getFavoriteTools,
    toggleFavorite,
    isShowingFavorites,
    setIsShowingFavorites,
  } = useFavorites();
  const { searchQuery, updateSearchQuery } = useUrlSearch();

  // Handle filtering and updating the list of tools based on search and favorites
  useEffect(() => {
    if (!aiTools) return;

    let filtered = aiTools;

    // Filter tools based on search query
    if (searchQuery) {
      filtered = filtered.filter((tool: AiToolsCardProps) =>
        tool.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter tools to show only favorites if applicable
    if (isShowingFavorites) {
      filtered = getFavoriteTools(filtered);
    }

    // Update the filtered and displayed tools
    setFilteredTools(filtered);
    setDisplayedTools(filtered.slice(0, initialDisplayCount));
    setHasMore(filtered.length > initialDisplayCount);
  }, [searchQuery, aiTools, isShowingFavorites]);

  // Function to load more items when scrolling
  const loadMore = async () => {
    if (isLoadingMore || !hasMore) return;

    setIsLoadingMore(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const currentLength = displayedTools.length;
    const nextItems = filteredTools.slice(
      currentLength,
      currentLength + itemsPerLoad
    );

    setDisplayedTools((prev) => [...prev, ...nextItems]);
    setHasMore(currentLength + itemsPerLoad < filteredTools.length);
    setIsLoadingMore(false);
  };

  // Toggle the visibility of favorite tools
  const toggleFavoritesView = () => {
    setIsShowingFavorites((prev) => !prev);
  };

  // Handle error state
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

  // Handle loading state
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
    <Box mx="auto" pb={10} px={5} py={10}>
      {/* Header section with search bar and favorites button */}
      <Flex
        direction={{ base: "column", md: "column", lg: "row" }}
        align={{ base: "center", md: "center", lg: "flex-end" }}
        wrap="nowrap"
        mt={{ lg: "0px", md: "80px", sm: "80px", base: "40px" }}
        mb={{ lg: "30px" }}
        justifyContent={{ lg: "space-between" }}
      >
        <Box mt="-30px" flexGrow={1} mb={{ base: 4, lg: 0 }} order={{ lg: 2 }}>
          <SearchBar placeholder="ابحث" onSearch={updateSearchQuery} />
        </Box>
        <ButtonAC
          onClick={toggleFavoritesView}
          pr="10px"
          pl="0px"
          size="lg"
          color={isShowingFavorites ? "white" : "#783BA2"}
          bg={isShowingFavorites ? "#783BA2" : "white"}
          text="المفضلة"
          fontSize={{ lg: 17, sm: 10 }}
          icon={
            <Image
              src={heartLogo}
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

      {/* Display message if no tools are available */}
      {filteredTools.length === 0 ? (
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
      ) : (
        <Suspense
          fallback={
            <Box fontSize={"30px"} fontWeight="bold" mt={4} color={"primary"}>
              جاري التحميل...
            </Box>
          }
        >
          {/* Infinite scroll component to load more tools */}
          <InfiniteScroll
            dataLength={displayedTools.length}
            next={loadMore}
            hasMore={hasMore}
            loader={
              isLoadingMore && (
                <Flex justify="center" align="center" mt={4} h="100px">
                  <Box fontSize="xl" fontWeight="bold">
                    جاري التحميل...
                  </Box>
                </Flex>
              )
            }
          >
            {/* Grid layout for displaying tools */}
            <Grid
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
              {/* Loop through the displayed tools and render AiToolsCard */}
              {displayedTools.map((tool) => (
                <AiToolsCard
                  tool={tool}
                  key={tool.tool_id}
                  isFavorite={favorites.includes(tool.tool_id ?? 0)}
                  onToggleFavorite={() => toggleFavorite(tool.tool_id ?? 0)}
                />
              ))}
            </Grid>
          </InfiniteScroll>
        </Suspense>
      )}
    </Box>
  );
}
