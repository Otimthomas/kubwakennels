import React from "react";
import styled from "styled-components";
import Hero from "../Components/Hero";
import Dogdetails from "../Components/Dogdetails";

function Females() {
  return (
    <>
      <Hero title='Our females' />
      <Wrapper>
        <Dogdetails />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div``;

export default Females;
