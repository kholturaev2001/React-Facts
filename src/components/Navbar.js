import React from  'react';
import logo from "../images/react_logo.png"


export default function Navbar() {
    return (
        <nav>
            <img src={logo} width='70px' className="nav-icon"></img>
            <h3 className="nav-logo-text">React Facts</h3>
            <h4 className="nav-title">React Course - Project 1</h4>
        </nav>)
}



