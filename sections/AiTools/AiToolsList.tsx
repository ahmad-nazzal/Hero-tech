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
import useSWR from "swr";

// تعريف fetcher function للاستخدام مع SWR
const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("فشل في جلب البيانات");
  }
  const data = await res.json();
  return data?.data || [];
};

export default function AiToolsList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTools, setFilteredTools] = useState<AiToolsCardProps[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const itemsPerPage = 4;
  const [currentIndex, setCurrentIndex] = useState(12);
  const [favorites, setFavorites] = useState<number[]>([]);

  // استخدام SWR لجلب البيانات
  const {
    data: aiTools,
    error,
    isLoading,
  } = useSWR(
    "https://sitev2.arabcodeacademy.com/wp-json/aca/v1/aitools",
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      refreshInterval: 300000,
    }
  );

  // جلب المفضلة
  useEffect(() => {
    const loadUserFavorites = async () => {
      try {
        const storedFavorites = localStorage.getItem("favorites");

        if (storedFavorites) {
          setFavorites(JSON.parse(storedFavorites));
        } else {
          const response = await fetch(
            "/api/getUserFavorites?email=marahsaadeh@gmail.com"
          );
          const data = await response.json();

          if (data.success) {
            const validIds = data.favorites
              .map((id: string) => Number(id))
              .filter(Number.isFinite);
            setFavorites(validIds);
            localStorage.setItem("favorites", JSON.stringify(validIds));
          }
        }
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }
    };

    loadUserFavorites();
  }, []);

  // حفظ المفضلة في localStorage
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // تحديث الأدوات المفلترة عند تغيير البحث أو البيانات
  useEffect(() => {
    if (!aiTools) return;

    if (searchQuery) {
      const filtered = aiTools.filter((tool: AiToolsCardProps) =>
        tool.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredTools(filtered);
    } else {
      setFilteredTools(aiTools);
    }
    setCurrentIndex(12);
  }, [searchQuery, aiTools]);

  const loadMore = () => {
    const nextIndex = currentIndex + itemsPerPage;
    if (nextIndex >= filteredTools.length) {
      setHasMore(false);
    } else {
      setCurrentIndex(nextIndex);
    }
  };

  const showFavorites = () => {
    if (!aiTools) return;

    const storedFavorites = localStorage.getItem("favorites");
    const parsedFavorites = storedFavorites ? JSON.parse(storedFavorites) : [];
    const favoriteTools = aiTools.filter((tool: AiToolsCardProps) =>
      parsedFavorites.includes(tool.tool_id ?? 0)
    );

    setFilteredTools(favoriteTools);
  };

  if (error) {
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
  }

  if (isLoading) {
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
  }

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
            onClick={showFavorites}
            mb="30px"
            mr="100px"
            pr="10px"
            pl="0px"
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
              width: "140px",
              height: "44px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.35)",
              flexDirection: "row-reverse",
              gap: "7px",
            }}
          />
          <Box mt="-30px" flexGrow={1} mb="30px">
            <SearchBar
              placeholder="ابحث"
              onSearch={(value) => setSearchQuery(value)}
            />
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
