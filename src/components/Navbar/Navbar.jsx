import React from "react";
import "./Navbar.css";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { BiMenuAltRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import NavItem from "./NavItem";
import useSideNavbar from "../../hooks/use-sideNavbar";
import { useState } from "react";
import Cart from "./Cart";

export default function Navbar() {
  const { displaySideNavbar, setDisplaySideNavbar } = useSideNavbar();
  function toggleSideNavbar() {
    setDisplaySideNavbar(!displaySideNavbar);
  }
  const [showCart, setShowCart] = useState(false);
  function handleClick() {
    setShowCart(true);
  }
  function handleClose() {
    setShowCart(false);
  }
  const actionBar = <button onClick={handleClose}>I accept</button>;
  // const cart = (
  //   <Cart actionBar={actionBar} onClose={handleClose}>
  //     Hi there! This is a cart
  //   </Cart>
  // );

  return (
    <div className="navbar shadow">
      <div className="flex flex-row items-center justify-between">
        <Link to="/">
          <div className="navbar-logo-container cursor-pointer flex justify-center items-center">
            <img className="navbar-logo" src={logo} alt="logo" />
          </div>
        </Link>
        <div className="navbar-links flex flex-row items-center">
          <NavItem className="display-none" to="/categories/all">
            CATEGORIES
          </NavItem>
          <NavItem className="display-none" to="/product/1">
            PRODUCTS
          </NavItem>
          <div
            onClick={handleClick}
            className="cursor-pointer larger-nav-items"
            to="/cart"
          >
            <FaShoppingCart />
          </div>
          <div
            onClick={toggleSideNavbar}
            className="side-navbar-btn cursor-pointer"
          >
            <BiMenuAltRight />
          </div>
          {showCart && <Cart handleClose={handleClose} />}
        </div>
      </div>
    </div>
  );
}
