import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

export default function ProductCard({ productName, productPrice, id }) {
  return (
    <Link to={`/product/${id}`}>
      <div className="product cursor-pointer border p-1 flex flex-col gap-4">
        <div className="product-image-container">
          <img
            className="product-image"
            src="https:/source.unsplash.com/random"
            alt="product"
          />
        </div>
        <div className="product-info">
          <h3 className="product-name p-1">{productName}</h3>
          <p className="product-price p-1">{productPrice}</p>
        </div>
      </div>
    </Link>
  );
}
