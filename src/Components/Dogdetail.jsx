import styled from "styled-components";

import kubwa_1 from "../assets/kubwa_1.png";

const Dogdetail = () => {
  return (
    <Wrapper>
      <div className='image__container'>
        <img src={kubwa_1} alt='dog details' />
      </div>
      <div className='dog__details'>
        <p className='dog__details-name'>
          <span>Name:</span> Etoó Von Arvez
        </p>
        <p className='dog__details-name'>
          <span>Sire:</span> Desouza Flash
        </p>
        <p className='dog__details-name'>
          <span>Dam:</span> Daisy Von Arvez
        </p>
        <p className='dog__details-name'>
          <span>Pedigree:</span> Etoó pedigree database
        </p>
      </div>
      <div className='images__container'>
        <h3>Gallery</h3>
        <div>
          <img src={kubwa_1} alt='dog details' />
          <img src={kubwa_1} alt='dog details' />
          <img src={kubwa_1} alt='dog details' />
          <img src={kubwa_1} alt='dog details' />
          <img src={kubwa_1} alt='dog details' />
          <img src={kubwa_1} alt='dog details' />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 4rem;
  display: grid;
  gap: 1.5rem;
  background-color: var(--tertiaryDarkColor);
  margin: 4rem;

  .image__container {
    box-shadow: 0.2rem 1rem 1.4rem;
    transition: all 0.2s;

    &:hover {
      transform: scale(1.02);
    }
  }

  .image__container img {
    width: 100%;
    height: 100%;
    display: flex;

    border: 2px solid var(--white);
  }

  .dog__details {
    background-color: var(--primaryColorLight);
    padding: 2rem;
    box-shadow: 0.2rem 0.3rem 0.8rem var(--white);
    transition: all 0.3s;

    &:hover {
      transform: scale(1.02);
    }

    p {
      font-size: 2rem;
      padding-bottom: 1.5rem;
      color: var(--tertiaryDarkColor);
      letter-spacing: 0.2rem;
      font-style: italic;

      span {
        font-weight: normal;
        font-style: normal;
        color: var(--white);
        text-shadow: 2px 0 20px;
      }
    }
  }

  .images__container {
    box-shadow: 0.2rem 1rem 1.4rem;
    transition: all 0.2s;

    &:hover {
      transform: scale(1.02);
    }
  }

  .images__container h3 {
    color: var(--white);
    font-size: 2rem;
    font-weight: 500;
    padding-top: 2rem;
    text-align: center;
  }

  .images__container > div {
    padding: 2rem;
    width: 100%;
    display: grid;
    background-color: var(--tertiaryLightColor);
    grid-template-columns: 1fr 1fr;
    grid-template-rows: min-content;
    align-content: start;
    gap: 1.5rem;

    img {
      width: 100%;
      border: 2px solid var(--white);
      cursor: pointer;
    }
  }

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;

    .images__container {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;

// const Wrapper = styled.div`
//   padding: 4rem;
//   display: grid;
//   grid-template-columns: 1fr 1fr 1fr;
//   gap: 1.5rem;

//   .image__container {
//     box-shadow: 0.2rem 1rem 1.4rem;
//     transition: all 0.2s;

//     &:hover {
//       transform: scale(1.1);
//     }
//   }

//   .image__container img {
//     width: 100%;
//     display: flex;

//     border: 2px solid var(--white);
//   }

//   .dog__details {
//     background-color: var(--primaryColor-light);
//     padding: 2rem;
//     box-shadow: 0.2rem 1rem 1.4rem white;
//     transition: all 0.3s;

//     &:hover {
//       transform: scale(0.8);
//     }

//     p {
//       font-size: 2rem;
//       padding-bottom: 1.5rem;
//       color: var(--tertiaryDarkColor);
//       letter-spacing: 0.2rem;
//       font-style: italic;

//       span {
//         font-weight: bold;
//         font-style: normal;
//       }
//     }
//   }

//   .images__container {
//     box-shadow: 0.2rem 1rem 1.4rem;
//     transition: all 0.2s;

//     &:hover {
//       transform: scale(1.1);
//     }
//   }

//   .images__container {
//     padding: 2rem;
//     width: 100%;
//     display: grid;
//     background-color: var(--tertiaryDarkColor);
//     grid-template-columns: 1fr 1fr;
//     grid-template-rows: min-content;
//     align-content: start;
//     gap: 1.5rem;

//     img {
//       width: 100%;
//       border: 2px solid var(--white);
//       cursor: pointer;
//     }
//   }

//   @media (min-width: 992px) {
//     display: grid;
//     grid-template-columns: 1fr 1fr 1fr;

//     .images__container {
//       grid-template-columns: 1fr 1fr 1fr;
//     }
//   }
// `;

export default Dogdetail;
