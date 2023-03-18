import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

export default function ProductCard({
  classname,
  productName,
  productPrice,
  id,
  image,
}) {
  return (
    <Link key={id} to={`/product/${id}`}>
      <div
        className={`product cursor-pointer p-1 flex flex-col gap-4 ${classname}`}
      >
        <div className="product-image-container">
          <img className="product-image" src={image} alt="product" />
        </div>
        <div className="product-info">
          <div className="product-name-container">
            <p className="product-name p-1">{productName}</p>
          </div>
          <p className="product-price p-1">₹{productPrice}</p>
        </div>
      </div>
    </Link>
  );
}
