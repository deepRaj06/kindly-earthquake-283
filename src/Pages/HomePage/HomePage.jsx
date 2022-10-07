/*  
Author: Deepak Rajput
EmailId: deepak.onlinework13@gmail.com
Date: 23 Aug 2022
WorkItem: Created Home Page containing all sections
*/
import React from "react";
import Carousal_HomePage from "../../Components/Carousal_HomePage";
import Navbar from "../../Components/Navbar";
import Searchbar_HomePage from "../../Components/Searchbar_HomePage";
import "slick-carousel/slick/slick-theme.css";
import BodySection_HomePage from "../../Components/BodySection_HomePage";
import { Text } from "@chakra-ui/react";
import FooterTabSection_HomePage from "../../Components/FooterTabSection_HomePage";
import Carousal_Vacation_Homepage from "../../Components/Carousal_Vacation_Homepage";

const HomePage = () => {
  const breakpoints = {
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1100px",
    "2xl": "1536px",
  };

  return (
    <div>
      {/* ===============NAVBAR COMPONENT================= */}
      <Navbar />
      {/* ===============SEARCHBAR COMPONENT================= */}

      <Searchbar_HomePage />
      <Text
        ml={{ base: "0rem", lg: "4.8rem" }}
        fontSize="24px"
        color="black"
        fontWeight="300"
        mt="2rem"
        mb="2rem"
        textAlign={{ base: "center", lg: "" }}
      >
        Top Destinations
      </Text>
      {/* ===============CAROUSAL COMPONENT================= */}

      <Carousal_HomePage />
      {/* ===============BODY-SECTION COMPONENT================= */}

      <BodySection_HomePage />
      <Text
        ml={{ base: "0rem", lg: "4.8rem" }}
        fontSize="24px"
        color="black"
        fontWeight="300"
        mt="2rem"
        mb="2rem"
        textAlign={{ base: "center", lg: "" }}
      >
        Vacation Ideas
      </Text>
      {/* ===============CAROUSAL-VACATION COMPONENT================= */}

      <Carousal_Vacation_Homepage />
      <Text ml="4.8rem" fontSize="14px" fontWeight="300" mb="4rem" color="blue">
        SHOW ALL IDEAS
      </Text>

      <Text
        fontSize="24px"
        color="black"
        fontWeight="200"
        mt="1rem"
        mb="2rem"
        ml={{ base: "0rem", lg: "4.8rem" }}
        textAlign={{ base: "center", lg: "" }}
      >
        Holiday Homes Across The Globe
      </Text>
      {/* ===============FOOTER COMPONENT================= */}

      <FooterTabSection_HomePage />
    </div>
  );
};

export default HomePage;
