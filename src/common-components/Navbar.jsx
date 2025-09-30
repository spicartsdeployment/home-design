import { Link, useLocation, useNavigate } from "react-router-dom";
import React from "react";

import { IMAGE_SOURCES } from "../constants";
import { nav_icons } from '../constants';

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
        // { id: "home", label: "HOME", icon: <FaHome />, type: "scroll" },
        { id: "services", label: "Services", icon: <img src={nav_icons.services_icon} alt="" style={{ height: "25px" }} />, type: "scroll" },
        { id: "projects", label: "Projects", icon: <img src={nav_icons.projects_icon} alt="" style={{ height: "25px" }} />, type: "page" },
        { id: "about", label: "About us", icon: <img src={nav_icons.aboutus_icon} alt="" style={{ height: "25px" }} />, type: "scroll" },
        { id: "contact", label: "Contact", icon: <img src={nav_icons.contact_icon} alt="" style={{ height: "25px" }} />, type: "scroll" },];

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

    const handleNavigate = (path) => {
        navigate(path);
        window.scrollTo({ top: 0, behavior: 'smooth' })

    }

    return (
        <nav className="app-navbar">
            <Link to={'/'}>
                <img className="main-logo" src={IMAGE_SOURCES.logo} alt="Logo" /></Link>
            <ul className="app-navbar-list">
                {sections.map((sec) => (
                    <li key={sec.id}>
                        {sec.type === 'scroll' ? (
                            <button className={`app-navbar-btn ${active === sec.id ? "active" : ""}`} onClick={() => handleScrollNav(sec.id)}>
                                {isMobile ? <span className="icons">{sec.icon}</span> : <span className="nav-label">{sec.label}</span>}
                            </button>) :
                            (
                                <button className={`app-navbar-btn ${location.pathname === "/projects" ? "active" : ""}`}
                                    onClick={() => handleNavigate('/projects')}>
                                    {isMobile ? <span className="icons">{sec.icon}</span> : <span className="nav-label">{sec.label}</span>}
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