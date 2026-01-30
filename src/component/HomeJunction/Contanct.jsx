import React from 'react'

const Contanct = () => {
  return (
    <div style={{ background: '#ffffff', padding: '40px', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', maxWidth: '700px' }} >
      <h2 style={{ marginBottom: '15px', color: '#333' }}>📞 Contact Us</h2>

      <p style={{color: '#555',fontSize: '15px',marginBottom: '25px'}}>Have any questions or feedback?  Fill out the form below and we’ll get back to you.</p>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input type="text" placeholder="Your Name" style={{ padding: '12px', borderRadius: '6px', border: '1px solid #ccc' }}/>
        <input type="email" placeholder="Your Email" style={{   padding: '12px', borderRadius: '6px',border: '1px solid #ccc' }}/>
        <textarea placeholder="Your Message" rows="4" style={{   padding: '12px',   borderRadius: '6px',  border: '1px solid #ccc',resize: 'none' }}/>
        <button  type="submit" style={{  padding: '12px', background: '#4b5053', color: '#fff', border: 'none', borderRadius: '6px' ,cursor: 'pointer',fontWeight: '500'  }}>Send Message </button>
      </form>
    </div>
  )
}

export default Contanct
