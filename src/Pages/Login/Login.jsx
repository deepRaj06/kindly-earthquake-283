import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux/es/exports'
import { Link } from 'react-router-dom'
import {Box, Button, Flex, FormControl, FormErrorMessage, Heading, Input, InputGroup,Modal, ModalBody,ModalContent, ModalFooter, ModalOverlay,Text, useDisclosure} from "@chakra-ui/react"
import { setSignup } from '../../Redux/AuthReducer/action'
const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { isOpen, onOpen, onClose } = useDisclosure()
  const dispatch=useDispatch();

  const emailError=email===""
  const passwordError=password===""
  const [otp,setOtp]=useState(0)


  const seSignupData=()=>{
    let otptemp=Math.floor(Math.random()*5000)
    setOtp(otptemp)
    let id;
    const payload={email,password}
    // dispatch(setSignup(payload))
    if(id){
      clearTimeout(id)
    }
    id=setTimeout(()=>{
      alert("OTP:- ",otp)
    },3000)
  }
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
              <hr style={{width:"90%",margin:"auto"}}/>
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
                <FormControl isInvalid={emailError} >
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
              <Button colorScheme='blue' mr={3} onClick={seSignupData}>
                VERIFY WITH OTP
              </Button>
             
            </ModalFooter>
          </ModalContent>
        </Modal>
    </Box>
  )
}

export default Login