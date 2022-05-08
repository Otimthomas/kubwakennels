import React from "react";
import styled from "styled-components";
import mainBcg from "../assets/kubwa_1.png";

export default function Hero({ img, title, max, children }) {
  return (
    <HeroWrapper max={max} img={img}>
      <div className="banner">
        <h1 className="title">{title}</h1>
        {children}
      </div>
    </HeroWrapper>
  );
}

const HeroWrapper = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${(props) => (props.max ? "100vh" : "60vh")};
  color: var(--primaryColor);
  background: url(${(props) => props.img}) center/cover no-repeat fixed;
  .title {
    padding-top: 2rem;
    color: var(--white);
    font-size: 4rem;
    /* text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.3); */
    text-transform: uppercase;
    letter-spacing: var(--mainSpacing);
  }
`;

Hero.defaultProps = {
  img: mainBcg,
};
