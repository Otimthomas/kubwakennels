import React from "react";
import styled from "styled-components";

function FooterTitle({ title }) {
  return (
    <Wrapper>
      <h3>{title}</h3>
      <hr />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  position: relative;

  h3 {
    color: var(--primaryColor);
    text-transform: capitalize;
  }

  hr {
    justify-self: center;
    margin-top: 2px;
    width: 50%;
    background-color: var(--primaryColor);
    height: 2px;
    border: none;

    position: relative;
    bottom: 0;
    right: 50%;
    transform: translateX(100%);
  }
`;

export default FooterTitle;
