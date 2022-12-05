import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoute from "./components/ProtectedRoute";
// import LoginForm from "./components/login/LoginForm"
import BlogHome from "./pages/BlogHome";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";



export const App = () =>{ 
  
  return(
    <BrowserRouter>
  <ChakraProvider theme={theme}>
       <Routes>
       <Route path='/login' element={<LoginPage />} />
       <Route path='/register' element={<RegisterPage />} />
       <Route element={<ProtectedRoute/>}>
       <Route path='/' element={<BlogHome />} />
       </Route>

       </Routes>
  </ChakraProvider>
  </BrowserRouter>
)
}

