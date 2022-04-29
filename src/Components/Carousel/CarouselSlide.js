import React from "react";
import Carousel from "react-elastic-carousel";
import styled from "styled-components";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 576, itemsToShow: 2, itemsToScroll: 2 },
  { width: 992, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const CarouselSlide = ({ children }) => {
  return (
    <Wrapper>
      {/* <hr className="seperator" /> */}
      <div className="carousel-wrapper">
        <Carousel
          breakPoints={breakPoints}
          enableAutoPlay
          autoPlaySpeed={2000}
          enableSwipe
          enableMouseSwipe
        >
          {children}
        </Carousel>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .carousel__item {
    height: 25rem;
    color: #fff;
    margin: 15px;
    font-size: 4rem;
  }

  .carousel__item img {
    box-shadow: 1px 10px 16px black;
    border: 3px solid var(--tertiaryColor);
    /* border-radius: 10px; */
    width: 30rem;
    display: flex;
  }

  /* .seperator {
    width: 100%;
  } */

  .controls-wrapper {
    width: 100%;
  }

  .rec-carousel-item:focus {
    outline: none;
    box-shadow: inset 0 0 1px 0px var(--primaryColor);
  }

  .rec-arrow {
    background: transparent !important;
    color: var(--primaryColor);
    font-size: 3.5rem;
  }

  .rec-dot_active {
    background-color: var(--primaryColor) !important;
  }

  .rec-dot:hover,
  .rec-dot_active,
  .rec-dot:focus {
    box-shadow: 0 0 1px 3px var(--tertiaryColor) !important;
  }

  @media (max-width: 576px) {
    .rec-arrow {
      display: none;
    }
  }
`;

export default CarouselSlide;
