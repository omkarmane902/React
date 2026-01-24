import React, { useState } from 'react'

const ShowHideText = () => {
    let [toggles,setToggles]=useState(true);
    let handel =(e)=>{
        setToggles(!toggles)
       
    }
  return (
    <div className='min-h-screen flex flex-col justify-center items-center bg-linear-to-br from-emerald-400 to-teal-600 gap-6 px-6'>
      
      <button  onClick={handel}className='px-6 py-2 bg-black text-white rounded-lg text-lg font-semibold hover:bg-gray-800 active:scale-95 transition'>Toggles</button>

      <p  
        style={{ display: toggles ? "none" : "block" }}
        className='max-w-2xl bg-white/90 text-gray-800 p-6 rounded-xl shadow-lg text-base leading-relaxed'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime quisquam ex,
        quos repudiandae, voluptas praesentium temporibus earum impedit cupiditate
        fugit quam nesciunt veritatis odit facere consectetur incidunt sunt quas repellendus.
      </p>

    </div>
  )
}

export default ShowHideText
