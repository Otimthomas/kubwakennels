import React from "react";
import styled from "styled-components";
import { GrInstagram, GrFacebookOption } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";

function TeamCard({ image, name }) {
  return (
    <Wrapper>
      <div className='imageContainer'>
        <img src={image} alt={name} />
      </div>
      <div className='icons'>
        {/* Create links for the social media here!!!!! */}
        <GrFacebookOption className='facebook' />
        <GrInstagram className='instagram' />
        <HiOutlineMail className='mail' />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 25rem;
  position: relative;
  transition: all 0.4s;

  @media screen and (max-width: 768px) {
    width: 20rem;

    .imageContainer {
      img {
        max-height: 25rem !important;
      }
    }
  }

  @media screen and (max-width: 576px) {
    /* width: 15rem; */

    .imageContainer {
      img {
        max-height: 25rem !important;
      }
    }
  }

  &:hover .icons {
    font-size: 2.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;

    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
  }

  .imageContainer {
    img {
      width: 100%;
      display: flex;
      max-height: 30rem;
    }
  }

  .icons {
    display: none;
    transition: all 0.4s;
    color: var(--white);
    cursor: pointer;

    .facebook {
      margin-right: 2rem;
    }

    .instagram {
      margin-right: 2rem;
    }

    .mail {
      font-size: 2.8rem;
    }
  }
`;

export default TeamCard;
