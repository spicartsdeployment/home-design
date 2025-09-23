import React, { useRef, useState, useEffect } from "react";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Services from "./pages/Services/Services";
import LazyLoadSection from "./common-components/intersectObserver/IntersectObserver";
import { IMAGE_SOURCES } from "./constants";
import { FaArrowUp } from "react-icons/fa";
import { FaHome, FaInfoCircle, FaEnvelope, FaBuilding, FaCouch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import './App.css';
import Navbar from "./common-components/Navbar";




const sections = [
    { id: "home", label: "Home", icon: <FaHome />, type: "scroll" },
    { id: "about", label: "About", icon: <FaInfoCircle />, type: "scroll" },
    { id: "services", label: "Services", icon: <FaBuilding />, type: "scroll" },
    { id: "projects", label: "Projects", icon: <FaCouch />, type: "page" },
    { id: "contact", label: "Contact", icon: <FaEnvelope />, type: "scroll" },
];

function HomePage() {
    const navigate = useNavigate();

    const [isMobile, setIsMobile] = useState(
        window.matchMedia("(max-width: 700px)").matches
    );
    useEffect(() => {
        const handler = () =>
            setIsMobile(window.matchMedia("(max-width: 700px)").matches);
        window.addEventListener("resize", handler);
        return () => window.removeEventListener("resize", handler);
    }, []);

    const [active, setActive] = useState("home");
    const [isScrolling, setIsScrolling] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);

    const sectionRefs = {
        home: useRef(null),
        about: useRef(null),
        services: useRef(null),
        contact: useRef(null),
    };

    useEffect(() => {
        const handleScroll = () => setShowScrollTop(window.scrollY > 100);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (isScrolling) return;
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(entry.target.id);
                });
            },
            { threshold: 0.5 }
        );
        Object.values(sectionRefs).forEach((ref) => {
            if (ref.current) observer.observe(ref.current);
        });
        return () => observer.disconnect();
    }, [isScrolling]);

    const scrollToSection = (id) => {
        const ref = sectionRefs[id].current;
        if (ref) {
            setIsScrolling(true);
            const y = ref.offsetTop - 80;
            window.scrollTo({ top: y, behavior: "smooth" });
            setTimeout(() => setIsScrolling(false), 900);
        }
    };

    const handleNavigateTop = () =>
        window.scrollTo({ top: 0, behavior: "smooth" });

    useEffect(() => {
        if (location.state?.scrollTo) {
            const sectionId = location.state?.scrollTo;
            setTimeout(() => {
                scrollToSection(sectionId);

            }, 200)
        }
    }, [location.state]);

    return (
        <div className="app-main">

            <Navbar
                active={active}
                isMobile={isMobile}
                scrollToSection={scrollToSection}

            />
            {/* Navbar */}
            {/* <nav className="app-navbar">
                <img className="main-logo" src={IMAGE_SOURCES.logo} alt="" />
                <ul className="app-navbar-list">
                    {sections.map((sec) => (
                        <li key={sec.id}>
                            {sec.type === "scroll" ? (
                                <button
                                    className={`app-navbar-btn ${active === sec.id ? "active" : ""}`}
                                    onClick={() => scrollToSection(sec.id)}
                                >
                                    {isMobile ? sec.icon : (
                                        <span className="nav-label">{sec.label}</span>
                                    )}
                                </button>
                            ) : (
                                <button
                                    className="app-navbar-btn"
                                    onClick={() => navigate("/projects")}
                                >
                                    {isMobile ? sec.icon : (
                                        <span className="nav-label">{sec.label}</span>
                                    )}
                                </button>
                            )}
                        </li>
                    ))}
                </ul>
            </nav> */}

            {/* Sections */}
            <div className="app-sections">
                <div ref={sectionRefs.home} id="home" className="app-section-card">
                    <Home />
                </div>

                <div ref={sectionRefs.services} id="services" className="app-section-card">
                    <LazyLoadSection>
                        <Services />
                    </LazyLoadSection>
                </div>
                <div ref={sectionRefs.about} id="about" className="app-section-card">
                    <LazyLoadSection>
                        <About />
                    </LazyLoadSection>
                </div>
                <div ref={sectionRefs.contact} id="contact" className="app-section-card">
                    <LazyLoadSection>
                        <Contact />
                    </LazyLoadSection>
                </div>
            </div>

            {showScrollTop && (
                <button
                    className="scroll-top-btn"
                    onClick={handleNavigateTop}
                >
                    <FaArrowUp size={30} />
                </button>
            )}
        </div>
    );
}

export default HomePage;

