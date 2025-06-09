import React, { useState } from 'react';
import './navbar.css';

function Navbar() {
  const [activeLink, setActiveLink] = useState('Home');

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  const handleConsultationClick = () => {
    window.open("https://wa.me/917907451370?text=Hey, I wanted to join your course, can I get more details?", '_blank');
  };

  return (
    <>
      <div className='head'>
        <div className='logo-head'>
          <img className='img' src="./intellnexa.png" alt="Intellnexa Logo" />
          <p>Intellnexa</p>    
        </div>
        
        <div className='Navbar'>
          <nav>
            <ul>
              <li><a href="/" className={activeLink === 'Home' ? 'active' : ''} onClick={() => handleLinkClick('Home')}>Home</a></li>
              <li><a href="/" className={activeLink === 'About' ? 'active' : ''} onClick={() => handleLinkClick('About')}>About Us</a></li>
              <li><a href="/#core" className={activeLink === 'Services' ? 'active' : ''} onClick={() => handleLinkClick('Services')}>Services</a></li>
              <li>
                <button type="button" onClick={handleConsultationClick}>Join Now</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;