import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  const linkStyle = ({ isActive }) => ({
    textDecoration: 'none',
    color: isActive ? 'yellow' : 'white',
    fontSize: '18px',
    fontWeight: isActive ? 'bold' : 'normal',
    borderBottom: isActive ? '2px solid yellow' : 'none',
    padding: '8px'
  })

  return (
    <nav
      style={{
        height: '60px',
        width: "100%",
        background: "gray",
        display: 'flex',
        justifyContent: "space-around",
        alignItems: 'center'
      }}
    >
      <NavLink to="/" style={linkStyle}>Home</NavLink>
      <NavLink to="/name/" style={linkStyle}>Name</NavLink>
      <NavLink to="/about" style={linkStyle}>About</NavLink>
      <NavLink to="/contact" style={linkStyle}>Contact</NavLink>
    </nav>
  )
}

export default Navbar
