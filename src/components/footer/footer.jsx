import React from 'react'
import "./footer.css";
import{FaLinkedin,FaTwitterSquare,FaHeart} from "react-icons/fa"
import{FiInstagram} from "react-icons/fi"
import {GiIndianPalace} from "react-icons/gi"


const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">URI NOAH </a>

    <ul className="permalinks">
      <li><a href="#">Home</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#experience">Skills</a></li>
      <li><a href="#contacts">Contact</a></li>
      
    </ul>
    <div className="footer__socials">
      <a href="https://Linkedin.com"><FaLinkedin className="footer__socials-icon"/></a>
      <a href="https://Instagram.com"><FiInstagram className="footer__socials-icon"/></a>
      <a href="https://Twitter.com"><FaTwitterSquare className="footer__socials-icon"/></a>
    </div>
      <div className="footer__copyright">
        <small> &copy; No Rights Reserved. </small>
        <p> Prateek with  <FaHeart /> from <GiIndianPalace/> </p>
      </div>
    </footer>
  )
}

export default Footer;