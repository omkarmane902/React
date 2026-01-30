import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from '../HomeJunction/Home'
import Wellcome from '../HomeJunction/Wellcome'
import About from '../HomeJunction/About'
import Contanct from '../HomeJunction/Contanct'
import PageNotFound from '../HomeJunction/PageNotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
       path: '/Home',
        element: <Wellcome />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contanct />
      }
    ]
  },
  {
    path: '/*',
    element: <PageNotFound />
  }
])

const Junction = () => {
  return <RouterProvider router={router} />
}

export default Junction
