import React, { createContext, useState } from 'react'

export let store = createContext()
const Context = ({children}) => {

  let [cart ,setCart]= useState([])
   
  return (
    <store.Provider value={{cart,setCart}}>
        {children}
    </store.Provider>
  )
}

export default Context