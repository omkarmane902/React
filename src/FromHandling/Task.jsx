import React, { useState } from 'react'


const Task = () => {

    let[state,setStste]=useState({ username: '', password: '' });
    let [list,setList]=useState([]);

    let summit =(e)=>{
       e.preventDefault();
    setList([...list,state]);
       setStste({
        username:'',
        password:''
       })
    };
    console.log(list);
    
  return (
    <div className='flex justify-center items-center h-screen'>
      
     <div className='border-2 h-70 w-69 bg-amber-200 rounded-2xl flex flex-col justify-center items-center'>
        <p>userName</p>
      <input type="text" onChange={(e)=>{setStste({...state,[e.target.name]:e.target.value})}} name='username' value={state.username} className='bg-fuchsia-600 border-2 text-amber-50' />
      <br />
      <br />
      <p>Password</p>
      <input type="text" onChange={(e)=>{setStste({...state,[e.target.name]:e.target.value})}} name='password' value={state.password} className='bg-fuchsia-600 border-2 text-amber-50' />
      <br />
      <br />
      <button className='border-2 bg-amber-950 text-amber-300 w-20 rounded-2xl' onClick={summit} >sumit</button>
     </div>
    </div>
  )
}

export default Task
