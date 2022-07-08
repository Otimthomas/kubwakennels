import React from "react";
import ContactForm from "../Components/Forms/ContactForm";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FiMapPin } from "react-icons/fi";
import styled from "styled-components";
import Hero from "../Components/Hero";

const ContactPage = () => {
  return (
    <>
      <Hero title='contact us' />
      <Wrapper>
        <div className='contact__left'>
          {/* Heading and sub-heading */}
          <h3>Reach out to us.</h3>
          <p>
            Fill up the form and our team will get back to you within 24 hours
          </p>

          {/* icons and address */}
          <div className='contact__info'>
            <div>
              <BsTelephone />
              <p>+25670 368 9895</p>
            </div>
            <div>
              <HiOutlineMail />
              <p>kubwakennels@gmail.com</p>
            </div>
            <div>
              <FiMapPin />
              <p>Jogo, Mukono</p>
            </div>
          </div>
        </div>
        <div className='contact__right'>
          <ContactForm />
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  background-image: url("/images/bng.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  padding: 2rem;
  font-size: 1.6rem;

  @media (min-width: 992px) {
    padding: 2rem 8rem;
    display: grid;
    grid-template-columns: 1fr 1fr;

    .contact__right {
      color: var(--white) !important;
      background-color: var(--tertiaryDarkColor) !important;
    }
  }

  @media (min-width: 992px) {
    padding: 2rem 6rem;
  }

  @media (min-width: 768px) {
    padding: 2rem 6rem;
  }

  .contact__left {
    h3 {
      font-size: 3rem;
      text-transform: capitalize;
    }
    p {
      font-size: 1.5rem;
      color: var(--tertiaryColor);
      letter-spacing: 0.12rem;
      font-style: italic;
    }
  }

  .contact__info {
    margin-top: 2rem;
    margin-bottom: 2rem;

    div {
      margin-top: 2.5rem;
      display: flex;
      gap: 2rem;

      svg {
        font-size: 5rem;
        color: var(--primaryColor);
        background-color: var(--tertiaryDarkColor);
        padding: 1rem;
        border-radius: 10px;
      }

      p {
        font-size: 2rem;
        color: var(--tertiaryDarkColor);
      }
    }
  }

  .contact__right {
    background-color: var(--primaryColorLight);
    padding: 2rem;
    margin-top: 2rem;
    border: 2px solid var(--primaryColor);
    font-size: 1.5rem;
    color: var(--tertiaryColor);

    .form-control {
      margin-bottom: 2rem;
    }

    label {
      font-weight: 400;
      display: inline-block;
      margin-bottom: 0.5rem;
      font-size: 2rem;
    }

    input,
    textarea {
      display: block;
      border: none;
      padding: 1.5rem;
      font-size: 1.8rem;
      /* color: var(--secondaryColor); */
    }
    input[type="text"],
    input[type="email"] {
      width: 100%;
      height: 4rem;
      color: var(--secondaryColor);
    }

    textarea {
      width: 100%;
      min-height: 15rem;
      padding: 1.5rem;
      font-size: 1.8rem;
      color: var(--secondaryColor);
    }

    input:focus,
    textarea:focus {
      outline: none;
      border: 1px solid var(--primaryColor);
    }
    .error {
      color: red;
      font-weight: normal;
      padding-top: 0.5rem;
    }
  }

  button {
    margin-top: 2rem;
    padding: 1.5rem 6rem;
    background-color: var(--primaryColor);
    outline: none;
    border: 2px solid var(--white);
    cursor: pointer;
    letter-spacing: 0.2rem;
    color: var(--white);
    font-size: 1.5rem;
    text-transform: uppercase;
    transition: all 0.3s;

    &:hover {
      color: var(--primaryColor);

      background-color: var(--white);
    }
  }
`;

// const Wrapper = styled.div`
//   background-image: url("/images/bng.png");
//   background-repeat: no-repeat;
//   background-position: center;
//   background-size: cover;

//   padding: 10rem 8rem;

//   display: grid;
//   grid-template-columns: 1fr 1fr;

//   @media (max-width: 992px) {
//     display: block;
//   }

//   .contact__left {
//     h3 {
//       font-size: 3.5rem;
//       color: var(--tertiaryColor);
//     }

//     p {
//       font-size: 1.5rem;
//       color: var(--tertiaryColor);
//       letter-spacing: 0.3px;
//     }

//     .contact__info {
//       margin-top: 3rem;
//       display: flex;
//       flex-direction: column;
//     }

//     .contact__info div {
//       /* background-color: orangered; */
//       display: flex;
//       margin-bottom: 2rem;
//     }

//     .contact__info svg {
//       font-size: 6rem;
//       color: var(--white);
//       margin-right: 2rem;
//       background-color: var(--primaryColor);
//       padding: 0.8rem;
//       border-radius: 2rem;
//     }

//     .contact__info div p {
//       font-size: 1.8rem;
//       align-self: center;
//       letter-spacing: 1.2px;
//       font-weight: 400;
//     }
//   }

//   .contact__right {
//     background-color: var(--primaryColorLight) !important;
//     padding: 2rem;
//     margin-top: 2rem;
//     border: 2px solid var(--primaryColor);
//     font-size: 1.5rem;
//     color: var(--tertiaryColor);

//     .form-control {
//       margin-bottom: 2rem;
//     }

//     label {
//       font-weight: 400;
//       display: inline-block;
//       margin-bottom: 0.5rem;
//       font-size: 2rem;
//     }

//     input,
//     textarea {
//       display: block;
//       border: none;
//       padding: 1.5rem;
//       font-size: 1.8rem;
//       /* color: var(--secondaryColor); */
//     }

//     input[type="text"],
//     input[type="email"] {
//       width: 100%;
//       height: 4rem;
//       color: var(--secondaryColor);
//     }

//     textarea {
//       width: 100%;
//       min-height: 15rem;
//       padding: 1.5rem;
//       font-size: 1.8rem;
//       color: var(--secondaryColor);
//     }

//     input:focus,
//     textarea:focus {
//       outline: none;
//       border: 1px solid var(--primaryColor);
//     }

//     .error {
//       color: red;
//       font-weight: normal;
//       padding-top: 0.5rem;
//     }
//   }

//   button {
//     margin-top: 2rem;
//     padding: 1.5rem 6rem;
//     background-color: var(--primaryColor);
//     outline: none;
//     border: 2px solid var(--white);
//     cursor: pointer;
//     letter-spacing: 0.2rem;
//     color: var(--white);
//     font-size: 1.5rem;
//     text-transform: uppercase;
//     transition: all 0.3s;

//     &:hover {
//       color: var(--primaryColor);

//       background-color: var(--white);
//     }
//   }
// `;

export default ContactPage;
