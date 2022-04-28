import React from "react";
import styled from "styled-components";
import { RiFacebookLine, RiTwitterLine } from "react-icons/ri";
import { BsPinMapFill, BsPhone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import Logo from "../assets/logo.png";

import Title from "./Title";

function Footer() {
  return (
    <Wrapper>
      <div className="footer__container">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-contact">
          <Title title="Reach out to us" />
          <div className="contacts">
            <section>
              <div className="icon">
                <BsPinMapFill />
              </div>
              <div className="address">Jogo Mukono</div>
            </section>
            <section>
              <div className="icon">
                <BsPhone />
              </div>
              <div className="address">+256-703-689-895 </div>
            </section>
            <section>
              <div className="icon">
                <AiOutlineMail />
              </div>
              <div className="address">kubwakennels@gmail.com</div>
            </section>
          </div>
        </div>
        <div className="footer-social">
          <Title title="our social networks" />
          <section>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="facebook"
            >
              <RiFacebookLine />
            </a>
            <a
              href="https://www.twitter.com/"
              target="_blank"
              rel="noreferrer"
              className="twitter"
            >
              <RiTwitterLine />
            </a>
          </section>
        </div>
        <div className="footer-about">
          <Title title="About us" />
          <section>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestias vel dolore nobis inventore cupiditate. Quod.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              nostrum ab iure doloremque praesentium illo delectus, ullam
              voluptatum fugiat perspiciatis, eum culpa velit quo id!
            </p>
          </section>
        </div>
      </div>

      <div className="footer-by">
        <p>
          By Kubwa Designs. &copy; {new Date().getFullYear()} All Rights
          Reserved
        </p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  background-color: var(--tertiaryColor);
  padding: 4rem;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content 1fr;
  color: var(--white);

  z-index: 100;

  position: relative;

  .logo {
    position: absolute;
    top: 0;
    left: 0;

    z-index: 1;
  }

  .logo img {
    width: 10rem;
    opacity: 0.5;
  }

  h3 {
    text-align: center;
  }

  @media (min-width: 576px) {
    .footer__container {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
    }

    .footer-social {
      display: grid;
      align-self: start;
      margin-top: 0 !important;

      font-size: 1.5rem;
    }

    .footer-about {
      grid-column: span 2;
    }
  }

  @media (min-width: 992px) {
    .footer__container {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr;
    }

    .footer-social {
      display: grid;
      align-self: start;
      margin-top: 0 !important;
      font-size: 1.5rem;
    }

    .footer-about {
      grid-column: span 1;
      margin-top: 0 !important;
    }
  }

  .footer__container {
    display: grid;
  }

  .footer-contact {
    font-size: 1.5rem;
    display: grid;
    justify-content: center;
  }

  .footer-contact .contacts {
    margin-top: 1.5rem;
  }

  .footer-contact .contacts section {
    display: grid;
    grid-template-columns: min-content 1fr;
    grid-template-rows: min-content min-content min-content;
    column-gap: 1.5rem;
    row-gap: 0.5rem;
    align-items: center;
  }

  .footer-contact .contacts section .icon {
    color: var(--white);
    font-size: 2rem;
    border: 2px solid var(--white);
    border-radius: 50rem;
    padding: 1rem;

    display: flex;
  }

  .footer-contact .contacts section .address {
    letter-spacing: 0.5px;
    font-weight: 400;
  }

  .footer-social {
    display: grid;
    justify-content: center;
    margin-top: 4rem;

    font-size: 1.5rem;
  }

  .footer-social section {
    margin-top: 1.5rem;
    justify-self: center;
    display: grid;
    grid-template-columns: min-content min-content;
    column-gap: 0.5rem;
  }

  .facebook,
  .twitter {
    border: 2px solid var(--white);
    font-size: 2.5rem;
    border-radius: 50rem;
    padding: 1.2rem;
    color: var(--white);
    transition: all 0.2s;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
  }

  .facebook:hover,
  .twitter:hover {
    color: var(--primaryColor);
    border: 2px solid var(--primaryColor);
  }

  .footer-about {
    font-size: 1.5rem;
    margin-top: 4rem;
  }

  .footer-about section {
    margin-top: 1.5rem;
  }

  .footer-about section p {
    font-size: 1.4rem;
    line-height: 1.9;
    letter-spacing: 0.5px;
    font-weight: 400;
  }

  .footer-about section p:first-child {
    padding-bottom: 2rem;
  }

  .footer-by {
    background-color: var(--tertiaryDarkColor);
    padding: 2rem;
    margin-top: 4rem;

    p {
      color: var(--white);
      font-size: 14px;
      text-align: center;
    }
  }
`;

export default Footer;
