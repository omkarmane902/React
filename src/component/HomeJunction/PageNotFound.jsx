import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div style={{ minHeight: '70vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: '#ffffff', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', padding: '40px' }} >
      <h1 style={{ fontSize: '64px', margin: '0', color: '#4b5053' }}>
        404
      </h1>x

      <h2 style={{ margin: '10px 0', color: '#333' }}>
        Page Not Found
      </h2>

      <p style={{ color: '#555', marginBottom: '25px', textAlign: 'center' }}>
        Sorry, the page you are looking for does not exist
        or has been moved.
      </p>

      <Link to="/"  style={{  textDecoration: 'none',  background: '#4b5053',  color: '#fff',  padding: '10px 20px',  borderRadius: '6px',  fontWeight: '500'}}>
        Go Back Home
      </Link>
    </div>
  )
}

export default PageNotFound
