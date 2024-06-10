import React from "react";
import {NavLink} from "react-router-dom";
import {IoClose, IoMenu} from "react-icons/io5"
import "./NavBar.css";

const NavBar = () => {
  return(
    <header className = "header">
      <nav className = "nav container">
        <NavLink to = "/" className = "nav_logo">
        Navigation Bar
        </NavLink>

        <div
          className = {"nav_menu"}
            id = "nav-menu"
          >
          <ul className = "nav_list">
            <li className = "nav_item">
              <NavLink to = "/" className = "nav-link">
              Home
              </NavLink>
            </li>
            <li className = "nav_item">
              <NavLink to = "/about" className = "nav-link">
              About
              </NavLink>
            </li>
          </ul>
          
          <div className = "nav_close" id = "nav-close">
            <IoClose />
          </div>
        </div>

        <div className="nav__toggle" id="nav-toggle">
         <IoMenu />
        </div>

      </nav>
    </header>
  );
};

export default NavBar;