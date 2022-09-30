import React from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { links } from "../utils/constants";
import { useAppContext } from "../context/context";
import Logo from "../assets/logo.png";

function Navbar() {
  const { toggleSidebar } = useAppContext();
  const [navbar, setNavbar] = React.useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  React.useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <NavContainer>
      <div className={navbar ? "blue nav-center" : "nav-center"}>
        <div className='header'>
          <Link to='/' className='logo'>
            <img src={Logo} alt='' />
          </Link>
          {/* burger icon goes here */}
          <button className='nav-btn' onClick={toggleSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          {links.map((link) => {
            return (
              <li key={link.id} className='nav-link'>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active-link" : "link"
                  }
                  to={link.path}>
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
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 101;
  width: 100%;

  .blue {
    background-color: var(--tertiaryDarkColor);
    opacity: 0.95;
    padding: 0 5vw !important;
    & .logo img {
      width: 8rem;
    }
  }

  .nav-center {
    width: 100%;
    padding: 0 4rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    transition: all 0.3s;
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

  @media (max-width: 576px) {
    .logo img {
      width: 8rem !important;
    }

    .nav-center {
      padding: 0 2rem;
    }
  }

  @media (min-width: 992px) {
    .nav-center {
      display: flex;
      justify-content: space-between;
      padding: 0 8rem;
    }

    .nav-btn {
      display: none;
    }

    .nav-links {
      display: flex;
      list-style: none;
      text-transform: capitalize !important;
    }

    .nav-link a {
      display: flex;
      min-width: max-content;
      text-decoration: none;
      font-size: 2rem;
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
