import react from 'react';
import './navbar.css';

function Navbar() {

    return (
        <>
      <div className='head'>
        <div className='Navbar'>
          <nav>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li>
                <button type="button">Join Now</button>
              </li>
            </ul>
          </nav>
        </div>

        <div className='logo-head'>
            
        </div>
      </div>
    </>

    );
}
export default Navbar;