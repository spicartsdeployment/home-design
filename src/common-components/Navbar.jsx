import { useLocation, useNavigate } from "react-router-dom";
import React from "react";

import { IMAGE_SOURCES } from "../constants";

import {
    FaHome,
    FaInfoCircle,
    FaEnvelope,
    FaBuilding,
    FaCouch,
} from "react-icons/fa";


function Navbar({ active, isMobile, scrollToSection }) {
    const location = useLocation();
    const navigate = useNavigate();

    const sections = [
        { id: "home", label: "Home", icon: <FaHome />, type: "scroll" },
        { id: "about", label: "About", icon: <FaInfoCircle />, type: "scroll" },
        { id: "services", label: "Services", icon: <FaBuilding />, type: "scroll" },
        { id: "projects", label: "Projects", icon: <FaCouch />, type: "page" },
        { id: "contact", label: "Contact", icon: <FaEnvelope />, type: "scroll" },];

    const handleScrollNav = (sectionId) => {
        if (location.pathname === '/' && scrollToSection) {

            scrollToSection(sectionId);
            console.log("home")

        }
        else {
            console.log("remaining")
            navigate('/', { state: { scrollTo: sectionId } });

        }

    }

    return (
        <nav className="app-navbar">
            <a href="#home">
                <img className="main-logo" src={IMAGE_SOURCES.logo} alt="Logo" /></a>
            <ul className="app-navbar-list">
                {sections.map((sec) => (
                    <li key={sec.id}>
                        {sec.type === 'scroll' ? (
                            <button className={`app-navbar-btn ${active === sec.id ? "active" : ""}`} onClick={() => handleScrollNav(sec.id)}>
                                {isMobile ? sec.icon : <span className="nav-label">{sec.label}</span>}
                            </button>) :
                            (
                                <button className={`app-navbar-btn ${location.pathname === "/projects" ? "active" : ""}`}
                                    onClick={() => navigate('/projects')}>
                                    {isMobile ? sec.icon : <span className="nav-label">{sec.label}</span>}
                                </button>
                            )}
                    </li>
                )

                )}

            </ul>

        </nav>

    );

}

export default Navbar;