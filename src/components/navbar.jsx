import React, { useState } from 'react';
import './navbar.css';

function Navbar() {
  const [activeLink, setActiveLink] = useState('Home');

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
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
              <li><a href="#" className={activeLink === 'Home' ? 'active' : ''} onClick={() => handleLinkClick('Home')}>Home</a></li>
              <li><a href="#" className={activeLink === 'About' ? 'active' : ''} onClick={() => handleLinkClick('About')}>About Us</a></li>
              <li><a href="#" className={activeLink === 'Services' ? 'active' : ''} onClick={() => handleLinkClick('Services')}>Services</a></li>
              <li>
                <button type="button">Join Now</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;