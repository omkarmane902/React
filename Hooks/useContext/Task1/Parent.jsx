import React, { createContext } from 'react'
import Child1 from './child1';

//first we have to create context and then we have to wrap the parent component with context provider and then we have to pass the value to the provider and then we have to use the useContext hook in the child component to get the value from the context provider.
export const UseContext = createContext();
const Parent = () => {
    const [user , setUser] = React.useState({
        name: "John Doe",
        email: "john.doe@example.com",
        age: 30
    });
  return (
    <div>
        <UseContext.Provider value={user}>
            <Child1/>
        </UseContext.Provider>
    </div>
  )
}

export default Parent
