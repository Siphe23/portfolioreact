import React from 'react';
import Resume from '../commponets/Resume'; 

const Footer = () => {
  return (
    <footer className="contact-footer">
      {/* Footer Section */}
      <p>Contact me: +27 123 456 7890</p>
      <p>&copy; 2025 Nasiphi Ndzumo</p>

      {/* Social Media Icons */}
      
        <Resume />
    
    </footer>
  );
};

export default Footer;
