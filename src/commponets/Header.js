import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import '../styles/header.css';

const Header = () => {
  return (
    <header className="portfolio-header">
      <div className="header-content">
        {/* Logo with Blue and White Names */}
        <h1 className="logo">
          <span className="name-blue">Nasiphi</span>
          <span className="name-white"> Ndzumo</span>
        </h1>

        {/* Navigation Links */}
        <nav className="navigation">
          <Link to="/">Home</Link> | <Link to="/about">About</Link> |{' '}
          <Link to="/experiences">Experiences</Link>
          <button className="contact-button">Contact Me</button>
        </nav>
      </div>

      {/* Social Media Icons */}
      <div className="social-icons">
        <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </div>
    </header>
  );
};

export default Header;
