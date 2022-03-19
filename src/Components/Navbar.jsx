import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { links } from "../utils/constants";
import { useAppContext } from "../context/context";

function Navbar() {
  const { toggleSidebar } = useAppContext();
  return (
    <NavContainer>
      <div className="nav-center">
        <div className="header">
          <Link to="/" className="logo">
            {/* image component for logo goes here */}
            <h2>Kubwa-kennels</h2>
          </Link>
          {/* burger icon goes here */}
          <button className="nav-btn" onClick={toggleSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {links.map((link) => {
            return (
              <Link key={link.id} to={link.path} className="nav-link">
                {link.text}
              </Link>
            );
          })}
        </ul>
      </div>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  /* background-color: blue; */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    /* background-color: orangered; */
  }

  .header {
    display: flex;
    justify-content: space-between;
  }

  .logo {
    /* background-color: green; */
    color: blue;
    align-self: center;
    text-decoration: none;
    font-style: italic;
  }

  .nav-btn {
    border: 0;
    background: transparent;
    font-size: 25px;
    /* color: var(--primaryColor); */
    color: blue;
    cursor: pointer;
  }

  .nav-links {
    display: none;
  }

  @media (min-width: 992px) {
    .nav-center {
      display: flex;
      justify-content: space-between;
    }

    .nav-btn {
      display: none;
    }

    .nav-links {
      display: block;
      /* background-color: blueviolet; */
    }

    .nav-link {
      text-decoration: none;
      font-size: 20px;
    }

    .nav-link:not(:first-child) {
      margin-left: 30px;
    }
  }
`;

export default Navbar;
