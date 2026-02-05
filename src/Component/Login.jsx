import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";



const Login = () => {
    const navigate = useNavigate();
     let [state, setState]= useState({
    username:'',
    password:'',
    id :Date.now()
})
    let change =(e)=>{
  
 setState({...state,[e.target.name]:e.target.value})
}
    let handel =(e)=>{
     e.preventDefault()
      const adminUsername = "admin";
    const adminPassword = "123";

    if (
      state.username === adminUsername &&
      state.password === adminPassword
    ) {
      navigate("/home");
    } else {
      alert("Invalid Username or Password");
    }
     setState({
        username:'',
        password:'',
        id :Date.now()
     })


    }
  return (
    <div>
        <form action="" style={{display:'flex', justifyContent:'center', alignItems:'center', height:'60px', flexDirection:'column', gap:'6px'}}>
            <input  type="text" onChange={change} name='username' value={state.username}/>
            <input type="password" onChange={change} name='password' value={state.password}/>
            <button onClick={handel}>submit</button>
        </form>
    </div>
  )
}

export default Login