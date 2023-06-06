import React from 'react';
import heroImage from '../../assets/img/takim-surya.png';
import hamMenu from '../../assets/img/ham-menu.svg'
import hamMenuClose from '../../assets/img/ham-menu-close.svg'
import { Link } from 'react-router-dom';

const Navbar = () => {
  
  return (
    <header class="header">
      <div class="header__content">
        <div class="header__logo-container">
          <div class="header__logo-img-cont">
            <img
              src={heroImage}
              alt="M. Mustakim Surya Logo"
              class="header__logo-img"
            />
          </div>
          <span class="header__logo-sub">M. Mustakim Surya</span>
        </div>
        <div class="header__main">
          <ul class="header__links">
            <li class="header__link-wrapper">
              <a href="./#hero"  class="header__link"> Home </a>
            </li>
            <li class="header__link-wrapper">
              <a href="./#about" class="header__link">About </a>
            </li>
            <li class="header__link-wrapper">
              <a href="./#projects"  class="header__link">
                Projects
              </a>
            </li>
            <li class="header__link-wrapper">
              <a href="./#contact"  class="header__link"> Contact </a>
            </li>
          </ul>
          <div class="header__main-ham-menu-cont">
            <img
              src={hamMenu}
              alt="hamburger menu"
              class="header__main-ham-menu"
            />
            <img
              src={hamMenuClose}
              alt="hamburger menu close"
              class="header__main-ham-menu-close d-none"
            />
          </div>
        </div>
      </div>
      <div class="header__sm-menu">
        <div class="header__sm-menu-content">
          <ul class="header__sm-menu-links">
            <li class="header__sm-menu-link">
              <Link to="/" > Home </Link>
            </li>

            <li class="header__sm-menu-link">
              <a href="./#about"> About </a>
            </li>

            <li class="header__sm-menu-link">
              <a href="./#projects"> Projects </a>
            </li>

            <li class="header__sm-menu-link">
              <a href="./#contact"> Contact </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Navbar