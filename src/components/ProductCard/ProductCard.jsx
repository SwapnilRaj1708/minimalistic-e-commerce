import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

export default function ProductCard({ classname, name, price, id, image }) {
  return (
    <Link key={id} to={`/product/${id}`}>
      <div
        className={`product cursor-pointer p-1 flex flex-col gap-4 ${classname}`}
      >
        <div className="product-card-image-container">
          <img className="product-image" src={image} alt="product" />
        </div>
        <div className="product-info w-full">
          <div className="product-name-container">
            <p className="product-name p-1">{name}</p>
          </div>
          <p className="product-price p-1">₹{price}</p>
        </div>
      </div>
    </Link>
  );
}
