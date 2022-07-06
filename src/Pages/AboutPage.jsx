import React from "react";
import styled from "styled-components";
import Hero from "../Components/Hero";
import Team from "../Components/Team";
// import Testimonials from "../Components/Testimonials";
import Events from "../Components/Events";
import WelcomeAbout from "../Components/WelcomeAbout";
import ImageCarousel from "../Components/ImageCarousel";

export default function AboutPage() {
  return (
    <>
      <Hero title='about us' />
      <Wrapper>
        <WelcomeAbout />
        <Events />
        <Team />
        {/* <Testimonials /> */}
      </Wrapper>
      <ImageCarousel />
    </>
  );
}

const Wrapper = styled.div`
  /* padding: 0 8rem; */
`;
