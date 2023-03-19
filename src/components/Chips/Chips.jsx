import React from "react";
import { Link } from "react-router-dom";
import "./Chips.css";

export default function Chips({ id, title }) {
  return (
    <Link to={`/categories/${id}`} key={id}>
      <button key={id} className="category-chip">
        {title}
      </button>
    </Link>
  );
}
