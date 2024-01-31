import React from 'react';
import insta_icon from '../Assets/instagram_icon.png';
import whats_icon from '../Assets/whatsapp_icon.png';
import pinterest_icon from '../Assets/pintester_icon.png';
import './Footer.css'
const Footer = () => {
  const redirectToInstagram = () => {
    // Open Instagram in a new tab when the icon is clicked
    window.open('https://www.instagram.com/wholesale_shoes_bangalore/', '_blank'); // Replace with your Instagram URL
  };

  const redirectToWhatsApp = () => {
    // Open WhatsApp in a new tab when the icon is clicked
    window.open('https://web.whatsapp.com/', '_blank'); // Replace with your WhatsApp URL
  };

  const redirectToPinterest = () => {
    // Open Pinterest in a new tab when the icon is clicked
    window.open('https://www.pinterest.com/an_nanas/icons/', '_blank'); // Replace with your Pinterest URL
  };

  return (
    <div className='footer'>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
            
        </ul>
    <footer className='footer-social-icon'>
      {/* Your other footer content */}
      {/* Instagram Icon */}
      <img
        src={insta_icon}
        alt="Instagram Icon"
        onClick={redirectToInstagram}
        style={{ cursor: 'pointer', marginRight: '10px' }} // Optional: Changes cursor to pointer on hover
      />
      {/* WhatsApp Icon */}
      <img
        src={whats_icon}
        alt="WhatsApp Icon"
        onClick={redirectToWhatsApp}
        style={{ cursor: 'pointer', marginRight: '10px' }} // Optional: Changes cursor to pointer on hover
      />
      {/* Pinterest Icon */}
      <img
        src={pinterest_icon}
        alt="Pinterest Icon"
        onClick={redirectToPinterest}
        style={{ cursor: 'pointer' }} // Optional: Changes cursor to pointer on hover
      />
    </footer>
    </div>
  );

};

export default Footer;
