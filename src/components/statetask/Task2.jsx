//? 🟢 Task 2: Show / Hide Text
// Goal: Toggle UI
// Requirements
// Button: Show / Hide
// On click → text appears/disappears

import React, { useState } from 'react'

const Task2 = () => {
let[show, setshow]=useState(true)

let fun =()=>{setshow(!show)};

  return (
    <div>
      <h1> 🟢 Task 2: Show / Hide Text </h1>
      <button onClick={fun}>Show</button>
      <p style={{display : `${show ? 'block':'none'}`}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, autem praesentium. Perferendis sit, dolorum natus delectus necessitatibus perspiciatis amet neque tempore odio non deleniti aspernatur nulla dolores facilis ullam saepe?</p>
    </div>
  )
}

export default Task2
