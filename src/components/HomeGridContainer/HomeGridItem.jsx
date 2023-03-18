import React from "react";
import { Link } from "react-router-dom";
import "./HomeGridItem.css";

export default function HomeGridItem({ itemNumber, to, imageSource, title }) {
  return (
    <div
      style={{
        backgroundImage: `url(${imageSource})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        objectFit: "cover",
        width: "100%",
        height: "100%",
      }}
      className={`home-item-container home-grid-item-${itemNumber}`}
    >
      <Link className="home-grid-title-link" to={to}>
        <div className="home-grid-title-container">
          <h2 className="home-grid-title">{title}</h2>
        </div>
      </Link>
    </div>
  );
}
