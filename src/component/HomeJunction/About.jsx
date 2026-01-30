import React from 'react'

const About = () => {
  return (
    <div style={{ background: '#ffffff', padding: '40px', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', maxWidth: '900px' }} >
      <h2 style={{ marginBottom: '15px', color: '#333' }}>
        ℹ️ About This App
      </h2>

      <p style={{ color: '#555', fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }} >
        This application is built using <strong>React</strong> and
        <strong> React Router</strong> to demonstrate a modern
        dashboard-style layout with navigation, nested routes,
        and clean UI design.
      </p>

      <p style={{ color: '#555', fontSize: '16px', lineHeight: '1.6' }} >
        It includes a top navigation bar, a sidebar, and multiple
        pages such as Welcome, About, Contact, and a custom 404 page.
        The layout is responsive and easy to extend with backend
        APIs or additional features.
      </p>

      <div style={{ marginTop: '30px', padding: '20px', background: '#f5f7f9', borderRadius: '8px' }} >
        <h4 style={{ marginBottom: '10px' }}>🚀 Technologies Used</h4>
        <ul style={{ margin: 0, paddingLeft: '20px', color: '#555' }}>
          <li>React</li>
          <li>React Router v6</li>
          <li>JavaScript (ES6+)</li>
          <li>Inline CSS Styling</li>
        </ul>
      </div>
    </div>
  )
}

export default About
