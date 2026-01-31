import React from 'react'
import { Link, NavLink } from 'react-router'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div>
       <nav className='flex w-screen h-16 items-center justify-between bg-amber-200 shadow-md p-4.5 '>
        <div>
            <h1>
              <img className='h-12 bg-transparent mix-blend-multiply cursor-pointer' src={logo} alt="" />
            </h1>
        </div>
        <div className='flex gap-6 text-lg font-medium'>
            <NavLink className={({isActive}) => isActive ? 'text-indigo-600 font-bold' : 'hover:text-indigo-600'} to='/'>Home</NavLink>
            <NavLink className={({isActive}) => isActive ? 'text-indigo-600 font-bold' : 'hover:text-indigo-600'} to='/about'>About</NavLink>
            <NavLink className={({isActive}) => isActive ? 'text-indigo-600 font-bold' : 'hover:text-indigo-600'} to='/feedback'>Feedback</NavLink>
            <NavLink className={({isActive}) => isActive ? 'text-indigo-600 font-bold' : 'hover:text-indigo-600'} to='/contact'>Contact</NavLink>
        </div>
       </nav>
    </div>
  )
}

export default Navbar
