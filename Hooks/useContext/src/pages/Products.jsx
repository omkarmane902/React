import React from 'react'
import { Allproduct } from '../context/CartContext'


const Products = () => {
  const{product,setProduct,addtocart,setAddtocart}=React.useContext(Allproduct);

   const addproduct=(id)=>{
    const selectproduct = product.find((item)=>{
        return(
          item.id === id
        )
    })

    setAddtocart([...addtocart,selectproduct])

  }
  return (
    
   
      <div>
         <h1 className='text-center title'>All Product</h1>
        <div className='flex justify-center align-top flex-wrap gap-7'>
            {
        product.map((value )=>{
         return(
          <div className="product-card " key={value.id}>

      <img
        src={value .image}
        alt={value .title}
        className="product-image"
      />

      <h2>{value .title}</h2>

      <p>${value .price}</p>

      <button onClick={()=>{addproduct(value.id)}}>Add to Cart 🛒</button>

    </div>
         )
        })
       }
        </div>
      </div>
    
  )
}

export default Products