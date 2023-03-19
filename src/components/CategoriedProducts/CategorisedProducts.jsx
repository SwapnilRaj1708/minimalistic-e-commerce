import React from "react";
import "./CategorisedProducts.css";
import { useParams } from "react-router-dom";
import useProducts from "../../hooks/use-products";
import ProductCard from "../ProductCard/ProductCard";
import useCategory from "../../hooks/use-category";

export default function CategorisedProducts() {
  const { id } = useParams();
  const { products } = useProducts();
  const { categories } = useCategory();

  let filteredProducts = products;

  id !== "all"
    ? (filteredProducts = products.filter(
        (product) =>
          product.category ===
          categories.find((category) => category.id === id)?.title
      ))
    : (filteredProducts = products);

  const renderedProducts = filteredProducts.map((product) => {
    return (
      <ProductCard
        classname="most-sold-product"
        key={product.id}
        id={product.id}
        name={product.name}
        image={product.image}
        price={product.price}
      />
    );
  });

  return (
    <div className="categorised-products most-sold-products">
      {renderedProducts}
    </div>
  );
}
