import React, { useState } from 'react'

const FromTask = () => {
      let [state ,setState]=useState({
        userName:'',
        password:''
    });
    let [list ,setlist] = useState([]);
     let handler =(e)=>{
        e.preventDefault();
        setlist([...list,state]);
         
    }
    console.log(list); 
  return (
    <div>
      <form action="">
        <input onChange={(e)=>{setState({...state,userName:e.target.value})}} value={state.userName}   type="text" name='username'  className='border-2 bg-amber-200' />
        <br />
        <br />
        <input onChange={(e)=>{setState({...state,password:e.target.value})}} value={state.password} type="text" name='password'  className='border-2 bg-amber-200' />
        <br />
        <br />  
        <button onClick={handler} type="submit" className='border-2 rounded-2xl w-50'>summit</button>
      </form>
    </div>
  )
}

export default FromTask
