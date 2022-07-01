import React from "react";
import styled from "styled-components";
import Hero from "../Components/Hero";
import Dogdetails from "../Components/Dogdetails";

function Males() {
  return (
    <>
      <Hero title='Our males' />
      <Wrapper>
        <Dogdetails />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div``;

export default Males;
