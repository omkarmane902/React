//? 🟡 Task 4: Login Form (Multiple States)
// Goal: Manage form state
// Requirements
// Username
// Password
// Submit → show entered values


import React, { useState } from 'react'

const Task4 = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [show,setShow]=useState(false);

    let handel =(e)=>{
      setShow(true)
    };
      let handleUsername =(e)=>{
        setUsername(e.target.value)
    };

    let handlePassword =(e)=>{
        setPassword(e.target.value)
    };


   

  return (
    <div>
      <h1>🟡 Task 4: Login Form (Multiple States)</h1>
      <h1>UserName:<input type='text' value={username} onChange={handleUsername}></input></h1>
      <h1>Password:<input type='password' value={password} onChange={handlePassword}></input></h1>
      <button onClick={handel}>Submit</button>

      {show ? (<>
                <p>userName:{username}</p>
               <p>Password:{password}</p>
      </>):null}

    </div>
  )
}

export default Task4
