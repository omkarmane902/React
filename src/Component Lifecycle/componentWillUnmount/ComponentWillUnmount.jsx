import React, { useEffect } from 'react'

function ComponentWillUnmount() {
    useEffect(()=>{
        return()=>{
            console.log("This is ComponentWillUnmount"); 
        }
    },[])
  return (
    <div>
        
        <h1>h111111111111111111111111111111</h1>

    </div>
  )
}

export default ComponentWillUnmount