import React, { useState } from 'react';
import '../styles.css';

function Header(props) {
  const [activeLink, setActiveLink] = useState(props.currentPage);

  const handleLinkClick = (page) => {
    setActiveLink(page);
    props.handlePageChange(page);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-bg p-4 fs-2">
      <div className="container-fluid">
        <span className="nav-text">Nate Long</span>
        <ul className="navbar-nav ms-auto mb-2 d-flex flex-sm-row justify-content-between align-items-center">
          <li className="nav-item mx-1">
            <a
              className={`nav-link link-text ${activeLink === 'about' ? 'active' : ''}`} onClick={() => handleLinkClick('about')} href="#about"> About me </a>
          </li>
          <li className="nav-item mx-1">
            <a className={`nav-link link-text ${activeLink === 'portfolio' ? 'active' : ''}`} onClick={() => handleLinkClick('portfolio')} href="#portfolio"> Portfolio </a>
          </li>
          <li className="nav-item mx-1">
            <a className={`nav-link link-text ${activeLink === 'contact' ? 'active' : ''}`} onClick={() => handleLinkClick('contact')} href="#contact"> Contact </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
