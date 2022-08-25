import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import {Box, Button, Flex, FormControl, FormErrorMessage, Heading, Input, InputGroup,Modal, ModalBody,ModalContent, ModalFooter, ModalOverlay,Text, useDisclosure} from "@chakra-ui/react"
import axios from 'axios';

const Login = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signupStoredData=useSelector((store)=>store.authReducer.signup)
  const emailError=email==="";
  const passwordError=password==="";
  const [otp,setOtp]=useState(0);
  
  const dispatch=useDispatch()
  
 
 
useEffect(()=>{
  console.log(signupStoredData)
},[])
  return (
    <Box>
        <Button onClick={onOpen}>Open Modal</Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <Flex justifyContent="space-between" p="20px">
              <Heading fontSize="lg">Signup</Heading>
              <Text><Link to="">Sign In Instead </Link></Text>
            </Flex>
              <hr style={{ width:"90%",margin:"auto"}}/>
            <ModalBody>
               
                <InputGroup>
                     <FormControl isInvalid={emailError} >
                      <Input mt="20px" type='email' placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
                      {!emailError ? "" : (
                          <FormErrorMessage>Email is required.</FormErrorMessage>
                        )}
                    </FormControl>

                </InputGroup>
                <InputGroup>
                <FormControl isInvalid={passwordError} >
                      <Input mt="20px" type='password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)} />
                      {!passwordError ? "" : (
                          <FormErrorMessage>Password is required.</FormErrorMessage>
                        )}
                    </FormControl>                
                </InputGroup>
               
            </ModalBody>
              <hr style={{width:"90%",margin:"auto"}}/>

            <ModalFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                CANCEL
              </Button>
              <Button colorScheme='blue' mr={3} >
                VERIFY WITH OTP
              </Button>
             
            </ModalFooter>
          </ModalContent>
        </Modal>
    </Box>
  )
}

export default Login