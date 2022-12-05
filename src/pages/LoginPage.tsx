import {
    Flex,
    Heading,
    Text,
    VStack,
    useToast,
    HStack,
  
  } from "@chakra-ui/react"
  import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
  import LoginForm from "../components/login/LoginForm"
  
  
  
  export const LoginPage = () =>{ 
     const [email, setEmail]=useState('')
     const [password, setPassword]= useState('')
     const navigate = useNavigate();
     const toast = useToast();
    
     const submitLogin = async ()=>{
      try{
        const request = await fetch('/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await request.json();
      if (request.status !== 200) {
        toast({
          title: data.message,
          status: 'error',
          duration: 3000,
          position: 'top',
        });
        return;
      }
      toast({
        title: data.message,
        status: 'success',
        duration: 3000,
        position: 'top',
      });
      localStorage.setItem('token', data.token);
      navigate('/');


      } catch(error){
        toast({
          title: 'Server Error !',
          status: 'error',
          duration: 3000,
          position: 'top',
        });

      }
     }
    return(
      <Flex justifyContent='center' alignItems='center' height='100vh' backgroundColor='darkkhaki'>
        <VStack spacing='2rem' width='20rem'>
          <Heading color='ghostwhite'>Login</Heading>
      <LoginForm 
      email={email} 
      setEmail={setEmail}
      setPassword={setPassword}
      password={password} 
      submitLogin={submitLogin}
      />
      <HStack>
          <Text>You don't have account ? </Text>
          <Link to='/register'>Register</Link>
        </HStack>
      </VStack>
    </Flex>    
    
  )}