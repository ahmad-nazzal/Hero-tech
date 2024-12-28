import React from "react";
import { Grid, GridItem, Text } from "@chakra-ui/react";
import { Suspense } from "react";
import Loading from "./loading.jsx";
import SearchBar from "../../../components/SearchBar";
import Courses from "./courses.jsx";
const CoursesSection = () => {
  return (
    <main style={{ margin: "0", width: "100%", overflow: "hidden" }}>
      <Grid
        templateColumns={{
          base: "1fr",
          sm: "1fr",
          md: "1fr",
          lg: "repeat(4, 1fr)",
        }}
        gap="4"
      >
        <GridItem colSpan={{ base: 1, lg: 1 }}>
          <Text
            className="recommended"
            marginRight="237px"
            marginBottom="84px"
            paddingTop="153px"
            color="#713488"
            borderBottom="2px solid #713488"
            width="208px"
            fontWeight="bold"
            fontSize="27px"
          >
            الدورات التدريبية
          </Text>
        </GridItem>

        <GridItem colSpan={{ base: 1, lg: 3 }}>
          <SearchBar placeholder="..... مقدمة لمحرك الألعاب اليونتي" />
        </GridItem>
      </Grid>
      <Suspense fallback={<Loading />}>
        <Courses />
      </Suspense>
    </main>
  );
};

export default CoursesSection;
