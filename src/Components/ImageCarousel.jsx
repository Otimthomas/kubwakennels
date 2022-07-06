import React from "react";
import styled from "styled-components";
import CarouselSlide from "./Carousel/CarouselSlide";
import cleo from "../assets/cleo.png";

const ImageCarousel = () => {
  return (
    <Wrapper>
      <CarouselSlide>
        <div className='carousel__item'>
          <img src={cleo} alt='cleo' className='carousel__img' />
        </div>
        <div className='carousel__item'>
          <img src={cleo} alt='cleo' className='carousel__img' />
        </div>
        <div className='carousel__item'>
          <img src={cleo} alt='cleo' className='carousel__img' />
        </div>
        <div className='carousel__item'>
          <img src={cleo} alt='cleo' className='carousel__img' />
        </div>
      </CarouselSlide>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 2rem 8rem;

  h3 {
    font-size: 3rem;
    color: var(--white);
  }

  .carousel__img {
    width: 100%;
    object-fit: cover;
  }

  @media (max-width: 576px) {
    padding: 3rem 1rem;
  }
`;

export default ImageCarousel;
