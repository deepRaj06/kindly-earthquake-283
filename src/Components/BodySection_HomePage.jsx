import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";

const BodySection_HomePage = () => {
  const [bodySection, setBodySection] = useState([]);

  const basicBoxStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "white",
    textShadow: "0 0 20px black",
    fontWeight: "bold",
    fontSize: "20px",
    color: "white",
  };

  useEffect(() => {
    axios.get("http://localhost:8000/bodySection").then((res) => {
      setBodySection(res.data);
    });
  }, []);

  return (
    <Box w="90%" h="auto" border="1px solid black" mt="4rem" m="auto">
      <Flex>
        <Box boxShadow="lg" w="35%" h="380px">
          <Text
            mt="2rem"
            fontWeight="300"
            color="black"
            fontSize="24px"
            textAlign="center"
          >
            Fully Managed Communities By
          </Text>
          <Text
            mt="0.4rem"
            fontWeight="300"
            color="black"
            fontSize="24px"
            textAlign="center"
          >
            Tripvillas
          </Text>
          <Box
            m="auto"
            h="240px"
            w="94%"
            // border="1px solid black"
            mt="2rem"
          >
            <Flex>
              <Box
                // border="1px solid red"
                w="50%"
                h="100px"
              >
                <Flex direction="column">
                  <Image
                    display="block"
                    m="auto"
                    w="40px"
                    h="40px"
                    src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/housekeeper.svg"
                    mb="1rem"
                  ></Image>
                  <Text mb="1rem" textAlign="center" fontWeight="300">
                    High Quality housekeeping
                  </Text>
                </Flex>
              </Box>
              <Box
                // border="1px solid red"
                w="50%"
                h="100px"
              >
                <Flex direction="column">
                  <Image
                    display="block"
                    m="auto"
                    w="40px"
                    h="40px"
                    src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/towel.svg"
                    mb="1rem"
                  ></Image>
                  <Text mb="1rem" textAlign="center" fontWeight="300">
                    Comfortable Linen and Toiletries
                  </Text>
                </Flex>
              </Box>
            </Flex>
            <Flex>
              <Box
                // border="1px solid red"
                w="50%"
                h="100px"
              >
                <Flex direction="column">
                  <Image
                    display="block"
                    m="auto"
                    w="40px"
                    h="40px"
                    src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/bed.svg"
                    mb="1rem"
                    mt="1rem"
                  ></Image>
                  <Text textAlign="center" fontWeight="300">
                    Quality Furniture & Fittings
                  </Text>
                </Flex>
              </Box>
              <Box
                // border="1px solid red"
                w="50%"
                h="100px"
              >
                <Flex direction="column">
                  <Image
                    display="block"
                    m="auto"
                    w="40px"
                    h="40px"
                    src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/dinner.svg"
                    mb="1rem"
                    mt="1rem"
                  ></Image>
                  <Text textAlign="center" fontWeight="300">
                    Food Delivery Or Central Restaurant
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Box>

        <Box
          // border="1px solid blue"
          w="65%"
          h="auto"
          ml="2rem"
        >
          <Grid
            templateRows="repeat(3, auto)"
            templateColumns="repeat(4, 1fr)"
            gap={6}
          >
            {bodySection.map((sec) => {
              return (
                <GridItem sx={basicBoxStyles} w="100%" h="150px">
                  <Image
                    filter="auto"
                    brightness="50%"
                    src={sec.img}
                    alt="image"
                    w="100%"
                    h="150px"
                  ></Image>
                  <Flex direction="column">
                    <Text
                      fontSize="16px"
                      fontWeight="700"
                      position="relative"
                      color="white"
                      ml="-12rem"
                    >
                      {sec.name}
                    </Text>
                    <Text
                      fontSize="16px"
                      fontWeight="400"
                      position="relative"
                      color="whitesmoke"
                      ml="-12rem"
                    >
                      {sec.location}
                    </Text>
                  </Flex>
                </GridItem>
              );
            })}
          </Grid>
        </Box>
      </Flex>
    </Box>
  );
};

export default BodySection_HomePage;
