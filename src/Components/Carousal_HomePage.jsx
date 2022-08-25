import { Box, Flex, HStack, IconButton, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Carousal_HomePage = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Box w="100%" 
    // border="1px solid blue" 
    >
      <Flex direction="row" >
        <Box 
        // border="1px solid red"
         maxW='4%'>
          <IconButton
            pl='1rem'
            mt='3.6rem'
            bg="none"
            borderRadius="50%"
            icon={<BsChevronLeft color="gray" fontSize="26px" />}
          />
        </Box>
     

      <Box
        w="94%"
        // border="1px solid black"
        m="auto"
        pl="2rem"
        // pr="auto"
        // alignContent="center"
        // alignItems="center"
        justifyContent="space-between"
        gap='40px'
      >
        {/* <h2> Responsive </h2> */}
        <Slider {...settings} >
          <Box maxW="250px" h="150px" 
          border="1px solid red"
          >
            <h3>1</h3>
          </Box>
          <Box maxW="250px" h="150px"
           border="1px solid red"
           >
            <h3>2</h3>
          </Box>
          <Box maxW="250px" h="150px" 
          border="1px solid red"
          >
            <h3>3</h3>
          </Box>
          <Box maxW="250px" h="150px" 
          border="1px solid red"
          >
            <h3>4</h3>
          </Box>
          <Box maxW="250px" h="150px" 
          border="1px solid red"
          >
            <h3>5</h3>
          </Box>
          {/* <Box maxW="240px" h="150px" border="1px solid red">
            <h3>6</h3>
          </Box>
          <Box maxW="240px" h="150px" border="1px solid red">
            <h3>7</h3>
          </Box>
          <Box maxW="240px" h="150px" border="1px solid red">
            <h3>8</h3>
          </Box> */}
        </Slider>
      </Box>

      {/* <Flex direction="row-reverse" justifyContent="center" alignContent="center"> */}
        <Box>
          <IconButton
            pr='1rem'       
            mt='3.6rem'
            bg="none"
            borderRadius="50%"
            icon={<BsChevronRight color="gray" fontSize="26px" />}
          />
        </Box>
      {/* </Flex> */}
      </Flex>
    </Box>
  );
};

export default Carousal_HomePage;
