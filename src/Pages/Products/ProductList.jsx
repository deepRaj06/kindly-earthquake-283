import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  SimpleGrid,
  Checkbox,
  Link,
} from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import statesData from "../../utils/states.json";
import types from "../../utils/types.json";
const ProductList = () => {
  const country_id = "101";
  const cities = statesData.filter((state) => state.country_id === country_id);
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <Box>
      <Box textAlign="center" border="1px solid" mt="5px">
        <Heading>Navbar component</Heading>
      </Box>
      <Box textAlign="center" border="1px solid" mt="5px">
        <Heading>Search bar component</Heading>
      </Box>
      <Box>
        <Tabs>
          <TabList>
            <Tab>CITIES</Tab>
            <Tab>TYPES</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <SimpleGrid minChildWidth="100px" spacing="1rem" width="70%" >
                {cities?.map((city) => (
                  <Link key={city.state_id}>{city.state_name}</Link>
                ))}
              </SimpleGrid>
            </TabPanel>
            <TabPanel>
              <SimpleGrid minChildWidth="100px" spacing="1rem"  width="70%" >
                {types?.map((type) => (
                  <Link key={type.id}>{type.type}</Link>
                ))}
              </SimpleGrid>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};

export default ProductList;
