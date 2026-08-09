import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Allproduct } from "../context/CartContext";

const Navbar = () => {
   const{addtocart}=React.useContext(Allproduct);
  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <Link to="/" className="navbar-logo">
          My Shop
        </Link>

        {/* Navigation Links */}
        <div className="navbar-links">
          <Link to="/" className="nav-link">
            Home
          </Link>

          <Link to="/products" className="nav-link">
            Products
          </Link>

          <Link to="/CartPage" className="nav-link cart-link">
            Cart 🛒 <sup style={{ display: addtocart.length === 0 ? "none" : "inline" }}>{addtocart.length}</sup>
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;