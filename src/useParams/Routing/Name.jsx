import React from 'react'
import { useParams } from "react-router-dom";

const Name = () => {

    const parem = useParams();
  return (
    <div>
        
        <h1>Default page of Name {parem.name} </h1>
    </div>
  )
}

export default Name