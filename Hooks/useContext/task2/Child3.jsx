import React from 'react'
import { UseContext } from './Task2'

const Child3 = () => {
    const  {theam ,setTheam}=React.useContext(UseContext)
    const click=()=>{
        if (theam==='light') {
            setTheam("dark")

        } else {
           setTheam('light') 
   
        }
    }
  return (
    <div style={{background:theam==="dark"?"black":"white", width:'100%',height:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
     
     <button onClick={click}>Theam</button>



    </div>
  )
}

export default Child3