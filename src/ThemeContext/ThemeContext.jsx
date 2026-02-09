import React, { createContext, useState } from 'react'
export let store = createContext()
const ThemeContext = ({children}) => {
    let [dark , isDark] = useState(true);
        
  return (
    <store.Provider value={{dark,isDark}}>
        {children}
    </store.Provider>
  )
}

export default ThemeContext