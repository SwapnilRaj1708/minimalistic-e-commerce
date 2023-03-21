import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./Banner.css";

export default function Banner({ image, title, description, button, to }) {
  const [isBanner, setIsBanner] = useState(false);

  let width = window.innerWidth;
  {
    if (width < 700 && isBanner === false) {
      setIsBanner(true);
    }
  }

  return (
    <div className="banner-container">
      <div
        style={isBanner ? { backgroundImage: `url(${image})` } : {}}
        className="  flex flex-col justify-center items-start gap-2"
      >
        <div className="banner-grid-item-1 banner-content-container">
          <p className="banner-title">{title}</p>
          <span>{description}</span>
          <Link to={to}>
            <button className="banner-btn font-semibold">{button}</button>
          </Link>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          objectFit: "cover",
        }}
        className="banner banner-grid-item-2"
      ></div>
    </div>
  );
}
