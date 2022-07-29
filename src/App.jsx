import { Image }  from '@chakra-ui/react';
import { Routes, Route,Link } from "react-router-dom";
import { LaunchList } from './components/LaunchList';
import { LaunchDetails } from "./components/LaunchDetails";

import logoSpaceX from './assets/logo-spacex.png';

///export function en vez de export default para exportarla por el nombre
//para guardar la info de un async, se debe guardar en un estado y ver el estado


export function App() {
  

  return (

    <>
      <Link to={""}>
        <Image m={4} src={logoSpaceX} width={300} /> 

      </Link>
      <Routes>
        <Route path="/" element={<LaunchList/>}></Route>
        <Route path="launch/:launchId" element={<LaunchDetails/>}></Route>

      </Routes>
      
    </>
  );
}




