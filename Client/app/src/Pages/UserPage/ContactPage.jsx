import React from 'react';
import './ContactPage.css';
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const ContactPage = () => {
  return (
    <section className='contactsection'>
      <div className="allservices-section">
        <div className="image-container">
          <img className="trackimage" src="/images/trackingimg.webp" alt="Contact Banner" />
          <p className="image-text">Contact Us</p>
        </div>
      </div>

      <div className="contactsection-content container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 contact-card p-4">
            <h2 className="mb-4 text-center" style={{color:'#b58f51'}}>Contact Info</h2>

            <div className="contact-info-box">
              <h5 className="text-white">Let's Talk</h5>
              <p className="contact-text">
                <IoMail />
                <a href="mailto:aairatravelsgroup@gmail.com" className="contact-link"> aairatravelsgroup@gmail.com</a>
              </p>
              <p className="contact-text">
                <FaPhoneAlt />
                <a href="tel:+917902606303" className="contact-link"> +91 79026 06303</a>
              </p>
            </div>

            <div className="contact-info-box">
              <h5 className="text-white">Location</h5>
              <p className="contact-text"><FaLocationDot /> Nellamkandy, Koduvally, Kozhikode, 673585</p>
            </div>

            <div className="contact-info-box">
              <h5 className="text-white">Visit Us</h5>
              <div className="social-icons d-flex justify-content-start gap-4 mt-2">
                <a href="https://www.instagram.com/aairatravels/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="social-icon" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="social-icon" />
                </a>
              </div>
            </div>

          </div>
        </div>
        <div className="contactmap-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d977.8484612987397!2d75.90970766962451!3d11.378914599300554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6694f0123bdcf%3A0x1c579a28d7a51bf0!2sNUMERO%20MOBILES!5e0!3m2!1sen!2sin!4v1745289822818!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <form className="contactsection-form" action="https://formspree.io/f/xgvkwjon" method="POST">
        <div className="formsection-group">
            <input type="text" name="firstName" placeholder="First Name" required />
            <input type="text" name="contactNumber" placeholder="Contact Number" required />
        </div>
        <div className="sectionform-group">
            <input type="email" name="email" placeholder="Email" required />
        </div>
        <div className="form-group">
            <textarea name="message" rows="4" placeholder="Your Message" required></textarea>
        </div>
        <button type="submit" className="contact-btn">Send</button>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
