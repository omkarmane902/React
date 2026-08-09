import React, {createContext,useEffect,useState} from "react";
import axios from "axios";

export const Allproduct = createContext();

const CartContext = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [addtocart , setAddtocart] = useState([])

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log("Error fetching products:", error);
      });
  },[]);

  console.log(product);

  return (
    <Allproduct.Provider value={{ product, setProduct ,addtocart , setAddtocart }}>
      {children}
    </Allproduct.Provider>
  );
};

export default CartContext;