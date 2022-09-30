import styled from "styled-components";
import Logo from "../assets/cleo_1.png";

const Welcome = () => {
  return (
    <Wrapper>
      <div className='welcome-center'>
        <div className='welcome__content'>
          <h3 className='Welcome__content-heading'>
            Welcome to <span>Kubwa Kennels.</span>
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            dolorem debitis ullam corrupti? Et dolorem reiciendis eos dolor
            corporis.
          </p>
          <p>
            quibusdam excepturi doloribus ratione nulla fugit? Enim quisquam
            veniam culpa ex dolores aspernatur exercitationem, eligendi nisi
            neque beatae sequi ipsam. Facere. quibusdam excepturi doloribus
            ratione nulla fugit? Enim quisquam veniam culpa ex dolores
            aspernatur exercitationem, eligendi nisi neque beatae sequi ipsam.
            Facere.
          </p>

          <button className='btn-welcome'>Get to know us more</button>
        </div>
        <div className='welcome-image'>
          <img src={Logo} alt='cleo' />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  @media (min-width: 576px) {
    background-color: var(--secondaryColorLight);
    .welcome-center {
      display: grid !important;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      flex-direction: row !important;
      align-items: center;

      padding: 4rem;
      background-color: var(--tertiaryDarkColor);

      .welcome__content {
        align-self: start;
      }
    }
  }

  font-size: 1.6rem;
  padding: 2rem 4rem;
  background-color: var(--tertiaryDarkColor);

  .welcome-center {
    display: flex;
    flex-direction: column;

    .welcome__content {
      display: flex;
      flex-direction: column;

      h3 {
        font-size: 1.6rem;
        line-height: 1.2;
        margin-bottom: 2rem;
        color: var(--white);
        font-weight: normal;

        span {
          color: var(--primaryColor);
          font-weight: bold;
          font-size: 2.5rem;
        }
      }

      p {
        line-height: 1.8;
        letter-spacing: 0.12rem;
        color: var(--secondaryColorLight);
      }

      .welcome-image {
        img {
          display: flex;
          width: 100%;
          border: 0.2rem solid var(--white);
        }
      }

      .btn-welcome {
        margin-top: 2rem;
        margin-bottom: 2rem;
        padding: 1.5rem 2rem;
        background-color: var(--primaryColor);
        outline: none;
        border: none;
        cursor: pointer;
        letter-spacing: 0.2rem;
        color: var(--white);
        font-size: 1.6rem;
        text-transform: capitalize;
        transition: all 0.3s;

        &:hover {
          color: var(--primaryColor);
          background-color: var(--white);
        }
      }
    }

    .welcome-image {
      img {
        width: 100%;
        border: 0.2rem solid var(--white);
      }
    }
  }
`;

// const Wrapper = styled.div`
//   font-size: 2rem;
//   padding: 2rem 4rem;
//   margin: 4rem 0;

//   @media (min-width: 768px) {
//     padding: 2rem 6rem !important;

//     .btn-welcome {
//       align-self: start;
//     }
//   }

//   @media (min-width: 992px) {
//     padding: 2rem 8rem !important;

//     .welcome-center {
//       display: grid !important;
//       grid-template-columns: 1fr 1fr;
//       grid-template-rows: 1fr;
//     }

//     .welcome__content {
//       padding: 4rem;
//     }
//   }

//   .welcome-center {
//     display: flex;
//     flex-direction: column;
//     background-color: var(--tertiaryColor);
//   }

//   .welcome__content {
//     color: var(--white);
//     padding: 2rem 1.5rem;

//     display: flex;
//     flex-direction: column;

//     h3 {
//       font-size: 4rem;
//       line-height: 1.2;
//       margin-bottom: 2rem;

//       span {
//         color: var(--primaryColor);
//       }
//     }

//     p {
//       font-size: 1.6rem;
//       line-height: 1.7;
//     }

//     & > p {
//       margin-bottom: 2rem;
//     }

//     .btn-welcome {
//       padding: 2rem 3.5rem;
//       background-color: var(--primaryColor);
//       outline: none;
//       border: none;
//       cursor: pointer;
//       letter-spacing: 0.2rem;
//       color: var(--white);
//       font-size: 1.5rem;
//       text-transform: uppercase;
//       transition: all 0.3s;
//       font-weight: bold;

//       &:hover {
//         color: var(--primaryColor);
//         background-color: var(--white);
//       }
//     }
//   }
//   .welcome-image img {
//     object-fit: cover;
//     height: 100%;
//     width: 100%;

//     display: flex;
//     border: 6px solid var(--white);
//   }
// `;

export default Welcome;
