import React from "react";
import styled from "styled-components";
import cleo from "../assets/cleo.png";
import etoo from "../assets/kubwa_1.png";

function WelcomeAbout() {
  return (
    <Wrapper>
      <section className='welcome'>
        <div className='left'>
          <img className='img1' src={cleo} alt='img 1' />
          <img className='img2' src={etoo} alt='img 2' />
        </div>
        <div className='right'>
          <h2>
            welcome to <span>Kubwa Kennels</span>
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis,
            alias? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolor dicta dolorem porro sequi! Quos, saepe.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
            perferendis dolorem optio voluptatum voluptatibus beatae ipsam vitae
            voluptate numquam dolores pariatur. Fugiat eveniet reprehenderit
            excepturi, hic explicabo adipisci nulla laudantium neque quod quidem
            tenetur facilis molestias temporibus quae ullam minus?
          </p>
        </div>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: var(--tertiaryDarkColor);
  /* padding: 0 2rem; */

  @media screen and (min-width: 768px) {
    padding: 0 6rem;
    .welcome {
      .left {
        img {
          width: 50vw !important;
        }

        .img1 {
          border: 2px solid var(--white);
        }
      }
    }
  }

  @media screen and (min-width: 992px) {
    padding: 0 10rem;
    .welcome {
      display: grid !important;
      grid-template-columns: 1fr 1fr;
      gap: 2.5rem;

      .left {
        /* position: relative; */
        img {
          width: 100% !important;
          height: 100%;

          /* display: inline-block !important; */
          /* width: 70vh; */
          border-radius: 20px;
        }

        .img1 {
          border: 2px solid var(--white);
        }

        /* .img2 {
          display: flex !important;
          position: absolute;
          transform: translate(50%, 45%);
          top: 0;
          left: 0;
          z-index: 1;
          cursor: pointer;

          border: 2px solid var(--primaryColor);
        } */
      }
    }
  }

  .welcome {
    padding: 2rem 4rem;
    display: flex;
    flex-direction: column-reverse;

    .left {
      img {
        width: 100%;
      }

      .img1 {
        border: 2px solid var(--primaryColor);
      }

      .img2 {
        display: none;
      }
    }

    .right {
      h2 {
        font-size: 2rem;
        text-transform: capitalize;
        font-weight: normal;
        color: var(--white);
        padding-bottom: 1.5rem;

        span {
          color: var(--primaryColor);
          font-weight: 700;
          font-size: 3rem;
        }
      }

      p {
        padding-bottom: 2rem;
        font-size: 1.6rem;
        color: var(--white);
        letter-spacing: 0.2rem;
      }
    }
  }
`;

// const Wrapper = styled.div`
//   /* padding: 0 4rem; */
//   @media screen and (min-width: 567px) {
//     .welcome {
//       background-color: var(--tertiaryDarkColor);
//       padding: 4rem 13rem;
//       min-height: 62vh;
//       display: grid;
//       grid-template-columns: 2fr 1fr;
//     }
//   }
//   .welcome {
//     background-color: var(--tertiaryDarkColor);
//     padding: 4rem 13rem;
//     min-height: 62vh;
//     display: grid;
//     grid-template-columns: 2fr 1fr;

//     @media screen and (max-width: 992px) {
//       display: block;

//       .left {
//         img {
//           width: 100%;
//         }
//       }
//     }

//     .left {
//       position: relative;
//       img {
//         display: inline-block;
//         width: 70vh;
//         border-radius: 20px;
//         cursor: pointer;
//       }

//       .img1 {
//         z-index: 999;
//         border: 2px solid var(--white);
//       }

//       .img1:hover {
//         z-index: 999;
//         /* cursor: pointer; */
//       }

//       .img2 {
//         position: absolute;
//         transform: translate(50%, 45%);
//         top: 0;
//         left: 0;
//         z-index: 1;
//         cursor: pointer;

//         border: 2px solid var(--primaryColor);
//       }
//     }

//     .right {
//       h2 {
//         font-size: 2rem;
//         text-transform: capitalize;
//         font-weight: normal;
//         color: var(--white);
//         padding-bottom: 1.5rem;

//         span {
//           color: var(--primaryColor);
//           font-weight: 700;
//           font-size: 3rem;
//         }
//       }

//       p {
//         padding-bottom: 2rem;
//         font-size: 1.6rem;
//         color: var(--white);
//         letter-spacing: 0.2rem;
//       }
//     }
//   }
// `;

export default WelcomeAbout;
