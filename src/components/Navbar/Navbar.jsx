import React from "react";
import "./Navbar.css";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { BiMenuAltRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import NavItem from "./NavItem";
import useSideNavbar from "../../hooks/use-sideNavbar";

export default function Navbar() {
  const { displaySideNavbar, setDisplaySideNavbar } = useSideNavbar();
  function toggleSideNavbar() {
    setDisplaySideNavbar(!displaySideNavbar);
  }

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
          <NavItem className="larger-nav-items" to="/cart">
            <FaShoppingCart />
          </NavItem>
          <div
            onClick={toggleSideNavbar}
            className="side-navbar-btn cursor-pointer"
          >
            <BiMenuAltRight />
          </div>
        </div>
      </div>
    </div>
  );
}
