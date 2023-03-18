import React from "react";
import { useContext } from "react";
import BannerContext from "../../contexts/BannerContext";
import Banner from "./Banner";
import "./BannerContainer.css";

export default function BannerContainer() {
  const { banner } = useContext(BannerContext);

  return (
    <>
      <div className="section-container">
        <Banner
          image={banner[0].image}
          title={banner[0].title}
          description={banner[0].description}
          button={banner[0].button}
        />
      </div>
    </>
  );
}
