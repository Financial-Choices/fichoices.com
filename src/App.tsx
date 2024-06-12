import React from 'react';
import "./App.css";
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from "react-router-dom";
import { Button, CssBaseline, makeStyles, useMediaQuery, AppBar, Toolbar, Typography, Box, Divider, Drawer } from "@mui/material";
import NavBar from "./NavBar/NavBar";
import NavBarHook from "./NavBar/NavBarMobile"
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact"

const drawWidth = 220;

function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <NavBarHook />
        <main className = "main-content">
          <Routes>
            <Route path = "/" element = {<Home />} />
            <Route path = "/about" element = {<About />} />
            <Route path = "/contact" element = {<Contact />} />
          </Routes>
        </main>
    </BrowserRouter>
  );
}

export default App;
