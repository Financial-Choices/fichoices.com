import React from 'react';
import "./header.css";
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <header>
                <a><img className="main-logo" src="logo.svg" alt="Financial Choices Logo" /></a>
                <nav>
                    <ul>
                        <li>
                            <Link to={``}>Home</Link>
                        </li>
                        <li>
                            <Link to={`about`}>About</Link>
                        </li>
                        {/* <li><a>Mortgage Calculator</a></li> */}
                        {/* <li><a>About</a></li> */}
                        {/* <li><a>Contact</a></li> */}
                    </ul>
                </nav>
            </header>
        </>
    );
}