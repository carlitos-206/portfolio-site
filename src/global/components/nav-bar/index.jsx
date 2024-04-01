import React from "react";
import "./index.css"
const NavBar = () => {
    let windowWidth = window.innerWidth;
    if(windowWidth > 768){
    return (

        <div className="navbar-container">
        <h1 className="nav-item" onClick={(e)=>{window.location.href = '/about' }} >About</h1>
        <h1 className="nav-item" onClick={(e)=>{window.location.href = '/projects'}}>Projects</h1>
        <h1 className="nav-item">Resume</h1>
        <h1 className="nav-item">Work</h1>
        <h1 className="nav-item">Contact</h1>
        </div>
    );
    }else{
        return (
            <div className="navbar-container">
            <h1 className="nav-item" onClick={(e)=>{window.location.href = '/about' }} >About</h1>
            <h1 className="nav-item">Projects</h1>
            <h1 className="nav-item">Resume</h1>
            <h1 className="nav-item">Work</h1>
            <h1 className="nav-item">Contact</h1>
            </div>
        );
    }
}

export default NavBar;