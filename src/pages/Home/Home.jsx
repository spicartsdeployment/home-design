import React from 'react';
// import Navbar from './Navbar';
import './Home.css';
import { VIDEO_SOURCES } from '../../constants';
import { IMAGE_SOURCES } from '../../constants';

const Home = () => (
    <section id="home" className="home-section">
        {/* Background Video */}
        <video
            autoPlay
            loop
            muted
            playsInline
            className="home-bg-video"
        >
            <source src={VIDEO_SOURCES.home_vd} type="video/mp4" />
            Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="home-bg-overlay" />

        {/* Hero Content */}
        <div className="card home-hero-content">

            <div className='logo-tittle'>
                <img src={IMAGE_SOURCES.agaraAssociatesLogo} alt="" />
                {/* <h1 className="home-title" >Agara Associates</h1> */}
            </div>

            <div className="home-desc-con">
                <p className="home-subtitle">Crafting Timeless Spaces with a Modern Touch</p>
                <button className="get-quote-btn">Get Quote</button>
            </div>
        </div>
    </section>
);

export default Home;
