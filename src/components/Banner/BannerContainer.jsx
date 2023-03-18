import React from "react";
import { useContext } from "react";
import BannerContext from "../../contexts/BannerContext";
import Banner from "./Banner";
import "./BannerContainer.css";

export default function BannerContainer({ number }) {
  const { banner } = useContext(BannerContext);

  return (
    <>
      <div className="section-container">
        <Banner
          image={banner[number].image}
          title={banner[number].title}
          description={banner[number].description}
          button={banner[number].button}
        />
      </div>
    </>
  );
}
