import React from 'react'

const Wellcome = () => {
  return (
    <div style={{ background: '#ffffff', padding: '40px', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', maxWidth: '900px'}}>
      <h1 style={{ marginBottom: '10px', color: '#333' }}>
        👋 Welcome
      </h1>

      <p style={{ color: '#555', fontSize: '16px', lineHeight: '1.6'}}>
        This is your dashboard home page. Use the sidebar or top menu
        to navigate between pages.
      </p>

      <div style={{ marginTop: '30px', display: 'flex', gap: '20px'}}>
        <div style={{ flex: 1, background: '#f5f7f9', padding: '20px', borderRadius: '8px', textAlign: 'center' }} >
          <h3>📊 Dashboard</h3>
          <p>Overview of your application</p>
        </div>

        <div style={{ flex: 1, background: '#f5f7f9', padding: '20px', borderRadius: '8px', textAlign: 'center' }} >
          <h3>⚙️ Settings</h3>
          <p>Manage your preferences</p>
        </div>

        <div style={{ flex: 1, background: '#f5f7f9', padding: '20px', borderRadius: '8px', textAlign: 'center' }} >
          <h3>📩 Messages</h3>
          <p>View recent updates</p>
        </div>
      </div>
    </div>
  )
}

export default Wellcome
