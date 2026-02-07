import React, { useContext, useState } from 'react'
import { store } from './Component/Context'

const Cart = () => {
  let{cart ,setCart}=useContext(store)
  let[data,setData] = useState('')

  let onchang =(e)=>{
     setData(e.target.value)
  }
    
  let handel =(e)=>{
    e.preventDefault()
     setCart([...cart,data])
     setData('')
  }
    console.log(cart);
    
  return (
    <div>
       <div>
           <form action=""  onSubmit={handel}>
           <input type="text" value={data} onChange={onchang} />
           <button >Add</button>
       </form>
       </div>
       <div>
          {cart.map((info ,index)=>{
            return(
              <div key={index}>
                  <h1 >{info}</h1>
              </div>
            )
          })}
       </div>
    </div>
  )
}

export default Cart