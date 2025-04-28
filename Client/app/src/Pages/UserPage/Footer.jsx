import React from 'react'
import './Footer.css'
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="styled-footer">
      <div className="footer-container">
        
        {/* Logo + Socials */}
        <div className="footer-section">
          <img src="/images/aaira _logo_black.png" alt="Aaira Logo" className="footer-logo" />
          <div className="footer-socials mt-3">
            <a href="https://www.instagram.com/aairatravels/" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaSquareXTwitter /></a>
          </div>
        </div>

        {/* Center: Email + Copyright */}
        <div className="footer-section">
          <a href="mailto:aairatravelsgroup@gmail.com"><p className="footer-mail">aairatravelsgroup@gmail.com</p></a>
          <p className="footer-copy">© 2025 Aaira. All rights reserved.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <p className="footer-title">Quick Links</p>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="/packages">Packages</a></li>
            <li><a href="/allservices">Services</a></li>
            <li><a href="#">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
