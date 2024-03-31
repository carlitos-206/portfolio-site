import React from "react";
import "./index.css"

const NavBar = () => {
    return (
        <div className="navbar-container">
        <h1 className="nav-item">About</h1>
        <h1 className="nav-item">Projects</h1>
        <h1 className="nav-item">Resume</h1>
        <h1 className="nav-item">Work</h1>
        <h1 className="nav-item">Contact</h1>
        </div>
    );
    }

export default NavBar;