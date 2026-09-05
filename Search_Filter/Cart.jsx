import axios from "axios";
import React, { useEffect, useState } from "react";

import "./Cart.css";

const Cart = () => {
  const [cartData, setCartData] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    axios.get(import.meta.env.VITE_CART_API_URL)
      .then((response) => {
       setCartData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

    const handelvalue = (e)=>{
       setValue(e.target.value);
    }

  return (
    <div className="cart-container">

      <h1 className="headline">Cart</h1>

      <input type="text" className="cart-search" placeholder="Search products..." value={value} onChange={handelvalue}/>

      <div className="cart-list">

        {cartData.filter((item)=>{
            if (value==="") {
                return item;
            }
            if (item.title.toLowerCase().includes(value.toLowerCase())) {
                return item;
            } else {
                return null;
            }
        }).map((item) => {
          return (
            <div className="cart-card" key={item.id}>

              <div className="cart-image-box">
                <img src={item.image} alt={item.title} className="cart-image"/> </div>

              <div className="cart-details">

                <h2 className="cart-title">{item.title}</h2>

                <p className="cart-price"> ${item.price.toFixed(2)}</p>

                <button className="cart-button"> Add To Cart</button>

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
};

export default Cart;