import React, { useEffect, useState } from "react";
import ButtonAC from "../../../components/ButtonAC";

import mazedlogo from "../../../public/images/circled_outline.png";
import paylogo from "../../../public/images/cart_icon.png";
import Loading from "./loading";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Text,
  Heading,
  Flex,
  Box,
} from "@chakra-ui/react";
//async & await : Because API process takes time
async function getData() {
  //Loading 5 mintues
  await new Promise((resolve) => setTimeout(resolve, 1000));
  //revalidate:3600 => 3600 seconds, which means that every hour the browser goes to check the data in db.json
  const res = await fetch("http://localhost:4000/courses", {
    next: { revalidate: 0 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Courses = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData();
        setData(result);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <Loading />;

  return (
    <section
      className="products flex"
      style={{ color: "#462576", padding: "0px 55px" }}
    >
      {/* array.map */}
      {data &&
        data.map((item) => {
          return (
            <Card key={item.id} borderRadius="md" boxShadow="lg" bg="white">
              <CardHeader p="0">
                <a href="/">
                  <Box bg="#FF6542" p="10" borderRadius="8">
                    <Image
                      width="266px"
                      height="285px"
                      src={item.image}
                      alt=""
                      filter="invert(1)"
                    />
                  </Box>
                </a>
              </CardHeader>

              <CardBody fontWeight="bold">
                <Heading as="h1" size="md" mb="2" className="title">
                  {item.name.slice(0, 15)}...
                </Heading>
                <Text color="green.500" className="price">
                  ${item.price}
                </Text>

                <Box color="#555" fontSize="sm">
                  <Text>اسم المدرب: {item.trainer}</Text>
                  <Text>{item.duration}</Text>
                </Box>
              </CardBody>

              <CardFooter>
                <Flex gap="4" justify="center" mt="4">
                  <ButtonAC
                    alignSelf="center"
                    mt={8}
                    size="lg"
                    color="white"
                    bg="secondary"
                    text="اقرأ المزيد"
                    icon={mazedlogo}
                    sx={{
                      width: "190px",
                      height: "40px",
                    }}
                  />
                  <ButtonAC
                    alignSelf="center"
                    mt={8}
                    size="lg"
                    color="white"
                    bg="tomato"
                    text="شراء"
                    icon={paylogo}
                    sx={{
                      width: "150px",
                      height: "40px",
                    }}
                  />
                </Flex>
              </CardFooter>
            </Card>
          );
        })}
    </section>
  );
};

export default Courses;
