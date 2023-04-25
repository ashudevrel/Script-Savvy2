import React from 'react';
import Logo from "../img/logo.png";
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return  (
    <footer className="footer">
      <div className="container">
        <div className="logo-container">
          <img src={Logo} alt="Logo" className="logo" />
        </div>
        <div className="social-container">
          <h4>Follow Us:</h4>
          <div className="social-icons">
            <a href="https://twitter.com"><FaTwitter className="icon" /></a>
            <a href="https://facebook.com"><FaFacebook className="icon" /></a>
            <a href="https://instagram.com"><FaInstagram className="icon" /></a>
          </div>
        </div>
        <div className="info-container">
          <p>Made with ❤️ and React.js</p>
        </div>
      </div>
      <div className="bottom">
        <p>&copy; 2023 ScriptSavvy. All rights reserved.</p>
      </div>
      </footer>
  )
}

export default Footer;
