import React from 'react'
import { Allproduct } from '../context/CartContext'

const CartPage = () => {
    const{addtocart}=React.useContext(Allproduct);
    
  return (
    <div>
      <h1 className='text-center p-14 '>Add To Cart</h1>
      <div className='flex justify-center align-top flex-wrap gap-7'>
         {
          addtocart.map((value)=>{
             return(
              <div className="product-card " key={value.id}>

      <img
        src={value.image}
        alt={value.title}
        className="product-image"
      />

      <h2>{value.title}</h2>

      <p>${value.price}</p>


    </div>
             )
          })
         }
      </div>
    </div>
  )
}

export default CartPage