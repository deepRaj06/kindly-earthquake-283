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
import Navbar from "../../Components/Navbar";
import statesData from "../../utils/states.json";
import types from "../../utils/types.json";
import { Link } from "react-router-dom";
import CarousalComponent from "../../Components/Carousal";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCities } from "../../Redux/AppReducer/action";
const ProductList = () => {
  const dispatch = useDispatch();
  const country_id = "101";
  const cities = statesData.filter((state) => state.country_id === country_id);
  const [searchParams, setSearchParams] = useSearchParams();
  const allProducts = useSelector((store) => store.appReducer.allProducts);
  useEffect(() => {
    dispatch(getCities());
  }, []);
  return (
    <Box>
      {/* navbar  */}
      <Box>
        <Navbar />
      </Box>
      {/* search  */}
      <Box textAlign="center" border="1px solid" mt="5px">
        <Heading>Search bar component</Heading>
      </Box>
      <Box margin="3rem" padding="1rem" boxShadow="md">
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
                  fontWeight="light"
                  textAlign="center"
                  spacing=".5rem"
                  width="80%"
                >
                  {cities?.map((city) => (
                    <div key={city.state_id}>
                      <Link
                        style={{
                          boxShadow: "0px 0px 1px 0px rgba(0,0,0,0.1)",
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
                  fontWeight="light"
                  textAlign="center"
                  spacing=".5rem"
                  width="70%"
                >
                  {types?.map((type) => (
                    <Link
                      style={{
                        boxShadow: "0px 0px 1px 0px rgba(0,0,0,0.1)",
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
        <Box mt="1rem">
          <CarousalComponent />
        </Box>
        {/* explore on map  */}
        <Box height={"100vh"} width={"100vw"}>
        
        </Box>
      </Box>
    </Box>
  );
};

export default ProductList;
