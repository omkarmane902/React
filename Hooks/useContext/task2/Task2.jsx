import React, { createContext } from 'react'
import Child1 from './Child1'

export const UseContext = createContext()
const Task2 = () => {
const [theam ,setTheam]= React.useState("light")

  return (
    <div>
        <UseContext.Provider value={{theam,setTheam}}>
            <Child1/>
        </UseContext.Provider>
    </div>
  )
}

export default Task2