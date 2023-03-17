import React from "react";
import "./Navbar.css";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { BiMenuAltRight } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar bg-gray-200 ">
      <div className="flex flex-row items-center justify-between">
        <Link to="/">
          <div className="navbar-logo-container cursor-pointer flex justify-center items-center">
            <img className="navbar-logo h-auto" src={logo} alt="logo" />
          </div>
        </Link>
        <div className="navbar-links flex flex-row items-center">
          <Link to="/categories">CATEGORIES</Link>
          <Link to="/products">PRODUCTS</Link>
          <Link to="/cart">
            <FaShoppingCart />
          </Link>
          <BiMenuAltRight />
        </div>
      </div>
    </div>
  );
}
