import React, { useEffect } from 'react'

const ComponentDidMount = () => {
    useEffect(()=>{
        console.log(" This is componentDidMount");
    },[])
  return (
    <div>
      <h1>hello word </h1>
    </div>
  )
}

export default ComponentDidMount
