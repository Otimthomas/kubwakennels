import React from "react";
import Foundation from "../Components/Foundation";
import HomeHero from "../Components/HomeHero";
import Welcome from "../Components/Welcome";
import Featured from "../Components/Featured";
import ImageCarousel from "../Components/ImageCarousel";

const HomePage = () => {
  return (
    <div>
      <HomeHero />
      <Welcome />
      <Foundation />
      <Featured />
      <ImageCarousel />
    </div>
  );
};

export default HomePage;
