import React, { useEffect, useState } from 'react'

const ComponentDidUpdate = () => {
    let [state,setState]= useState(0)
    let Handle =() =>{
         setState(state += 1);
    }
    useEffect(()=>{
        console.log("ComponentDidUpdate");
        
    },[state])
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={Handle}>ADD</button>
    </div>
  )
}

export default ComponentDidUpdate
