import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Icon,
  IconButton,
  Image,
  Select,
  Text,
  useBoolean,
  useDisclosure,
} from "@chakra-ui/react";
import contact_icon from "../Images/contact_icon.png";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { RiContactsFill } from "react-icons/ri";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // console.log(onClose)
  const [placement, setPlacement] = React.useState("right");

  const [currency, setCurrency] = useState('INR');
  const [isActive, setIsActive] = useBoolean();

  const handleCurrency = (e) => {
    // console.log(e.target.innerText)
    console.log(isActive)
    setCurrency(e.target.innerText);
    // setIsActive = true
    console.log(setIsActive);
    console.log(isActive);
  }

  const hover = {
    textDecoration: 'underline', 
    cursor: 'pointer'
  }

  return (
    <Box
      w="100%"
      h="60px"
      border="1px solid black"
      backgroundColor="black"
      margin="auto"
    >
        <Flex justifyContent="space-between">
          <Box 
        //   border="1px solid red" 
          h="60px" ml='1rem'>
            <Image
              w="100%"
              h="26px"
              src="https://d2v8elt324ukrb.cloudfront.net/static/riotuikit/images/logo.c72056a22f91.png"
              alt="tripVillas_Logo"
              display='block'
              margin='auto'
              mt='1rem'
            ></Image>
          </Box>
          <Box 
        //   border="1px solid blue" 
          h="60px" mr='1rem'>
            <Flex justifyContent='center' alignItems='center' h='60px'>
              {/* <Image w="20%" h="80px" src={contact_icon}></Image> */}
              <Icon 
              color='white' 
            //   ml="2rem" mr="2rem"
               w={6} 
               h={10} as={RiContactsFill}></Icon>
              <Popover placement="bottom" returnFocusOnClose={false}>
              <PopoverTrigger >
              <Button color='white' ml='0.8rem' variant='link' rightIcon={<ChevronDownIcon />}>{currency}</Button>
              </PopoverTrigger>
              <PopoverContent width='240px' mr='4rem' borderRadius='none'>
                {/* <PopoverArrow /> */}
                <PopoverBody>
                  <Box 
                  w="200px" 
                  h="auto" 
                  // border="1px solid black" 
                  color='#1e87f0'
                  >
                    <Flex justifyContent='space-evenly'>
                      <Text _hover={hover} onClick={(e) => handleCurrency(e)}>AED</Text>
                      <Text _hover={hover} onClick={(e) => handleCurrency(e)}>AUD</Text>
                      <Text _hover={hover} onClick={(e) => handleCurrency(e)}>BRL</Text>
                    </Flex>
                    <Flex justifyContent='space-evenly'>
                      <Text _hover={hover} onClick={(e) => handleCurrency(e)}>AED</Text>
                      <Text _hover={hover} onClick={(e) => handleCurrency(e)}>AUD</Text>
                      <Text _hover={hover} onClick={(e) => handleCurrency(e)}>BRL</Text>
                    </Flex>
                    <Flex justifyContent='space-evenly'>
                      <Text _hover={hover} onClick={(e) => handleCurrency(e)}>AED</Text>
                      <Text _hover={hover} onClick={(e) => handleCurrency(e)}>AUD</Text>
                      <Text _hover={hover} onClick={(e) => handleCurrency(e)}>BRL</Text>
                    </Flex>
                    <Flex justifyContent='space-evenly'>
                      <Text _hover={hover} onClick={(e) => handleCurrency(e)}>AED</Text>
                      <Text _hover={hover} onClick={(e) => handleCurrency(e)}>AUD</Text>
                      <Text _hover={hover} onClick={(e) => handleCurrency(e)}>BRL</Text>
                    </Flex>
                    <Flex justifyContent='space-evenly'>
                      <Text _hover={hover} onClick={(e) => handleCurrency(e)}>AED</Text>
                      <Text _hover={hover} onClick={(e) => handleCurrency(e)}>AUD</Text>
                      <Text _hover={hover} onClick={(e) => handleCurrency(e)}>BRL</Text>
                    </Flex>
                    <Flex justifyContent='space-evenly'>
                      <Text _hover={hover} onClick={(e) => handleCurrency(e)}>AED</Text>
                      <Text _hover={hover} onClick={(e) => handleCurrency(e)}>AUD</Text>
                      <Text _hover={hover} onClick={(e) => handleCurrency(e)}>BRL</Text>
                    </Flex>
                    <Flex justifyContent='space-evenly'>
                      <Text _hover={hover} onClick={(e) => handleCurrency(e)}>AED</Text>
                      <Text _hover={hover} onClick={(e) => handleCurrency(e)}>AUD</Text>
                      <Text _hover={hover} onClick={(e) => handleCurrency(e)}>BRL</Text>
                    </Flex>
                    <Flex justifyContent='space-evenly'>
                      <Text _hover={hover} onClick={(e) => handleCurrency(e)}>AED</Text>
                      <Text _hover={hover} onClick={(e) => handleCurrency(e)}>AUD</Text>
                      <Text _hover={hover} onClick={(e) => handleCurrency(e)}>BRL</Text>
                    </Flex>
                    <Flex justifyContent='space-evenly'>
                      <Text _hover={hover} onClick={(e) => handleCurrency(e)}>AED</Text>
                      <Text _hover={hover} onClick={(e) => handleCurrency(e)}>AUD</Text>
                      <Text _hover={hover} onClick={(e) => handleCurrency(e)}>BRL</Text>
                    </Flex>
                  </Box>
                </PopoverBody>
              </PopoverContent>
            </Popover>
              <Button
                as={IconButton}
                // aria-label="Options"
                icon={<HamburgerIcon color='white' h='6' w='6' />}
                backgroundColor='black'
                color='white'
                colorScheme="white"
                onClick={onOpen}
                _hover={{
                    bg: 'none',
                    color: 'none'
                }}
              >
                {/* Open */}
              </Button>
              <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerHeader borderBottomWidth="1px">
                    Basic Drawer
                  </DrawerHeader>
                  <DrawerBody backgroundColor="black" color="white">
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            </Flex>
          </Box>
        </Flex>
    </Box>
  );
};

export default Navbar;
