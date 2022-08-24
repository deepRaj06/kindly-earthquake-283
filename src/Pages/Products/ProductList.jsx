import React, { useState } from "react";
import {
  Box,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  SimpleGrid,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import { useParams, useSearchParams } from "react-router-dom";
import statesData from "../../utils/states.json";
import types from "../../utils/types.json";
import { Link } from "react-router-dom";
import CarousalComponent from "../../Components/Carousal";

const ProductList = () => {
  const country_id = "101";
  const cities = statesData.filter((state) => state.country_id === country_id);
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <Box>
      {/* navbar  */}
      <Box textAlign="center" border="1px solid" mt="5px">
        <Heading>Navbar component</Heading>
      </Box>
      {/* search  */}
      <Box textAlign="center" border="1px solid" mt="5px">
        <Heading>Search bar component</Heading>
      </Box>
      <Box margin="auto 1rem">
        {/* tabs  */}
        <Box>
          <Tabs>
            <TabList>
              <Tab>CITIES</Tab>
              <Tab>TYPES</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <SimpleGrid
                  minChildWidth="100px"
                  fontSize="12px"
                  fontWeight="bold"
                  textAlign="center"
                  spacing=".5rem"
                  width="80%"
                >
                  {cities?.map((city) => (
                    <div key={city.state_id}>
                      <Link
                        style={{
                          boxShadow: "1px 1px 1px 1px rgba(0,0,0,0.1)",
                          height: "40px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        to={{
                          pathname: `/products/${city.state_name}`,
                          state: city.state_name,
                        }}
                      >
                        {city.state_name}
                      </Link>
                    </div>
                  ))}
                </SimpleGrid>
              </TabPanel>
              <TabPanel>
                <SimpleGrid
                  minChildWidth="100px"
                  fontSize="12px"
                  fontWeight="bold"
                  textAlign="center"
                  spacing=".5rem"
                  width="70%"
                >
                  {types?.map((type) => (
                    <Link
                      style={{
                        boxShadow: "1px 1px 1px 1px rgba(0,0,0,0.1)",
                        height: "40px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      to={{
                        pathname: `/products/${type.type}`,
                        state: type.type,
                      }}
                      key={type.id}
                    >
                      {type.type}
                    </Link>
                  ))}
                </SimpleGrid>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
        {/* Breadcrumb  */}
        <Box>
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink>Country</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink>City</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        <Heading as="h3">City Holiday Homes</Heading>
        {/* carousel */}
        <Box mt="1rem" >
          <CarousalComponent />
        </Box>
      </Box>
    </Box>
  );
};

export default ProductList;
