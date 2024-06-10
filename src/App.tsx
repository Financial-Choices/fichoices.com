import React from 'react';
import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";

import './App.css';

function App() {
  return (
    <Router>
        <NavBar />
        <main className = "main-content">
          <Routes>
            <Route path = "/" element = {<Home />} />
            <Route path = "/About" element = {<About />} />
          </Routes>
        </main>
    </Router>
  );
}

export default App;
