import React from "react";
import "./Trending.css";
import useProducts from "../../hooks/use-products";
import ProductCard from "../ProductCard/ProductCard";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export default function Trending() {
  const { products } = useProducts();

  const trendingProducts = products.filter((product) => product.isTrendingNow);

  console.log(trendingProducts);

  const renderedTrendingProducts = trendingProducts.map((product) => (
    <ProductCard
      classname="trending-product"
      key={product.id}
      id={product.id}
      name={product.name}
      price={product.price}
      image={product.image}
    />
  ));

  function handleRightSwipe() {
    document.getElementsByClassName("trending-products")[0].scrollLeft += 400;
  }
  function handleLeftSwipe() {
    document.getElementsByClassName("trending-products")[0].scrollLeft -= 400;
  }

  return (
    <div className="section-container">
      <div className="w-full flex justify-between items-">
        <h1 className="section-heading trending-heading ">Trending Now</h1>
        <div className="flex flex-row flex-nowrap gap-2">
          <button onClick={handleLeftSwipe} className="arrow-btn">
            <AiOutlineArrowLeft />
          </button>
          <button onClick={handleRightSwipe} className="arrow-btn">
            <AiOutlineArrowRight />
          </button>
        </div>
      </div>
      <div className="trending-products">{renderedTrendingProducts}</div>
    </div>
  );
}
