import React from "react";
import styled from "styled-components";

function FeaturedCard({ imgUrl, name, sire, dam }) {
  return (
    <Wrapper>
      <div className="imgContainer">
        <img src={imgUrl} alt={name} />
      </div>
      <div className="body">
        <h3>{name}</h3>
        <span className="sire">{sire}</span>
        <p className="sep"> x </p>
        <span className="dam">{dam}</span>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 3px solid var(--primaryColor);
  background-color: var(--tertiaryColor);
  color: var(--white);
  margin-bottom: 2rem;
  .imgContainer img {
    width: 100%;
    height: 100%;
    display: flex;
  }

  .body {
    font-size: 1.4rem;
    text-align: center;
    margin-bottom: 2rem;
    border-top: 1px solid var(--primaryColor);
    h3 {
      text-transform: capitalize;
      font-size: 2.5rem;
      color: var(--white);
    }

    .sire,
    dam {
      text-transform: capitalize;
    }

    .sep {
      color: var(--primaryColor);
      font-weight: bold;
      text-transform: uppercase;
      font-size: 2rem;
    }
  }
`;

export default FeaturedCard;
