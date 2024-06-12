import React, { useState } from "react";
import { Button, CssBaseline, makeStyles, useMediaQuery, AppBar, Toolbar, Divider, Drawer, Typography, Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/material/Menu";
import { List, ListItem, ListItemIcon, ListItemButton, ListItemText } from "@mui/material"
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import MailIcon from "@mui/material";
import InboxIcon from "@mui/material";
import "./NavBarMobile.css";
import NavBar from "../NavBar/NavBar";


const NavBarHook = () =>{
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isMobile = useMediaQuery ('max-width: "1150px');
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    const closeMobileMenu = () => {
        if (isMobile) {
            setIsMenuOpen(false);
        }
    };
    const renderNavLinks = () =>{
        const listClassName = isMobile ? "nav_list" : "nav_list_web";
        const linkClassName = "nav_link";
        const buttonClassName = "nav_cta";
        return (
            <div className = {listClassName}>
                <NavLink to="/" className="nav-style" onClick={closeMobileMenu}> Home </NavLink>
                <NavLink to="/about" className="nav-style" onClick={closeMobileMenu}> About </NavLink>
                <Button variant="contained" color = "success">
                    <NavLink to="/contact" className="nav-style" onClick={closeMobileMenu}> Contact Us </NavLink>
                </Button>
            </div>
        );
    };

    return (
        <nav className = "nav container">
            <div className="logo">
              <NavLink to="/" className = "logo"> Financial Choices </NavLink>
            </div>
            {isMobile && (
                <div className = "nav_toggle" id = "nav-toggle" onClick = {toggleMenu}>
                    <IoMenu />
                </div>
            )}
            {isMobile ? (
                <div className = {'nav_menu ${isMenuOpen ? "show-menu": ""}'}
                id = "nav-menu">
                    {renderNavLinks()}
                    <div className = "nav_close" id = "nav-close" onClick={toggleMenu}>
                        <IoClose />
                    </div>
                </div>
            ) : (
                renderNavLinks()
            )}
        </nav>
    )
};

export default NavBarHook;