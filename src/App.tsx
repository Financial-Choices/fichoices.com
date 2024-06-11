import React from 'react';
import "./App.css";
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact"

function App() {
  return (
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );
}

export default App;
