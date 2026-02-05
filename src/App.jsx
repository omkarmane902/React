import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router';
import Login from './Component/Login';
import Home from './Component/Home';


const App = () => {
  return (
    <div>
     <BrowserRouter>
          <Routes>
               <Route path='/' element={<Login/>}/>
               <Route path='/home' element ={<Home/>}/>
          </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App