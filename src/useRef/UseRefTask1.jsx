import React, { useEffect, useRef } from 'react'

const UseRefTask1 = () => {
    let h1ref = useRef()
    useEffect(()=>{
        h1ref.current.style.background = 'gray'
    },[])
  return (
    <div >
         <h1 ref={h1ref}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam autem eaque ratione, totam iure deserunt exercitationem minima quia quidem suscipit!</h1>
    </div>
  )
}

export default UseRefTask1