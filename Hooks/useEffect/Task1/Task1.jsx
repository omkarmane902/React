import React, { useEffect } from 'react'


const Task1 = () => {
    useEffect(() => {
        console.log("Component Mounted");
    }, [])

  return (
    <div>
        <h1>Run Only Once (Component Mount)</h1>
    </div>
  )
}

export default Task1