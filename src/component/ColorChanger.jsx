import React, { useState } from 'react'

const ColorChanger = () => {

    let [color ,setColor] = useState("white")

    let red =()=>{
      setColor('red')
    }

    let green =()=>{
      setColor('green')
    }

    let blue =()=>{
      setColor('blue')
    }

  return (
    
    <div className='min-h-screen flex justify-center items-center gap-6 transition-colors duration-500'style={{ background: color }}>
        <button onClick={red}className='px-6 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 active:scale-95 transition'>Red</button>

        <button onClick={green}className='px-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 active:scale-95 transition'>Green</button>

        <button onClick={blue}className='px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 active:scale-95 transition'>Blue</button>
    </div>
  )
}

export default ColorChanger



