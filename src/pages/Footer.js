import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Social icons import
import Resume from './Resume'; // Corrected the import path

const Footer = () => {
  return (
    <footer className="contact-footer">
      {/* Footer Section */}
      <p>Contact me: +27 123 456 7890</p>
      <p>&copy; 2025 Nasiphi Ndzumo</p>

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
        <Resume />
      </div>
    </footer>
  );
};

export default Footer;
