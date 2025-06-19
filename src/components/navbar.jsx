import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './navbar.css';

function Navbar({ onLinkClick }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = (linkName, path) => {
    setActiveLink(linkName);
    setIsMobileMenuOpen(false); // Close menu on link click
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
      } else if (linkName === 'Home' || linkName === 'About') {
        navigate('/', { replace: false });
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 300); // Increase timeout to ensure navigation completes
      } else {
        navigate(path);
      }
    }
  };

  const handleConsultationClick = () => {
    window.open("https://wa.me/917907451370?text=Hey, I wanted to join your course, can I get more details?", '_blank');
  };

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Set active link based on current location
  useEffect(() => {
    if (location.pathname === '/') {
      setActiveLink('Home');
    } else if (location.pathname === '/foodprocessing') {
      setActiveLink('Services');
    }
  }, [location.pathname]);

  return (
    <div className='head'>
      <div className='logo-head'>
        <img className='img' src="./intellnexa.png" alt="Intellnexa Logo" />
        <p>Intellnexa</p>    
      </div>
      
      {/* Hamburger Menu Button - matching your CSS structure */}
      <div className='hamburger' onClick={toggleMenu}>
        <div className={`bar ${isMobileMenuOpen ? 'change' : ''}`}></div>
        <div className={`bar ${isMobileMenuOpen ? 'change' : ''}`}></div>
        <div className={`bar ${isMobileMenuOpen ? 'change' : ''}`}></div>
      </div>
      
      {/* Navbar - matching your CSS structure */}
      <div className={`Navbar ${isMobileMenuOpen ? 'open' : ''}`}>
        {/* Close menu button - new addition */}
        {isMobileMenuOpen && (
          <button
            className="close-menu"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
            style={{
              position: 'absolute',
              top: 20,
              right: 24,
              background: 'none',
              border: 'none',
              fontSize: '2rem',
              cursor: 'pointer',
              zIndex: 2100
            }}
          >
            &times;
          </button>
        )}
        <ul>
          <li><a href="#" className={activeLink === 'Home' ? 'active' : ''} onClick={(e) => { e.preventDefault(); handleLinkClick('Home', '/'); }}>Home</a></li>
          <li><a href="#" className={activeLink === 'About' ? 'active' : ''} onClick={(e) => { e.preventDefault(); handleLinkClick('About', '/'); }}>About Us</a></li>
          <li><a href="#" className={activeLink === 'Services' ? 'active' : ''} onClick={(e) => { e.preventDefault(); handleLinkClick('Services', '/'); }}>Services</a></li>
          <li>
            <button type="button" onClick={handleConsultationClick}>Join Now</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
