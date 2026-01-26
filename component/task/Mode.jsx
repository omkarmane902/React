import React, { useState } from 'react';

const Task5 = () => {
  const [mode, setMode] = useState(true);

  const handel = () => {
    setMode(!mode);
  };

  return (
    <div
      style={{minHeight: '100vh',margin: '0',padding: '0',backgroundColor: mode ? '#ffffff' : '#1f2937',display: 'flex',justifyContent: 'center',alignItems: 'center'}}><button
        onClick={handel}
        style={{backgroundColor: mode ? '#16a34a' : '#22c55e',color: '#ffffff',border: 'none',width: '70px',height: '70px',borderRadius: '50%',fontSize: '28px',cursor: 'pointer',boxShadow: '0 10px 20px rgba(0,0,0,0.25)'}}>{mode ? '☀️' : '🌑'}</button>
    </div>
  );
};

export default Task5;
