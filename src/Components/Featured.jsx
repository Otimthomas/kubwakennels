import React from "react";
import styled from "styled-components";
import FeaturedCard from "./FeaturedCard";
import { FeaturedDogs } from "../utils/constants";

function Featured() {
  return (
    <Wrapper>
      <h3>Some of our females</h3>
      <div className="featured__cards">
        {FeaturedDogs.map((item) => {
          return <FeaturedCard key={item.id} {...item} />;
        })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background: url("/images/bng.png");
  background-size: cover;
  background-repeat: no-repeat;
  /* background-attachment: fixed; */

  padding: 2rem 4rem;

  h3 {
    font-size: 3.5rem;
    color: var(--tertiaryColor);
    text-transform: capitalize;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  @media (min-width: 768px) {
    padding: 2rem 6rem;
    .featured__cards {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      column-gap: 3rem;
      row-gap: 2rem;
    }
  }

  @media (min-width: 992px) {
    padding: 2rem 8rem;
    .featured__cards {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr;
    }
  }
`;

export default Featured;
