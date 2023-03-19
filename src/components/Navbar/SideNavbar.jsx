import React from "react";
import NavItem from "./NavItem";
import "./SideNavbar.css";
import { GrClose } from "react-icons/gr";
import useSideNavbar from "../../hooks/use-sideNavbar";

export default function SideNavbar() {
  const { displaySideNavbar, setDisplaySideNavbar } = useSideNavbar();

  function toggleSideNavbar() {
    setDisplaySideNavbar(!displaySideNavbar);
  }

  return (
    <>
      {
        <div
          className={`side-navbar shadow-lg ${
            !displaySideNavbar ? "" : "hide-side-navbar"
          } flex flex-col justify-center items-center`}
        >
          <div onClick={toggleSideNavbar} className="side-navbar-close-btn">
            <GrClose />
          </div>
          <div className="flex flex-col gap-2">
            <NavItem
              toggleSideNavbar={toggleSideNavbar}
              className="side-navbar-links text-center"
              to="/categories/all"
            >
              CATEGORIES
            </NavItem>
            <NavItem
              toggleSideNavbar={toggleSideNavbar}
              className="side-navbar-links text-center"
              to="/products"
            >
              PRODUCTS
            </NavItem>
          </div>
        </div>
      }
    </>
  );
}
