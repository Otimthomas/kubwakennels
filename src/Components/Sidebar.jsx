import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { links } from "../utils/constants";
import { useAppContext } from "../context/context";
import Logo from "../assets/logo.png";

function Sidebar() {
  const { sidebarOpen, closeSidebar } = useAppContext();
  return (
    <SidebarWrapper>
      <aside className={`${sidebarOpen ? "show-sidebar sidebar" : "sidebar"}`}>
        <div className="sidebar-header">
          <Link to="/" className="logo">
            <img src={Logo} alt="" />
          </Link>
          <button className="sidebar-btn" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className="nav-links">
          {links.map((link) => {
            return (
              <li key={link.id} className="nav-link">
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive ? "active-link" : "link"
                  }
                  onClick={closeSidebar}
                >
                  {link.text}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </aside>
    </SidebarWrapper>
  );
}

const SidebarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 1000;

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translate(-100%);
    transition: all 0.3s;
    z-index: -1;
    border-right: 1px solid black;
    background-color: #837446;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }

  .sidebar-header {
    display: flex;
    justify-content: space-between;

    width: 90vw;
    margin: 0 auto;
    display: flex;
    align-items: center;
  }

  .logo img {
    width: 10rem;
  }

  .sidebar-btn {
    display: block;
    border: 0;
    font-size: 3rem;
    background: transparent;
    color: var(--primaryColor);
    cursor: pointer;
  }

  .nav-links {
    font-size: 2.5rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    list-style: none;
  }

  .nav-link {
    margin-bottom: 2.5rem;
    text-transform: capitalize;
  }

  .nav-link a {
    text-decoration: none;
    font-weight: 400;
    color: var(--primaryColor);
  }

  .nav-link a:hover {
    color: var(--white);
  }

  .active-link {
    color: var(--white) !important;
  }

  .link {
    color: var(--primaryColor) !important;
  }
`;

export default Sidebar;
