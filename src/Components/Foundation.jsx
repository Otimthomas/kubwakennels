import styled from "styled-components";
import Logo from "../assets/kubwa_1.png";

const Foundation = () => {
  return (
    <Wrapper>
      <div className="foundation__image">
        <img src={Logo} alt="Cleo" />
      </div>
      <div className="foundation__content">
        <h3>
          Our foundation dog <span>- Amina Cleo</span>
        </h3>
        <div className="foundation__content-p">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore,
            nesciunt amet? Dolore soluta eius aliquam, harum quae tempora
            facilis odit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
            repudiandae eius accusamus assumenda, rem quibusdam at nostrum
            similique fugiat adipisci suscipit error tempore veritatis nisi a,
            magnam necessitatibus quasi? Qui?
          </p>
        </div>
        <button className="btn-foundation">Read more</button>
      </div>
    </Wrapper>
  );
};

export default Foundation;

const Wrapper = styled.section`
  padding: 2rem 4rem;
  background-color: var(--tertiaryColor);

  @media (min-width: 768px) {
    padding: 2rem 6rem !important;
  }

  @media (min-width: 992px) {
    padding: 2rem 8rem !important;

    display: grid;
    grid-template-columns: 2fr 1fr;

    .foundation__content {
      padding: 2rem;
      /* border: 6px solid var(--white); */
    }
  }

  .foundation__image img {
    object-fit: cover;
    width: 100%;
    height: 100%;

    display: flex;
    border: 6px solid var(--primaryColor);
  }

  .foundation__content {
    background-color: var(--secondaryColorLight);
    padding: 2rem 1.5rem;
    color: var(--white);

    h3 {
      font-size: 2.5rem;
      color: var(--white);
      line-height: 1.2;
      padding-bottom: 1.5rem;
      span {
        color: var(--primaryColor);
      }
    }

    .foundation__content-p {
      font-size: 1.6rem;

      p {
        padding-bottom: 2rem;
        line-height: 1.7;
      }
    }

    .btn-foundation {
      padding: 2rem 3.5rem;
      background-color: var(--primaryColor);
      outline: none;
      border: none;
      cursor: pointer;
      color: var(--white);
      letter-spacing: 0.2rem;
      font-size: 1.5rem;
      text-transform: uppercase;
      transition: all 0.3s;

      &:hover {
        color: var(--primaryColor);
        background-color: var(--white);
      }
    }
    display: flex;
    flex-direction: column;
  }
`;
