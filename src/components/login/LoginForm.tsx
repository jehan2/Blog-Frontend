import { Box, Button, Input, VStack , Text} from '@chakra-ui/react'
import React from 'react'

interface ILognForm {
  email: string;
  password: string;
  submitLogin:()=>Promise<void>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}
const LoginForm = ({email,password,submitLogin, setEmail,setPassword}:ILognForm ) => {
   
  return (
    <VStack align='left' spacing='1rem' width='100%' border='1px white' padding='50px' backgroundColor='whiteAlpha.400'>
    <Box>
        <Text>Email</Text>
        <Input 
        onChange={(e)=> setEmail(e.target.value)} 
        value={email} 
        type='email' 
        backgroundColor='whiteAlpha.400'
        />
    </Box>
  <Box>
    <Text>Password</Text>
    <Input 
    onChange={(e)=>setPassword(e.target.value)}
    value={password} 
    type='password' 
    backgroundColor='whiteAlpha.400'/>
  </Box>
    <Button onClick={submitLogin}>Login</Button>
  </VStack>
  )
}

export default LoginForm