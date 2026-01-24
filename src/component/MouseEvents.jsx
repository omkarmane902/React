// Task:
// Create a box:=
// On hover → change color
// On mouse leave → reset color
// Concepts used:

import React, { useState } from 'react'

const MouseEvents = () => {
 let [colour,setColour] = useState("white");

  let  onMouseEnterfunction =()=>{
    setColour("red")
  }
  let onMouseLeavefunction =()=>{
    setColour('orange')
  }
  return (
    <div className='w-135 h-135 border-2 ' style={{background:colour}}  onMouseEnter={onMouseEnterfunction}  onMouseLeave={onMouseLeavefunction}>
       
    </div>
  )
}

export default MouseEvents
