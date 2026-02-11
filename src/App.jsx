import React, { useState } from 'react'

const App = () => {

  let [count,setCount]=useState(0);
  let handel = ()=>{
    console.log("Button clicked....");
    
  }
  return (
    <div>
        <button onClick={()=>{setCount(count + 1)}}>Count:{count}</button><br /><br />
        <button onClick={handel}>count</button>
    </div>
  )
}

export default App