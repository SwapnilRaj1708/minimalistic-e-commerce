import React from "react";
import { Link } from "react-router-dom";

export default function NavItem({ children, className, to }) {
  return (
    <Link className={className} to={to}>
      {children}
    </Link>
  );
}
