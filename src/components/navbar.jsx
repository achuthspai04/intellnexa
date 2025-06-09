import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './navbar.css';

function Navbar({ onLinkClick }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('Home');

  const handleLinkClick = (linkName, path) => {
    setActiveLink(linkName);
    
    // Use the passed function if available, otherwise use local navigation
    if (onLinkClick) {
      onLinkClick(linkName);
    } else {
      if (linkName === 'Services') {
        navigate('/');
        setTimeout(() => {
          const coreElement = document.querySelector('.core');
          if (coreElement) {
            coreElement.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else if (linkName === 'Add-on Courses') {
        navigate('/');
        setTimeout(() => {
          const addOnElement = document.querySelector('.add-on');
          if (addOnElement) {
            addOnElement.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        navigate(path);
      }
    }
  };

  const handleConsultationClick = () => {
    window.open("https://wa.me/917907451370?text=Hey, I wanted to join your course, can I get more details?", '_blank');
  };

  // Set active link based on current location
  React.useEffect(() => {
    if (location.pathname === '/') {
      setActiveLink('Home');
    } else if (location.pathname === '/foodprocessing') {
      setActiveLink('Services');
    }
  }, [location.pathname]);

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
              <li><a href="#" className={activeLink === 'Home' ? 'active' : ''} onClick={(e) => { e.preventDefault(); handleLinkClick('Home', '/'); }}>Home</a></li>
              <li><a href="#" className={activeLink === 'About' ? 'active' : ''} onClick={(e) => { e.preventDefault(); handleLinkClick('About', '/'); }}>About Us</a></li>
              <li><a href="#" className={activeLink === 'Services' ? 'active' : ''} onClick={(e) => { e.preventDefault(); handleLinkClick('Services', '/'); }}>Services</a></li>
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