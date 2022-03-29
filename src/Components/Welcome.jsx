import styled from "styled-components";

import Logo from "../assets/cleo_1.png";

const Welcome = () => {
  return (
    <Wrapper>
      <div className="welcome-center">
        <div className="welcome__content">
          <h3 className="Welcome__content-heading">
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

          <button className="btn-welcome">Get to know us more</button>
        </div>
        <div className="welcome-image">
          <img src={Logo} alt="cleo" />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 2rem;
  padding: 2rem 4rem;

  @media (min-width: 768px) {
    padding: 2rem 6rem !important;
  }

  @media (min-width: 992px) {
    padding: 2rem 8rem !important;

    .welcome-center {
      display: grid !important;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
    }

    .welcome__content {
      padding: 4rem;
    }
  }

  .welcome-center {
    display: flex;
    flex-direction: column;
    background-color: var(--tertiaryColor);
  }

  .welcome__content {
    color: var(--white);
    padding: 2.5rem;

    h3 {
      font-size: 4rem;
      line-height: 1.2;
      margin-bottom: 2rem;

      span {
        color: var(--primaryColor);
      }
    }

    p {
      font-size: 1.6rem;
      line-height: 1.7;
    }

    & > p {
      margin-bottom: 2rem;
    }

    .btn-welcome {
      background-color: var(--primaryColor);
      border: 2px solid var(--primaryColor);
      padding: 1.5rem 2rem;
      color: var(--white);
      font-size: 1.5rem;
      font-weight: bold;
      letter-spacing: 0.2rem;
      cursor: pointer;
      transition: all 0.2s;

      &:hover {
        color: var(--primaryColor);
        background-color: var(--white);
      }
    }
  }
  .welcome-image img {
    object-fit: cover;
    height: 100%;
    width: 100%;

    display: flex;
  }
`;

export default Welcome;

/* .welcome-center {
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: var(--tertiaryColor);

    .welcome__content {
      color: var(--white);
      padding: 4rem;
      display: flex;
      flex-direction: column;
      justify-content: center;

      h3 {
        font-size: 6rem;
        line-height: 1.2;
        margin-bottom: 2rem;

        span {
          color: var(--primaryColor);
        }
      }

      p {
        font-size: 1.5rem;
        line-height: 1.7;
      }
      & > p {
        margin-bottom: 2rem;
      }

      .btn-welcome {
        align-self: start;
        background-color: var(--primaryColor);
        border: 2px solid var(--primaryColor);
        padding: 1.8rem 3rem;
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
    }

    .welcome-image img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  } */
