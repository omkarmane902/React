import React, { useState } from 'react'

const FormSubmitAlert = () => {

    let [data,setData]=useState("");
    let change =(e)=>{
        setData(e.target.value)
    }
    let handel =(e)=>{
        e.preventDefault();
        alert(data)
        setData("")
        
    }
  return (
    <div className='min-h-screen flex justify-center items-center bg-linear-to-br from-indigo-500 to-purple-600'>
      
        <form 
          onSubmit={handel}
          className='bg-white p-8 rounded-2xl shadow-2xl flex flex-col gap-5 w-80'
        >
            <input 
              onChange={change}  
              type="text" 
              name='inputs' 
              value={data}
              placeholder='Enter your name'
              className='px-4 py-2 border-2 border-indigo-400 rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-indigo-500
                         text-lg'
            />

            <button 
              className='bg-indigo-600 text-white py-2 rounded-lg font-semibold
                         hover:bg-indigo-700 active:scale-95 transition'
            >
              submit
            </button>

        </form>
       
    </div>
  )
}

export default FormSubmitAlert
