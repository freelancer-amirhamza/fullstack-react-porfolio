import React from 'react';
import './footer.css';
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer-logo'>AMIR HAMZA</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Service</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonial</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer-socials">
        <a href="https://facebook.com/Amirhamza.Dev"><FaFacebook /></a>
        <a href="https://istagram.com"><FaInstagramSquare /></a>
        <a href="https://linkedin.com"><FaLinkedin/></a>
      </div>
      <div className="footer-copyright">
        <small>&copy; Copyright Reserved. Build by <a href="https://amirhamzdev.com">Amir Hamza</a> for Practice</small>
      </div>
    </footer>
  )
}

export default Footer