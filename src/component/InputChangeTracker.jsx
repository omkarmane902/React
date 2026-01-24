import React, { useState } from 'react'

const InputChangeTracker = () => {
     
    let [text,setText]=useState("");

    let handel =(e)=>{
       setText(e.target.value)
    };
  return (
    <div className='min-h-screen flex flex-col justify-center items-center bg-linear-to-br from-sky-400 to-indigo-500 gap-6'>
      
      <input 
        type="text" 
        name="" 
        id="" 
        onChange={handel}
        placeholder="Type something..."
        className='w-72 px-4 py-2 rounded-lg border-2 border-indigo-500 
                   focus:outline-none focus:ring-2 focus:ring-indigo-400
                   text-lg shadow-md'
      />

      <p className='text-xl font-semibold text-white bg-black/40 px-6 py-2 rounded-lg'>
        {text}
      </p>

    </div>
  )
}

export default InputChangeTracker
