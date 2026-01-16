//? 🟡 Task 5: Change Theme (Light / Dark)
// Goal: Boolean state
// Requirements
// Button: Toggle Theme
// Background changes

import React, { useState } from 'react'

const Task5 = () => {
    let [mode,setMode] = useState("gray")
    let[text,setText] =useState("black")
    let handal =()=>{
       if (mode=="gray") {
         setMode("pink")
         setText("black")
       }
       else
       {
        setMode("gray")
        setText("pink")
       }
    };
  return (
    <div>
       <button onClick={handal}>Toggle</button>
       <div style={{display:"flex" ,justifyContent:"center",alignItems:"center",padding:"2px", }}>
        <p style={{height:"700px",width: "100%", border:"2px solid black",display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center",padding:"20px", background : mode ,color:text}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse facere doloremque inventore veniam reiciendis, molestias corporis. Rerum, tempora aliquam dicta officiis nemo at   enim animi aspernatur aut eaque, assumenda tenetur.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis reiciendis quidem eos cumque eius perferendis sint quas deserunt, culpa illo distinctio alias? Obcaecati doloremque cumque tempora repudiandae, laboriosam at.
          adipisicing elit. Esse facere doloremque inventore veniam reiciendis, molestias corporis. Rerum, tempora aliquam dicta officiis nemo at enim animi aspernatur aut eaque, assumenda tenetur.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis reiciendis quidem eos cumque eius perferendis sint quas deserunt, culpa illo distinctio alias? Obcaecati doloremque cumque tempora repudiandae, laboriosam at.
        </p>
       </div>
       <div>
        
       </div>
    </div>
  )
}

export default Task5
