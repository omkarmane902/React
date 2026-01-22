import React, { useState } from 'react'
const FileHandlingTask = () => {
    let [state ,setState]=useState({username: '', password: ''});
    let [list,setList] =useState([]);

    let handling =(e)=>{
        setState({...state,[e.target.name]:e.target.value})
    };
    let submit  =(e)=>{
        e.preventDefault()
        setList([...list,state]);
        setState({
            username:'',
            password:''
        })
    }
    console.log(list);
    
  return (
    <div>
      
      <form action="" className='flex justify-center items-center  w-screen h-screen '>
          <div className='h-60 w-70 border-2 bg-amber-400 flex justify-center items-center rotate-9 rounded-2xl '>
            <div className=''>
                <h1>userNmae</h1>
            <input type="text" onChange={handling} value={state.username} name='username' className='bg-emerald-200  border-2 ' />
          <br />
          <br />
          <h1>Password</h1>
          <input type="text" onChange={handling} value={state.password} name='password'className='bg-emerald-200 border-2 '/>
          <br />
          <br />
          <button onClick={submit } type='submit' className='border-2 rounded-4x2 bg-amber-200'>submit</button>
          </div>
          </div>
      </form>
    </div>
  )
}

export default FileHandlingTask
