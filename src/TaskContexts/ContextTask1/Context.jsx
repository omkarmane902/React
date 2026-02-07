import React, { createContext, useState } from 'react'
export let gobaldata = createContext()
const Context = ({children}) => {

    let [list ,setList] = useState([])

  return (
    <gobaldata.Provider value={{list,setList}}>
      {children}
    </gobaldata.Provider>
  )
}

export default Context