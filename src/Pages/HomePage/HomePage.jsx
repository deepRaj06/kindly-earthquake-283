import React from "react";
import Carousal_HomePage from "../../Components/Carousal_HomePage";
import Navbar from "../../Components/Navbar";
import Searchbar_HomePage from "../../Components/Searchbar_HomePage";
// Import css files
// import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BodySection_HomePage from "../../Components/BodySection_HomePage";
import { Text } from "@chakra-ui/react";
import FooterTabSection_HomePage from "../../Components/FooterTabSection_HomePage";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Searchbar_HomePage />
      <Text
        ml="4.8rem"
        fontSize="24px"
        color="black"
        fontWeight="300"
        mt="2rem"
        mb="2rem"
      >
        Top Destinations
      </Text>
      <Carousal_HomePage />
      <BodySection_HomePage />
      <Text
        ml="4.8rem"
        fontSize="24px"
        color="black"
        fontWeight="300"
        mt="2rem"
        mb="2rem"
      >
        Vacation Ideas
      </Text>
      <Carousal_HomePage />
      <Text
        ml="4.8rem"
        fontSize="24px"
        color="black"
        fontWeight="300"
        mt="1rem"
        mb="2rem"
      >
        Show All Ideas
      </Text>

      <Text
        ml="4.8rem"
        fontSize="24px"
        color="black"
        fontWeight="300"
        mt="1rem"
        mb="2rem"
      >
        Holiday Homes Across The Globe
      </Text>
      <FooterTabSection_HomePage />
    </div>
  );
};

export default HomePage;
