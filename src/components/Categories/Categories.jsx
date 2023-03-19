import React from "react";
import Chips from "../Chips/Chips";
import "./Categories.css";
import { Link, Outlet, useParams } from "react-router-dom";
import useCategory from "../../hooks/use-category";

export default function Categories() {
  const { id } = useParams();

  const { categories } = useCategory();

  const renderedChips = categories.map((category) => {
    return <Chips key={category.id} id={category.id} title={category.title} />;
  });

  const title = categories.find((category) => category.id === id)?.title;

  return (
    <>
      <div className="categories-title flex justify-center items-center uppercase">
        {title}
      </div>
      <div className="category-chips-container pb-2 flex flex-row flex-nowrap gap-3 items-center">
        {renderedChips}
      </div>
      <Outlet />
    </>
  );
}
