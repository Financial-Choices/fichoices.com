import React from 'react';
import "./header.css";
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <header>
                <a><img className="main-logo" src="logo.svg" alt="Financial Choices Logo" /></a>
                <nav>
                    <ul>
                        <li>
                            <NavLink to={``}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={`about`}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to={`contact`}>Contact Us</NavLink>
                        </li>

                        {/* <li><a>Mortgage Calculator</a></li> */}
                        {/* <li><a>About</a></li> */}
                    </ul>
                </nav>
            </header>
        </>
    );
}