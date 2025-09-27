import React, { useState } from "react";
import { FaInstagram, FaEnvelope, FaPhone, FaFacebook } from "react-icons/fa";
import "./Contact.css";
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
  });

  const [status,setStatus]=useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (e.target.checkValidity()) {
      console.log("Form Submitted:", formData);
      emailjs.
      send(
        "service_uvhfb8j",
        "template_bqc0eb2",
        formData,
        "oWVnzyewU1Z86cEuJ"


      )
      .then(
        (result)=>{
          setStatus("messege sen succes fully");
          const phone= '9390398006';
          const whatsappURL=` https://wa.me/${phone}?text=Hi, I am ${formData.name}. My email is ${formData.email}. Message: ${formData.contact}`;
          window.open(whatsappURL, "_blank");
        },
        (error)=>{
          setStatus("error");
        }
      )
 
      // Reset form
      setFormData({ name: "", email: "", contact: "" });
      e.target.reset();
    } else {
      // Force native validation messages to show
      e.target.reportValidity();
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div>
        <h2 className="contact-heading">Let's Talk</h2>
      </div>
      <div
        className="contact-container">
        {/* Left */}
        <div className="contact-left">
          <div className="contact-info">
            <div className="contact-info-block">
              <div className="contact-value">info@home-design.com</div>
              <div className="contact-value">+91 8888 888 888</div>
            </div>
            <div className="contact-label">Address:
              <address className="contact-address">
                Home Design <br />
                Plot No. 888, <br />
                Rd. No. 88, Kukatpally, <br />
                Hyderabad – 500085
              </address>
            </div>
          </div>
          <div className="contact-icons">

            <a href="#" className="link" aria-label="Facebbol" target="_blank">
              <FaFacebook size={28} />
            </a>
            <a href="https://www.instagram.com/agaraassociates/" className="link" aria-label="Instagram" target="_blank">
              <FaInstagram size={28} />
            </a>
            <a href="mailto:agaraassociates@gmail.com" className="link" aria-label="Email" target="_blank">
              <FaEnvelope size={28} />
            </a>
            <a href="tel:+919000229023" className="link" aria-label="Phone" target="_blank">
              <FaPhone size={28} />
            </a>
          </div>
        </div>


        {/* Right */}
        <div className="contact-right">
          <div className="contact-intro">
            <p>Have a project in mind that you think we’d be a great fit for?</p>
            <p>We’d love to know what you’re thinking.</p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="input-wrapper">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input"
                required
                maxLength={80}
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="input-wrapper">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="input"
                required
                maxLength={50}
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="input-wrapper">
              <input
                type="tel"
                name="contact"
                placeholder="Your Contact"
                className="input"
                required
                pattern="[0-9]{10}"
                inputMode="numeric"
                title="Enter a valid 10-digit number"
                maxLength={10}
                value={formData.contact}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn">
              SEND
            </button>
          </form>
        </div>


      </div>
    </section>
  );
};

export default Contact;
