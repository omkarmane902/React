import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const Home = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      
      <nav style={{display: 'flex',justifyContent: 'flex-end',alignItems: 'center',gap: '25px',background: '#c6cccf',padding: '15px 30px',boxShadow: '0 2px 6px rgba(0,0,0,0.1)'}}> <Link style={navLink} to="/home">Home</Link> <Link style={navLink} to="/about">About</Link> <Link style={navLink} to="/contact">Contact</Link>
      </nav>

      
      <div style={{ display: 'flex', flex: 1 }}>
        
        
        <aside style={{ width: '280px', background: '#bddbed', padding: '30px 20px', display: 'flex', flexDirection: 'column', gap: '20px', boxShadow: '2px 0 6px rgba(0,0,0,0.1)' }}  >
          <Link style={sideLink} to="/home">🏠 Home</Link>
          <Link style={sideLink} to="/about">ℹ️ About</Link>
          <Link style={sideLink} to="/contact">📞 Contact</Link>
        </aside>

       
        <main style={{ flex: 1, padding: '30px', background: '#f5f7f9' }} >
          <Outlet />
        </main>
      </div>
      <footer style={{ background: '#4b5053', color: '#fff', padding: '20px 40px', textAlign: 'center', fontSize: '14px' }}>
        © {new Date().getFullYear()} My Dashboard · All Rights Reserved
      </footer>
    </div>
  )
}

const navLink = {textDecoration: 'none',color: '#333',fontWeight: '500'}

const sideLink = {textDecoration: 'none',color: '#333',fontWeight: '500',padding: '10px 15px',borderRadius: '6px',background: '#e6f1f8'}

export default Home
