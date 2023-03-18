import React from "react";
import BannerContainer from "../components/Banner/BannerContainer";
import HomeGridContainer from "../components/HomeGridContainer/HomeGridContainer";
import MostSoldProducts from "../components/MostSoldProducts/MostSoldProducts";

export default function HomePage() {
  return (
    <>
      <HomeGridContainer />
      <MostSoldProducts />
      <BannerContainer />
    </>
  );
}
