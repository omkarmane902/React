import React, { useState } from 'react'

const ButtonClickCounter = () => {
     let [state ,setState]= useState(0)
    let add  =()=>{
        setState(state +=1)
    }
       let min  =()=>{
       if (state > 0) {
        setState(state -=1)
       }
    }
       let res  =()=>{
        setState(0)
    }
  return (
   
    <div className='min-h-screen flex justify-center items-center bg-amber-500 from-indigo-500 to-purple-600'>
        
       <div className='bg-white p-8 rounded-2xl shadow-2xl'>
            <div className='flex flex-col items-center gap-5'>
            <h1 className='text-3xl font-bold text-gray-800'>
              Count: <span className='text-indigo-600'>{state}</span>
            </h1>

            <div className='flex gap-4'>
            <button className='px-5 py-2 text-xl font-bold bg-green-500 text-white rounded-lg hover:bg-green-600 active:scale-95 transition' onClick={add}>+</button>
            <button className='px-5 py-2 text-xl font-bold bg-red-500 text-white rounded-lg hover:bg-red-600 active:scale-95 transition' onClick={min}>-</button>
            <button className='px-4 py-2 text-sm font-semibold bg-blue-500 text-white rounded-lg hover:bg-blue-600 active:scale-95 transition' onClick={res}>Reset</button>
            </div>

            </div>
       </div>
      
    </div>
  )
}

export default ButtonClickCounter
