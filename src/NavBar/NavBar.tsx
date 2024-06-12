import React, { useState } from "react";
import { Button, CssBaseline, makeStyles, useMediaQuery, AppBar, Toolbar, Divider, Drawer, Typography, Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/material/Menu";
import { List, ListItem, ListItemIcon, ListItemButton, ListItemText } from "@mui/material"
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import MailIcon from "@mui/material";
import InboxIcon from "@mui/material";
import "./NavBar.css";


/*Works but not responsive*/
const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
     }
  };

  return (
    <nav className="navbar">
      <div className="logo">
          <NavLink to="/" className = "logo"> Financial Choices </NavLink>
      </div>
      <div className="nav-elements">
        <NavLink to="/" className="nav-style" onClick={closeMenuOnMobile}> Home </NavLink>
        <NavLink to="/about" className="nav-style" onClick={closeMenuOnMobile}> About </NavLink>
        <div className="contact-button">
          <Button variant="contained" color = "success">
            <NavLink to="/contact" className="nav-style" onClick={closeMenuOnMobile}> Contact Us </NavLink>
          </Button>
        </div>
        <div className="nav_close" id="nav-close" onClick={toggleMenu}>
          <IoClose />
        </div>
      </div>
      <div className="nav_toggle" id="nav-toggle" onClick={toggleMenu}>
        <IoMenu />
      </div>
    </nav>
  );
};

export default NavBar;