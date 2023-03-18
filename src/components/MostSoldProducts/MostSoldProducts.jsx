import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./MostSoldProducts.css";
import useProducts from "../../hooks/use-products";

export default function MostSoldProducts() {
  const { products } = useProducts();

  const mostPopular = products.filter((product) => product.isMostPopular);

  const mostPopularProducts = mostPopular.map((product) => (
    <ProductCard
      classname="most-sold-product"
      key={product.id}
      id={product.id}
      productName={product.name}
      productPrice={product.price}
      image={product.image}
    />
  ));

  return (
    <div className="section-container">
      <h1 className="section-heading most-sold-heading ">Most Sold Products</h1>
      <div className="most-sold-products mt-">{mostPopularProducts}</div>
    </div>
  );
}
