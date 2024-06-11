import React, { useState } from "react";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import "./NavBar.css";

const NavBar = () => {

  return (
    <nav className="navbar">
      
      <div className="nav-elements">
        <div className="logo">
          {/* Add a logo */}
        </div>
            <NavLink to="/" className="nav-style"> Home </NavLink>
            <NavLink to="/about" className="nav-style"> About </NavLink>
      </div>
      <div className="contact-button">
        <Button variant="contained">
          Contact Us
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;