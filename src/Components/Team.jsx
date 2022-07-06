import React from "react";
import styled from "styled-components";
import TeamCard from "./TeamCard";
import face1 from "../assets/face-1.jpg";
import face2 from "../assets/face-2.jpg";
import face3 from "../assets/face-3.jpg";
import Title from "./Title";

function Team() {
  return (
    <>
      <Wrapper>
        <Title title='Meet the Kubwa Team' />
        <div className='teams'>
          <TeamCard image={face1} />
          <TeamCard image={face2} />
          <TeamCard image={face3} />
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  background-color: var(--white);

  padding: 6rem 0;

  h3 {
    font-size: 2.5rem;
  }

  hr {
    margin-bottom: 4rem;
  }

  .teams {
    display: flex;
    align-items: center;
    /* justify-items: center; */
    justify-content: center;
    gap: 2.5rem;
  }

  @media screen and (max-width: 576px) {
    h3 {
      font-size: 3rem !important;
    }

    .teams {
      flex-direction: column;
      gap: 2rem !important;
    }
  }
`;

export default Team;
