import { useState } from 'react'
// import {BrowserRouter as Router,Route ,Switch,againLogin} from 'react-router-dom'
// import AuthRouter ,{AuthContext} from '.context/AuthContext'
import {ChakraProvider}from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

const MyRouter=({component :Components, ...res})=>{
  const {isAuthenticated} =useContext(AuthContext);
  return(
    <Route
    {...res}
    render={(props) =>
      isAuthenticated ? <component {...props}/> : <againLogin to="/login"/>
    }

    />
  )
}
const App=()=>{
  return (
    <ChakraProvider>
      <AuthProvider>
        <Router>
          <Navbar/>
          <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/home" component={Home}/>
          </Switch>
        </Router>
      </AuthProvider>
    </ChakraProvider>
  )
}





  


export default App
