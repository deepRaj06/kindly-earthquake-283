import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Select,
  SimpleGrid,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar";

const PropertyPageFour = () => {
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  const toast = useToast();
  const [cabinCount, setCabinCount] = useState(1);
  const [cabinGuestCount, setCabinGuestCount] = useState(1);
  const [cabinBedCount, setCabinBedCount] = useState(1);
  const [cabinBathCount, setCabinBathCount] = useState(1);
  const [cabinFacilities, setCabinFacilities] = useState([]);
  const number = new Array(40);
  for (let i = 0; i < 40; i++) {
    number[i] = i + 1;
  }
  const room = new Array(10);
  for (let i = 0; i < 10; i++) {
    room[i] = i + 1;
  }
  const facility = [
    "Kitchen",
    "AC",
    "TV",
    "Sofa",
    "Microwave",
    "Fridge",
    "Induction Cooktop",
    "Balcony",
    "Bathtub",
    "Housekeeping",
    "Linen Provided",
    "Private Swimming Pool",
    "Toiletries",
  ];
  const handleFacility = (e) => {
    let newFacilities = [...cabinFacilities];
    if (newFacilities.includes(e)) {
      newFacilities.splice(newFacilities.indexOf(e), 1);
    } else {
      newFacilities.push(e);
    }
    setCabinFacilities(newFacilities);
  };
  const handleNext = () => {
    const payload = {
      cabins: cabinCount,
      guestsAllowed: cabinGuestCount,
      beds: cabinBedCount,
      bathrooms: cabinBathCount,
      facilities: cabinFacilities,
    };
    if (cabinFacilities.length > 1) {
      axios
        .patch(`http://localhost:8000/form/${location.state}`, {
          cabinFacilities: payload,
        })
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            toast({
              title: "Cabin added",
              status: "success",
              duration: 2000,
              isClosable: true,
            });
            navigate("/addproperty-form-5", { state: location.state });
          }
        });
    } else {
      return toast({
        title: "Select atleast two facilities",
        status: "info",
        duration: 1000,
        isClosable: true,
      });
    }
  };
  return (
    <Box position="relative">
      <Navbar/>
      <Box width="80vw" margin="2rem auto" boxShadow="base" padding="1rem">
        <Box>
          <Heading fontWeight="light">
            Tell us more about the accommodation type
          </Heading>
          <hr />
          <Box>
            <Text>
              <b>Cabin</b>
            </Text>
            <hr />
            <Box>
              <Text>How many Cabin do you have?</Text>
              <Select
                required
                value={cabinCount}
                onChange={(value) => setCabinCount(value)}
              >
                {number?.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </Select>
              <Text>Max Guest In Each Cabin</Text>
              <Select
                required
                value={cabinGuestCount}
                onChange={(value) => setCabinGuestCount(value)}
              >
                {number?.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </Select>
              <Text>Bedrooms In Each Cabin</Text>
              <Select
                required
                value={cabinBedCount}
                onChange={(value) => setCabinBedCount(value)}
              >
                {room?.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </Select>
              <Text>Bathrooms In Each Cabin</Text>
              <Select
                required
                value={cabinBathCount}
                onChange={(value) => setCabinBathCount(value)}
              >
                {room?.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </Select>
              <Box>
                <Text>Select whats applicable for Cabin</Text>
                <SimpleGrid minChildWidth="100px" spacing="30px">
                  {facility.map((item, index) => {
                    return (
                      <Checkbox
                        key={index}
                        value={item}
                        onChange={(e) => handleFacility(e.target.value)}
                      >
                        {item}
                      </Checkbox>
                    );
                  })}
                </SimpleGrid>
              </Box>
            </Box>
          </Box>
        </Box>
        <Flex justify="space-between">
          <Button
            onClick={() => navigate(-1)}
            borderRadius="none"
            variant="outline"
            colorScheme="lightgray"
          >
            PREVIOUS
          </Button>
          <Button
            borderRadius="none"
            variant="solid"
            colorScheme="blue"
            onClick={handleNext}
          >
            NEXT
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default PropertyPageFour;
