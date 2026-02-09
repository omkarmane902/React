import React from 'react'
import Theme from './ThemeContext/Theme'
import ThemeContext from './ThemeContext/ThemeContext'

const App = () => {
  return (
    <div>
         <div>
              <ThemeContext>
                        <Theme/>  
              </ThemeContext>
         </div>
    </div>
  )
}

export default App