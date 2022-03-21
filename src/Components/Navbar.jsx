import React from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { links } from "../utils/constants";
import { useAppContext } from "../context/context";
import Logo from "../assets/logo.png";

function Navbar() {
  const { toggleSidebar } = useAppContext();
  return (
    <NavContainer>
      <div className="nav-center">
        <div className="header">
          <Link to="/" className="logo">
            <img src={Logo} alt="" />
          </Link>
          {/* burger icon goes here */}
          <button className="nav-btn" onClick={toggleSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {links.map((link) => {
            return (
              <li key={link.id} className="nav-link">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active-link" : "link"
                  }
                  to={link.path}
                >
                  {link.text}
                </NavLink>
              </li>
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
    display: flex;
    align-items: center;
  }

  .header {
    display: flex;
    justify-content: space-between;
    width: 100vw;
  }

  .logo {
    display: flex;
  }

  .logo img {
    width: 10rem;
    display: block;
  }

  .nav-btn {
    border: 0;
    background: transparent;
    font-size: 3rem;
    color: var(--primaryColor);
    cursor: pointer;
  }

  .nav-links {
    display: none;
    font-weight: 400;
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
      display: flex;
      /* background-color: blueviolet; */
      list-style: none;
      text-transform: capitalize !important;
    }

    .nav-link a {
      text-decoration: none;
      font-size: 20px;
      /* color: var(--primaryColor); */
      transition: all 0.2s;
    }

    .nav-link:not(:first-child) {
      margin-left: 30px;
    }

    .nav-link a:hover {
      color: var(--white);
    }

    .active-link {
      color: var(--white);
    }

    .link {
      color: var(--primaryColor);
    }
  }
`;

export default Navbar;
