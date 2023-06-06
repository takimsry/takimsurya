import React from 'react';
import emailIcon from '../assets/img/envelope-fill.svg';
import linkedinIcon from '../assets/img/linkedin-ico.png';
import githubIcon from '../assets/img/github-ico.png';

const Footer = () => {
  const crYear = new Date().getFullYear();
  return (
    <footer class="main-footer">
      <div class="main-container">
        <div class="main-footer__upper">
          <div class="main-footer__row main-footer__row-1">
            <h2 class="heading heading-sm main-footer__heading-sm">
              <span>Social</span>
            </h2>
            <div class="main-footer__social-cont">
              <a target="_blank" rel="noreferrer" href="mailto:muhammadmustakimsurya@gmail.com">
                <img
                  class="main-footer__icon"
                  src={emailIcon}
                  alt="icon"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/m-mustakim-surya/">
                <img
                  class="main-footer__icon"
                  src={linkedinIcon}
                  alt="icon"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="https://github.com/m-mustakim-surya">
                <img
                  class="main-footer__icon"
                  src={githubIcon}
                  alt="icon"
                />
              </a>
            </div>
          </div>
          <div class="main-footer__row main-footer__row-2">
            <h4 class="heading heading-sm text-lt">M. Mustakim Surya</h4>
            <p class="main-footer__short-desc">
              Experienced full stack developer skilled in UI/UX design, database design, and web development with React.js, Node.js, and CodeIgniter PHP.
            </p>
          </div>
        </div>

        <div class="main-footer__lower">
          &copy; Copyright {crYear}.
        </div>
      </div>
    </footer>
  )
}

export default Footer