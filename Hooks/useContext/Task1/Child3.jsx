import React from 'react'
import { UseContext } from "./Parent";
const Child3 = () => {
  const user = React.useContext(UseContext);
  return (
    <div>
        <h1>Name: {user.name}</h1>
        <h1>Email:{user.email}</h1>
        <h1>Age:{user.age}</h1>
    </div>
  )
}

export default Child3