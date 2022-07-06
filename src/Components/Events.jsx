import React from "react";
import styled from "styled-components";
import cleo from "../assets/cleo.png";
import etoo from "../assets/kubwa_1.png";
import Title from "./Title";

function Events() {
  return (
    <Wrapper>
      <section className='events'>
        <Title title='Show events and results' />
        <div className='events__wrapper'>
          <div className='event'>
            <div className='left'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti, accusamus ad tempora repellat placeat voluptatibus
                aspernatur unde dolor odit quia illo nihil, ut id labore nemo
                veniam provident debitis velit. Minus adipisci corrupti mollitia
                quaerat!
              </p>
            </div>
            <div className='right'>
              <img src={etoo} alt='img 3' />
            </div>
          </div>

          <div className='event'>
            <div className='left'>
              <img src={cleo} alt='img 4' />
            </div>
            <div className='right'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti, accusamus ad tempora repellat placeat voluptatibus
                aspernatur unde dolor odit quia illo nihil, ut id labore nemo
                veniam provident debitis velit. Minus adipisci corrupti mollitia
                quaerat!
              </p>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  @media (min-width: 992px) {
    .events {
      padding: 2rem 10rem !important;
      background-color: blue;
    }

    h3 {
      font-size: 3rem !important;
    }
  }

  @media (min-width: 768px) {
    .events {
      padding: 2rem 10rem !important;
      background-color: blue;
    }

    h3 {
      font-size: 2.5rem !important;
    }

    .event {
      display: grid;
      grid-template-columns: 1fr 1fr;

      img {
        display: flex;
        width: 100%;
        height: 100%;
      }
    }
  }

  .events {
    padding: 2rem 4rem;
    background-color: var(--primaryColorLight);

    h3 {
      color: var(--tertiaryDarkColor);
      font-size: 2rem;
    }

    hr {
      background-color: var(--tertiaryDarkColor);
      margin-bottom: 1.5rem;
    }

    &__wrapper {
      display: grid;
      grid-template-rows: 1fr 1fr;

      padding: 1rem;
      max-width: 100%;
      font-size: 1.6rem;
      color: white;
      letter-spacing: 0.15rem;

      box-shadow: 0 0.3rem 1.6rem 0.5rem var(--tertiaryDarkColor);
    }

    .event {
      img {
        width: 100%;
        display: flex;
      }

      .left p {
        background-color: var(--white);
        color: var(--tertiaryDarkColor);
      }

      .right p {
        background-color: var(--tertiaryDarkColor);
        color: var(--white);

        padding: 1.5rem;
      }

      p {
        padding: 2rem;
        background-color: var(--secondaryColorLight);
        background-color: var(--tertiaryDarkColor);
        color: var(--white);
        letter-spacing: 0.15rem;
        height: 100%;
      }
    }
  }
`;

// const Wrapper = styled.div`
//   .events {
//     padding: 2rem 0;
//     background-color: var(--primaryColorLight);

//     display: flex;
//     flex-direction: column;
//     align-items: center;

//     h3 {
//       font-size: 2rem;
//       color: var(--tertiaryDarkColor);
//     }

//     &__wrapper {
//       margin: 2rem 8rem;
//       font-size: 1.6rem;
//       max-width: 80vw;

//       box-shadow: 0 3px 16px 5px var(--tertiaryDarkColor);
//     }

//     .event {
//       display: grid;
//       grid-template-columns: 1fr 1fr;

//       .right p {
//         background-color: var(--white);
//         color: var(--tertiaryDarkColor);

//         padding-bottom: 1.5rem;
//       }

//       img {
//         width: 100%;
//         display: flex;
//         height: 100%;
//       }

//       p {
//         padding: 2rem;
//         background-color: var(--secondaryColorLight);
//         background-color: var(--tertiaryDarkColor);
//         color: var(--white);
//         letter-spacing: 0.15rem;
//         height: 100%;
//       }
//     }
//   }
// `;

export default Events;
