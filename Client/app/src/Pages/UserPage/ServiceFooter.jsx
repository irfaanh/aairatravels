import React from 'react'
import './ServiceFooter.css'
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { SlLike } from "react-icons/sl";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const ServiceFooter = () => {
  return (
    <footer className="service-footer">
      <div className="footer-container">
        <div className="footer-item item">
          <span className="footer-icon"><CiLocationOn /></span>
          <p className="footer-title">Address</p>
          <p className="footer-text">Nellamkandy,Koduvally, <br /> Calicut-673573</p>
        </div>
        <div className="footer-item item">
          <span className="footer-icon"><FaPhoneAlt /></span>
          <p className="footer-title">Phone</p>
          <p className="footer-text">+91 79026 06303</p>
        </div>
        <div className="footer-item item">
          <span className="footer-icon"><MdOutlineMail /></span>
          <p className="footer-title">Email</p>
          <p className="footer-text">aairatravelsgroup@gmail.com</p>
        </div>
        <div className="footer-item item">
          <span className="footer-icon"><SlLike /></span>
          <p className="footer-title">Connect</p>
          <div className="footer-socials">
            <span><a href="https://www.instagram.com/aairatravels/"><FaInstagram /></a></span>
            <span><a href=""><FaFacebook /></a></span>
            {/* <span><a href=""><FaSquareXTwitter /></a></span> */}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Aaira. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default ServiceFooter
