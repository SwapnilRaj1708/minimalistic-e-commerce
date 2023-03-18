import React from "react";
import { Link } from "react-router-dom";

export default function NavItem({ toggleSideNavbar, children, className, to }) {
  return (
    <Link onClick={toggleSideNavbar} className={className} to={to}>
      {children}
    </Link>
  );
}
