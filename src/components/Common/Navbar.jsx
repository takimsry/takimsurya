import React, { useState } from 'react';
import heroImage from '../../assets/img/takim-surya.png';
import hamMenu from '../../assets/img/ham-menu.svg'
import hamMenuClose from '../../assets/img/ham-menu-close.svg'
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isDashboard = location.pathname === "/";

  const [isSmallMenuOpen, setIsSmallMenuOpen] = useState(false);

  const toggleSmallMenu = () => {
    setIsSmallMenuOpen(!isSmallMenuOpen);
  };
  
  return (
    <header className="header">
      <div className="header__content">
        {isDashboard ? (
          <a href="#hero" className="header__logo-container">
            <div className="header__logo-img-cont">
              <img
                src={heroImage}
                alt="M. Mustakim Surya Logo"
                className="header__logo-img"
              />
            </div>
            <span className="header__logo-sub">Takim</span>
          </a>
        ) : (
          <Link to="/" className="header__logo-container">
            <div className="header__logo-img-cont">
              <img
                src={heroImage}
                alt="M. Mustakim Surya Logo"
                className="header__logo-img"
              />
            </div>
            <span className="header__logo-sub">Takim</span>
          </Link>
        )}
        <div className="header__main">
          {isDashboard ? (
            <ul className="header__links">
              <li className="header__link-wrapper">
                <a href="#hero"  className="header__link">Home</a>
              </li>
              <li className="header__link-wrapper">
                <a href="#about" className="header__link">About</a>
              </li>
              <li className="header__link-wrapper">
                <a href="#projects"  className="header__link">Projects</a>
              </li>
              <li className="header__link-wrapper">
                <a href="#contact"  className="header__link">Contact</a>
              </li>
            </ul>
          ) : (
            <ul className="header__links">
              <li className="header__link-wrapper">
                <Link to="/"  className="header__link"> Home </Link>
              </li>
              <li className="header__sm-menu-link">
                <a href="#overview" > Overview </a>
              </li>
            </ul>
          )}
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
          {isDashboard ? (
            <ul className="header__sm-menu-links">
              <li className="header__sm-menu-link">
                <a href="#hero" > Home </a>
              </li>

              <li className="header__sm-menu-link">
                <a href="#about"> About </a>
              </li>

              <li className="header__sm-menu-link">
                <a href="#projects"> Projects </a>
              </li>

              <li className="header__sm-menu-link">
                <a href="#contact"> Contact </a>
              </li>
            </ul>
          ) : (
            <ul className="header__sm-menu-links">
              <li className="header__sm-menu-link">
                <Link to="/" > Home </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar