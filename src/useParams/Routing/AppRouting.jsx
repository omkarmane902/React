import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Name from './Name';
import Navbar from './Navbar';
const AppRouting = () => {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route  path='/' element={<Home/>}/>
            <Route  path='/about' element={<About/>}/>
            <Route  path='/contact/:name?/:contact?' element={<Contact/>}/>
            <Route  path='/name/:name?' element={<Name/>}/>
        </Routes>
        </BrowserRouter>
        
    </div>
  )
}

export default AppRouting