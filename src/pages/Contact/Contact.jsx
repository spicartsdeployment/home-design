import React, { useState } from "react";
import { FaInstagram, FaEnvelope, FaPhone, FaFacebook, FaMap, FaWhatsapp } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import "./Contact.css";
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
  });

  const [status, setStatus] = useState("");

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
          "service_qsm8f4n",
          "template_w7upb1a",
          formData,
          "1AZTh6dOkB_Uzld2d"


        )
        .then(
          (result) => {
            setStatus("messege sent succes fully");
            const phone = '9515101986';
            const whatsappURL = ` https://wa.me/${phone}?text=Hi, I am ${formData.name}. My email is ${formData.email}. Message: ${formData.contact}`;
            window.open(whatsappURL, "_blank");
            setTimeout(() => setStatus(""), 3000);
          },
          (error) => {
            setTimeout(() => setStatus(""), 3000);
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
              <div className="contact-value">agaraassociates@gmail.com</div>
              <div className="contact-value">+91 9515 101 986</div>
            </div>
            <div className="contact-label">Address:
              <address className="contact-address">
                Agara Associates <br />
                Plot No. 26, <br />
                sector-2, HUDA Techno Enclave, HITEC City, <br />
                Hyderabad, Telangana – 500081
              </address>
            </div>
          </div>
          <div className="contact-icons">

            <a href="https://wa.me/+919515101986" className="link" aria-label="Whatsapp" target="_blank">
              <FaWhatsapp size={35} />
            </a>
            <a href="https://www.instagram.com/agaraassociates/" className="link" aria-label="Instagram" target="_blank">
              <FaInstagram size={35} />
            </a>
            <a href="mailto:agaraassociates@gmail.com" className="link" aria-label="Email" target="_blank">
              <FaEnvelope size={35} />
            </a>
            {/* <a href="tel:+919000229023" className="link" aria-label="Phone" target="_blank">
              <FaPhone size={28} />
            </a> */}
            <a href="https://maps.app.goo.gl/vnjAtGJGXNRVDMJk9" aria-label="maps" target="_blank"><MdLocationOn size={35} /></a>
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

          <p style={{ color: "white", marginTop: "15px", textAlign: "center" }}>{status}</p>
        </div>


      </div>
    </section>
  );
};

export default Contact;
