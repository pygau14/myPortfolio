// components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './header.css';
import logo from './logo.png';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img id="image-logo" src={logo} alt="My Logo" />
          </Link>
          <ul className="nav-menu-items">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/experience" className="nav-link">
                Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/training" className="nav-link">
                Training
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-link">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/skills" className="nav-link">
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
         
        </div>
      </nav>
    </header>
  );
};

export default Header;
