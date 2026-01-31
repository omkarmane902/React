import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from '../Component/Home';
import About from '../Component/About';
import Feedback from '../Component/Feedback';
import Contact from '../Component/Contact';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import PageNotFound from '../Component/PageNotFound';
const Junction = () => {

    let routers = createBrowserRouter([
        {
            path:'/',
            element:
            <div>
                <Navbar></Navbar>
                <Home></Home>
                <Footer></Footer>
            </div>
        },
        {
            path:'/about',
            element:
            <div>
                <Navbar></Navbar>
                <About></About>
                <Footer></Footer>
            </div>
        },
        {
            path:'/feedback',
            element:
            <div>
                <Navbar></Navbar>
                <Feedback></Feedback>
                <Footer></Footer>
            </div>
        },
        {
         path:'/contact',
            element:
            <div>
                <Navbar></Navbar>
                <Contact></Contact>
                <Footer></Footer>
            </div>
        },
        {
            path:'*',
            element:<PageNotFound></PageNotFound>
        }
    ])

  return (
    <div>
        <RouterProvider router={routers}/>
        
    </div>
  )
}

export default Junction