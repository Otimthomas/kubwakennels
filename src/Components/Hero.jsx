import React from "react";
import styled from "styled-components";
import Logo from "../assets/kubwa_1.png";

function Hero() {
  return (
    <Wrapper>
      <div className="over-lay">
        <div className="hero-center">
          <h2 className="heading">
            <span>.</span>.Kubwa Kennels.<span>.</span>
          </h2>
          <p className="sub-heading">
            <span>.</span>Quality without boudaries<span>.</span>
          </p>
          <button className="hero-btn">Future Breedings</button>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: url(${Logo});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  min-width: 100%;
  height: 95vh;
  font-size: 4rem;

  .hero-center {
    width: max-content;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }

  .heading {
    font-size: 4.5rem;
    color: var(--white);
    line-height: 1;

    & span {
      color: var(--primaryColor);
      padding: 0 !important;
    }
  }

  .sub-heading {
    font-size: 2rem;
    color: var(--primaryColor);
    line-height: 0;

    & span {
      color: white;
      font-size: 10rem;
    }
  }

  .hero-btn {
    background-color: var(--primaryColor);
    border: 2px solid var(--primaryColor);
    padding: 1rem 2.2rem;
    margin-top: 4rem;
    color: var(--white);
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: 0.2rem;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      color: var(--primaryColor);
      background-color: var(--white);
    }
  }

  @media (min-width: 576px) {
    background-position-x: -4rem;
  }

  @media (min-width: 768px) {
    .heading {
      font-size: 5rem !important;
      letter-spacing: 0.2rem;
    }

    .sub-heading {
      font-size: 2.5rem;
    }
  }

  @media (min-width: 992px) {
    .heading {
      font-size: 5.5rem !important;
      letter-spacing: 0.3rem;
    }

    .sub-heading {
      font-size: 3rem;
      margin-top: 1rem;
    }

    .hero-btn {
      padding: 2rem 4rem;
    }
  }
`;

export default Hero;
