import React, { useRef, useState, useEffect } from 'react';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import { FaArrowUp } from 'react-icons/fa';
import { FaHome, FaInfoCircle, FaEnvelope } from 'react-icons/fa';
import './App.css';
import LazyLoadSection from './common-components/intersectObserver/IntersectObserver';

const sections = [
  { id: 'home', label: 'Home', icon: <FaHome /> },
  { id: 'about', label: 'About', icon: <FaInfoCircle /> },
  { id: 'contact', label: 'Contact', icon: <FaEnvelope /> },
];

function App() {
  // Responsive: show icons only on mobile using window.matchMedia
  const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 700px)').matches);
  useEffect(() => {
    const handler = () => setIsMobile(window.matchMedia('(max-width: 700px)').matches);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [active, setActive] = useState('home');
  const [isScrolling, setIsScrolling] = useState(false); // 🚀 block observer while scrolling

  // refs for sections
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    contact: useRef(null),
  };

  // ✅ IntersectionObserver to track active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrolling) return; // 🚀 skip while programmatic scroll runs
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5, // section must be 50% visible
      }
    );

    // observe all sections
    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, [isScrolling]); // re-run if state changes

  // ✅ Smooth scroll without lock
  const scrollToSection = (id) => {
    const ref = sectionRefs[id].current;
    if (ref) {
      setIsScrolling(true); // 🚀 freeze observer updates
      const y = ref.offsetTop - 80; // offset for navbar
      window.scrollTo({
        top: y,
        behavior: 'smooth',
      });

      // release lock after animation (~800ms)
      setTimeout(() => setIsScrolling(false), 900);
    }
  };

  const handleNavigate = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="app-main">
      {/* Navbar */}
      <nav className="app-navbar">
        <ul className="app-navbar-list">
          {sections.map((sec) => (
            <li key={sec.id}>
              <button
                className={`app-navbar-btn ${active === sec.id ? 'active' : ''}`}
                onClick={() => scrollToSection(sec.id)}
              >
                {isMobile ? sec.icon : <span className="nav-label">{sec.label}</span>}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Sections */}
      <div className="app-sections">
        <div ref={sectionRefs.home} id="home" className="app-section-card">
          <Home />
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
          aria-label="Scroll to top"
          onClick={handleNavigate}
        >
          <FaArrowUp size={30} />
        </button>
      )}
    </div>
  );
}

export default App;
