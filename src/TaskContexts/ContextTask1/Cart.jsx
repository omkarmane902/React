import React, { useState } from 'react'
import { useContext } from 'react'
import { gobaldata } from './Context'

const Cart = () => {
 let {list ,setList}= useContext(gobaldata)
 let [cart ,setCart] = useState('')

 let changehandel = (e)=>{
    setCart(e.target.value)
 }
 let clickhandel =(e)=>{
     e.preventDefault()
     setList([...list,cart])
     setCart('')
 
 }
 console.log(list);
 

  return (
    <div>
        <div>
            <form action="" style={{display: 'flex',gap: '10px',marginBottom: '20px',}}>
                <input type="text" value={cart} onChange={changehandel}   style={{ padding: '10px',width: '250px',fontSize: '16px', border: '2px solid #ccc',borderRadius: '6px', outline: 'none'}}/>
                <button onClick={clickhandel}style={{padding: '10px 18px',backgroundColor: '#4f46e5',color: 'white',border: 'none',borderRadius: '6px',cursor: 'pointer',fontSize: '15px',}}>Add</button>
            </form>
        </div>
        <div>
            {list.map((value , index)=>{
                return(
                    <div key={index} style={{backgroundColor: '#f3f4f6',marginBottom: '10px',  padding: '12px',borderRadius: '6px'}}>
                        <h1 style={{fontSize: '20px', color: '#111827',margin: 0}}>
                           {value}
                        </h1>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Cart