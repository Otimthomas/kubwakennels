import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { link, links } from "../utils/constants";
import { useAppContext } from "../context/context";

function Sidebar() {
  // const sidebarOpen = true;
  const { toggleSidebar, sidebarOpen, closeSidebar } = useAppContext();
  console.log(sidebarOpen);
  return (
    <SidebarWrapper>
      <aside className={`${sidebarOpen ? "show-sidebar sidebar" : "sidebar"}`}>
        <div className="sidebar-header">
          <Link to="/" className="logo">
            <h2>Kubwa-kennels</h2>
          </Link>
          <button className="sidebar-btn" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          {links.map((link) => {
            return (
              <Link
                key={link.id}
                to={link.path}
                className="link"
                onClick={closeSidebar}
              >
                {link.text}
              </Link>
            );
          })}
        </ul>
      </aside>
    </SidebarWrapper>
  );
}

const SidebarWrapper = styled.div`
  padding: 15px 0;
  /* background-color: blue; */
  display: flex;
  justify-content: center;
  align-items: center;

  .sidebar-header {
    display: flex;
    justify-content: space-between;
  }

  .logo {
    text-decoration: none;
    font-style: italic;
    margin-left: 5vw;
    color: blue;
  }

  .sidebar-btn {
    display: block;
    margin-right: 5vw;
    border: 0;
    font-size: 25px;
    background: transparent;
    /* color: var(--primaryColor); */
    color: blue;
    cursor: pointer;
  }

  .links {
    font-size: 25px;
    text-align: center;
    display: flex;
    flex-direction: column;
  }

  .link {
    text-decoration: none;
    margin-bottom: 25px;
    text-transform: uppercase;
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translate(-100%);
    transition: all 0.3s;
    z-index: -1;
    padding: 15px 0;
    border-right: 1px solid black;
    background-color: var(--primaryColor);
    background-color: white;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
`;

export default Sidebar;
