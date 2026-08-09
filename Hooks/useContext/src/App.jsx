import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/CartPage";
import CartPage from "./pages/CartPage";

const App = () => {
  return (
    <>
    
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/CartPage" element={<CartPage />} />
      </Routes>
     
    </>
  );
};

export default App;