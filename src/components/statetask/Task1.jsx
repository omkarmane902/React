// ?🟢 Task 1: Counter App (Beginner)
// Goal: Increase / decrease number
// Requirements
// Show a number
// + button → increment
// - button → decrement
// Reset button → set to 0

import React, { useState } from 'react'

const Task1 = () => {
    let[count,setcount]=useState(0)
    let incrementhandel =()=>{setcount(count + 1)};
    let decrementhandel =()=>{setcount(count - 1)};
    let Resethandel =()=>{setcount(0)};
  return (
    <div>
      <h1>🟢 Task 1: Counter App</h1>
      <h1>count is {count}</h1>
      <button onClick={incrementhandel}>increment</button>
      <button onClick={decrementhandel}>decrement</button>
      <button onClick={Resethandel}>Reset</button>
      
    </div>
  )
}

export default Task1
