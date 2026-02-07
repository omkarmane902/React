import React, { useEffect, useState } from 'react'
import { useRef } from 'react'

const UseRefTask2 = () => {
    let [count,setCount]= useState(0)
    let ref1 = useRef(0)

    
    useEffect(()=>{
        ref1.current = ref1.current =+ 1
        console.log(`component re-render ${ref1.current}`);
        
    })
  return (
    <div>
        <button ref={ref1} onClick={()=>{setCount(count +=1)}}>Count:{count}</button>
    </div>
  )
}

export default UseRefTask2