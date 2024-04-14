import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BsPersonVcardFill } from "react-icons/bs";
import { GrWorkshop } from "react-icons/gr";
import { GiMeshNetwork } from "react-icons/gi";
import { ImProfile } from "react-icons/im";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { IoHome } from "react-icons/io5";

import "./index.css";

const NavBar = () => {
    const location = useLocation();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const renderNavItem = (path, IconComponent, label) => {
        if (location.pathname !== path) {
            return (
                <h1 className="nav-item" onClick={() => (window.location.href = path)}>
                    {windowWidth > 1439 ? (
                        <div className="nav-content">
                            <span className="nav-label">{label}</span>
                            <IconComponent className="nav-icon" />
                        </div>
                    ) : (
                        <IconComponent />
                    )}
                </h1>
            );
        }
        return null;  // Don't render the icon for the current path
    };

    return (
        <div className="navbar-container">
            {renderNavItem('/about', BsPersonVcardFill, 'About')}
            {renderNavItem('/projects', GrWorkshop, 'Projects')}
            {renderNavItem('/resume', ImProfile, 'Resume')}
            {location.pathname !== '/' && (
                <h1 className="nav-item" onClick={() => (window.location.href = '/')}>
                    {windowWidth > 1439 ? (
                        <div className="nav-content">
                            <span className="nav-label">Home</span>
                            <IoHome className="nav-icon" />
                        </div>
                    ) : (
                        <IoHome />
                    )}
                </h1>
            )}
            {renderNavItem('/work', GiMeshNetwork, 'Work')}
            {renderNavItem('/contact', MdOutlineConnectWithoutContact, 'Contact')}
        </div>
    );
};

export default NavBar;
