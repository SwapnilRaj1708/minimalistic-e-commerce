import React from "react";
import "./HomeGridContainer.css";
import homeImage1 from "../../assets/img/header/home-img-1.jpg";
import homeImage2 from "../../assets/img/header/home-img-2.jpg";
import homeImage3 from "../../assets/img/header/home-img-3.jpg";
import homeImage4 from "../../assets/img/header/home-img-4.jpg";
import HomeGridItem from "./HomeGridItem";

export default function HomeGridContainer() {
  return (
    <div className="home-grid-container">
      <HomeGridItem
        itemNumber={1}
        to="/categories/furniture"
        imageSource={homeImage1}
        title="Furniture"
      />
      <HomeGridItem
        itemNumber={2}
        to="/categories/skincare"
        imageSource={homeImage2}
        title="Skin Care"
      />
      <HomeGridItem
        itemNumber={3}
        to="/categories/kitchen"
        imageSource={homeImage3}
        title="Kitchen"
      />
      <HomeGridItem
        itemNumber={4}
        to="/categories/electronics"
        imageSource={homeImage4}
        title="Electronics"
      />
    </div>
  );
}
