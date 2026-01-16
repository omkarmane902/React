// ?🟢 Task 3: Input Box (Controlled Component)
// Goal: Learn controlled input
// Requirements
// Input field
// Show typed text live below input

import { useState } from "react";

const Task3 = () => {

    let[text,setTest]=useState("")
   let handel = (e)=>{
      setTest(e.target.value)
   };
  return (
    <div>
        <h1>🟢 Task 3: Input Box (Controlled Component)</h1>
      <h2>Controlled Input Example</h2>

      <input type="text"
      value={text}
       onChange={handel}/>

     <p>Somthing ......{text}</p>
    </div>
  )
}

export default Task3
