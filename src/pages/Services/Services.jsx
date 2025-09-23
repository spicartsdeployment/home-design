import React from 'react';
import './Services.css';
import { Services_Images } from '../../constants'

const Services = () => (
  <section id="services" className="services-section">
    <h1 className="services-title">Services</h1>
    <p className="services-desc">Transforming Spaces with Purpose & Precision.</p>



    <div className="services-card">

      <div className='services-box'>
        <div className='img-box'>
          <img src={Services_Images.servimg1} alt="" />
          <p>ARCHITECTURE</p>
        </div>

        <div className='img-box'>
          <img src={Services_Images.servimg2} alt="" />
          <p>INTERIOR DESIGN</p>
        </div>

        <div className='img-box'>
          <img src={Services_Images.servimg3} alt="" />
          <p>LANDSCAPE DESIGN</p>
        </div>

        <div className='img-box'>
          <img src={Services_Images.servimg4} alt="" />
          <p>CONSTRUCTION</p>
        </div>

      </div>

    </div>

    <div className='apart-section'>
      <h1>What sets us apart</h1>

      <div className='apart-grid'>

        <div className='apart-item br-right br-buttom'>
          <h2>Holistic Approach</h2>
          <p>We seamlessly integrate architecture, interiors, and landscaping.</p>
        </div>

        <div className="apart-item br-buttom">
          <h2>Client–Centric Philosophy</h2>
          <p>Every design is crafted around our client's unique vision.</p>
        </div>

        <div className="apart-item br-right">
          <h2>Quality &amp; Precision</h2>
          <p>We emphasize superior craftsmanship and sustainable materials.</p>
        </div>

        <div className="apart-item">
          <h2>End–to–End Services</h2>
          <p>From conceptualization to execution, we handle every detail.</p>
        </div>


      </div>

      <p className='apart-footer'>
        Our team is a collective of passionate architects, interior designers, and construction specialists, all committed to bringing your vision to life.
      </p>

    </div>

    <div className='feedback-section'>
      <h1>Client Feedback</h1>

      <div className='feedback-card'>

        <div className='feedback'>
          <p>Boost your product and services's creditibility by adding testimonials from your clients. People love recommandations so feedback from others who've tried it is invaluable. Boost your product and services's creditibility by adding testimonials from your clients. People love recommandations so feedback from others who've tried it is invaluable </p>
          <h3>-Damodar</h3>
        </div>

        <div className='feedback'>
          <p>Boost your product and services's creditibility by adding testimonials from your clients. People love recommandations so feedback from others who've tried it is invaluable </p>
          <h3>-Damodar</h3>
        </div>

        <div className='feedback'>
          <p>Boost your product and services's creditibility by adding testimonials from your clients. People love recommandations so feedback from others who've tried it is invaluable </p>
          <h3>-Damodar</h3>
        </div>

      </div>

    </div>

  </section>
);

export default Services;
