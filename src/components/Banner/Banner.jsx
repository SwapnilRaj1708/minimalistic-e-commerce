import React, { useState } from "react";
import "./Banner.css";
import banner1 from "../../assets/img/banner/banner1.jpg";
import banner2 from "../../assets/img/banner/banner2.jpg";

export default function Banner() {
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
        style={isBanner ? { backgroundImage: `url(${banner1})` } : {}}
        className="  flex flex-col justify-center items-start gap-2"
      >
        <div className="banner-grid-item-1 banner-content-container">
          <p className="banner-title">Creative harmonious living</p>
          <span>
            RAOUF Products are all made to standard sizes so that you can mix
            and match them freely.
          </span>
          <button className="banner-btn font-semibold">SHOP NOW</button>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${banner1})`,
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
