import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const githubUrl = 'https://github.com/rahulseeb';
  const linkedinUrl = 'https://www.linkedin.com/in/rahul-seeb';
  const phoneNumber = '+14169122170';
  const email = 'rahulseebaransingh@gmail.com';
  const file = 'https://drive.google.com/uc?export=download&id=1S0hRbL9VjuFK5sj2REnzyhkJK7E5yNVo'

  const openLink = (url) => {
    window.open(url, '_blank', 'noopener noreferrer');
  };

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <div className='navbar-logos'>
          <div className='email-icon' onClick={() => openLink(`mailto:${email}`)} title={email} style={{ cursor: 'pointer' }}>
            <i class="fa-regular fa-envelope fa-lg"></i>
            </div>
          <div className='phone-icon' onClick={() => openLink(`tel:${phoneNumber}`)} title = {phoneNumber}>
            <i class="fa-solid fa-phone "></i>
          </div>
          <div className='linkedin-icon' onClick={() => openLink(linkedinUrl)} title = {linkedinUrl}>
            <i class="fa-brands fa-linkedin fa-lg"></i>
          </div>
            <div className='github-icon' onClick={() => openLink(githubUrl)} title = {githubUrl}>
              <i className="fa-brands fa-github fa-lg"></i>
          </div>
          <div className='resume' onClick={() => openLink(`${file}&export=download`)} title = {file}>
              <span>RESUME</span>
              <i class="fa-regular fa-file-pdf"></i>
          </div>
          </div>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link
              to=''
              className='nav-links'
              onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/projects'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/contact'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
            <li>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;