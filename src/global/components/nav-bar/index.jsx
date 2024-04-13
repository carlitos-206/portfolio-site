import React from "react";
import { useLocation } from "react-router-dom";
import { BsPersonVcardFill } from "react-icons/bs";
import { GoProjectRoadmap } from "react-icons/go";
import { ImProfile } from "react-icons/im";
import { MdWork } from "react-icons/md";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { MdHome } from "react-icons/md";

import "./index.css";

const NavBar = () => {
    const location = useLocation();
    const windowWidth = window.innerWidth;

    const renderNavItem = (path, IconComponent, label) => {
        // Determines if the icon should render based on the current path
        if (location.pathname !== path) {
            return (
                <h1 className="nav-item" onClick={() => window.location.href = path}>
                    {windowWidth > 768 ? label : <IconComponent />}
                </h1>
            );
        }
        return null;  // Don't render the icon for the current path
    };

    return (
        <div className="navbar-container">
            {renderNavItem('/about', BsPersonVcardFill, 'About')}
            {renderNavItem('/projects', GoProjectRoadmap, 'Projects')}
            {renderNavItem('/resume', ImProfile, 'Resume')}
            {location.pathname !== '/' && <h1 className="nav-item" onClick={() => window.location.href = '/'}>
                {windowWidth > 768 ? 'Home' : <MdHome />}
            </h1>}
            {renderNavItem('/work', MdWork, 'Work')}
            {renderNavItem('/contact', MdOutlineConnectWithoutContact, 'Contact')}
        </div>
    );
}

export default NavBar;
