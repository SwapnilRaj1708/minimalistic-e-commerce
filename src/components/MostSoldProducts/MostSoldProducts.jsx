import React from "react";
import "./MostSoldProducts.css";
import useProducts from "../../hooks/use-products";
import ProductCard from "../ProductCard/ProductCard";

export default function MostSoldProducts() {
  const { products } = useProducts();

  const mostPopular = products.filter((product) => product.isMostPopular);

  console.log(mostPopular);

  const mostPopularProducts = mostPopular.map((product) => (
    <ProductCard
      classname="most-sold-product"
      key={product.id}
      id={product.id}
      name={product.name}
      price={product.price}
      image={product.image}
    />
  ));

  return (
    <div className="section-container">
      <h1 className="section-heading most-sold-heading ">Most Sold Products</h1>
      <div className="most-sold-products">{mostPopularProducts}</div>
    </div>
  );
}
