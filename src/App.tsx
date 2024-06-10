import React from 'react';
import * as ReactDOM from "react-dom/client";
import logo from './logo.svg';
import Header from './header'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import Footer from './footer';



export default function App() {
  return (
    <>
      <Header></Header>
      <div id="page">
        <Outlet></Outlet>
      </div>
      <Footer/>
    </>
  );
}