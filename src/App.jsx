// import React, { useRef, useState, useEffect } from 'react';
// import Home from './pages/Home/Home';
// import About from './pages/About/About';
// import Contact from './pages/Contact/Contact';
// import { FaArrowUp } from 'react-icons/fa';
// import { FaHome, FaInfoCircle, FaEnvelope, FaBuilding, FaCouch } from 'react-icons/fa';
// import './App.css';
// import LazyLoadSection from './common-components/intersectObserver/IntersectObserver';
// import { IMAGE_SOURCES } from './constants'
// import Services from './pages/Services/Services';
// import Project from './pages/Projects/Project';
// import { Routes, Route, useNavigate } from 'react-router-dom';

// const sections = [
//   { id: 'home', label: 'Home', icon: <FaHome />, type: 'scroll', },
//   { id: 'about', label: 'About', icon: <FaInfoCircle />, type: 'scroll', },
//   { id: 'services', label: 'Services', icon: <FaBuilding />, type: 'scroll', },
//   { id: 'projects', label: 'Projects', icon: <FaCouch />, type: 'page', },
//   { id: 'contact', label: 'Contact', icon: <FaEnvelope />, type: 'scroll', },

// ];

// function App() {

//   const navigate = useNavigate();
//   // Responsive: show icons only on mobile using window.matchMedia
//   const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 700px)').matches);
//   useEffect(() => {
//     const handler = () => setIsMobile(window.matchMedia('(max-width: 700px)').matches);
//     window.addEventListener('resize', handler);
//     return () => window.removeEventListener('resize', handler);
//   }, []);
//   const [showScrollTop, setShowScrollTop] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setShowScrollTop(window.scrollY > 100);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const [active, setActive] = useState('home');
//   const [isScrolling, setIsScrolling] = useState(false); // 🚀 block observer while scrolling

//   // refs for sections
//   const sectionRefs = {
//     home: useRef(null),
//     about: useRef(null),
//     contact: useRef(null),
//     services: useRef(null),
//     projects: useRef(null)
//   };

//   // ✅ IntersectionObserver to track active section
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (isScrolling) return; // 🚀 skip while programmatic scroll runs
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setActive(entry.target.id);
//           }
//         });
//       },
//       {
//         threshold: 0.5, // section must be 50% visible
//       }
//     );

//     // observe all sections
//     Object.values(sectionRefs).forEach((ref) => {
//       if (ref.current) observer.observe(ref.current);
//     });

//     return () => observer.disconnect();
//   }, [isScrolling]); // re-run if state changes

//   // ✅ Smooth scroll without lock
//   const scrollToSection = (id) => {
//     const ref = sectionRefs[id].current;
//     if (ref) {
//       setIsScrolling(true); // 🚀 freeze observer updates
//       const y = ref.offsetTop - 80; // offset for navbar
//       window.scrollTo({
//         top: y,
//         behavior: 'smooth',
//       });

//       // release lock after animation (~800ms)
//       setTimeout(() => setIsScrolling(false), 900);
//     }
//   };

//   const handleNavigate = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (

//     <div className="app-main">
//       {/* Navbar */}
//       <nav className="app-navbar">
//         <img className="main-logo" src={IMAGE_SOURCES.logo} alt="" />
//         <ul className="app-navbar-list">
//           {sections.map((sec) => (
//             <li key={sec.id}>{sec.type === 'scroll' ? (
//               <button
//                 className={`app-navbar-btn ${active === sec.id ? 'active' : ''}`}
//                 onClick={() => scrollToSection(sec.id)}
//               >                {isMobile ? sec.icon : <span className="nav-label">{sec.label}</span>}
//               </button>) : (<button className="app-navbar-btn" onClick={() => navigate('/projects')}>
//                 {isMobile ? sec.icon : <span className='nav-label'>{sec.label}</span>}
//               </button>)}
//             </li>
//           ))}
//         </ul>
//       </nav>

//       {/* Sections */}
//       <div className="app-sections">
//         <div ref={sectionRefs.home} id="home" className="app-section-card">
//           <Home />
//         </div>
//         <div ref={sectionRefs.about} id="about" className="app-section-card">
//           <LazyLoadSection>
//             <About />
//           </LazyLoadSection>
//         </div>


//         <div ref={sectionRefs.services} id='services' className="app-section-card">
//           <LazyLoadSection>
//             <Services />
//           </LazyLoadSection>
//         </div>

//         {/* <div ref={sectionRefs.projects} id='projects' className="app-section-card">
//           <LazyLoadSection>
//             <Project />
//           </LazyLoadSection>
//         </div> */}


//         <div ref={sectionRefs.contact} id="contact" className="app-section-card">
//           <LazyLoadSection>
//             <Contact />
//           </LazyLoadSection>
//         </div>
//       </div>
//       {showScrollTop && (
//         <button
//           className="scroll-top-btn"
//           aria-label="Scroll to top"
//           onClick={handleNavigate}
//         >
//           <FaArrowUp size={30} />
//         </button>
//       )}
//     </div>
//   );
// }

// export default App;

import { Routes, Route, useLocation } from "react-router-dom";
import Homepage from "./HomePage";
import Project from "./pages/Projects/Project";
import ProjectDetails from "./pages/ProjectsDetails/ProjectDetails";
import ProjectGallery from "./pages/ProjectGallery/ProjectGallery";
import ScrollToTop from "./common-components/ScrollToTop";

function App() {
  const loaction = useLocation();
  console.log("current path" + location.pathname)

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/project/:id/gallery" element={<ProjectGallery />} />
      </Routes>

    </>

  );
}

export default App;
