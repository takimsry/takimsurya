import React, { useState } from 'react';
import heroImage from '../../assets/img/takim-surya.png';
import hamMenu from '../../assets/img/ham-menu.svg'
import hamMenuClose from '../../assets/img/ham-menu-close.svg'
import { Link } from 'react-router-dom';

const NavbarProjects = () => {
  const [isSmallMenuOpen, setIsSmallMenuOpen] = useState(false);

  const toggleSmallMenu = () => {
    setIsSmallMenuOpen(!isSmallMenuOpen);
  };
  
  return (
    <header className="header">
      <div className="header__content">
        <Link to="/" className="header__logo-container">
          <div className="header__logo-img-cont">
            <img
              src={heroImage}
              alt="M. Mustakim Surya Logo"
              className="header__logo-img"
            />
          </div>
          <span className="header__logo-sub">M. Mustakim Surya</span>
        </Link>
        <div className="header__main">
          <ul className="header__links">
            <li className="header__link-wrapper">
              <Link to="/"  className="header__link"> Home </Link>
            </li>
          </ul>
          <div className="header__main-ham-menu-cont" onClick={toggleSmallMenu}>
            <img
              src={isSmallMenuOpen ? hamMenuClose : hamMenu}
              alt="hamburger menu"
              className="header__main-ham-menu"
            />
          </div>
        </div>
      </div>
      <div className={`header__sm-menu ${isSmallMenuOpen ? 'header__sm-menu--active' : ''}`}>
        <div className="header__sm-menu-content">
          <ul className="header__sm-menu-links">
            <li className="header__sm-menu-link">
              <Link to="/" > Home </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default NavbarProjects