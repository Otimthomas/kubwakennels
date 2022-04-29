import React from "react";
import Foundation from "../Components/Foundation";
import Hero from "../Components/Hero";
import Welcome from "../Components/Welcome";
import Featured from "../Components/Featured";
import ImageCarousel from "../Components/ImageCarousel";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Welcome />
      <Foundation />
      <Featured />
      <ImageCarousel />
    </div>
  );
};

export default HomePage;
