import React from 'react';
import emailIcon from '../assets/img/envelope-fill.svg';
import linkedinIcon from '../assets/img/linkedin-ico.png';
import githubIcon from '../assets/img/github-ico.png';

const Footer = () => {
  const crYear = new Date().getFullYear();
  return (
    <footer className="main-footer">
      <div className="main-container">
        <div className="main-footer__upper">
          <div className="main-footer__row main-footer__row-1">
            <h2 className="heading heading-sm main-footer__heading-sm">
              <span>Social</span>
            </h2>
            <div className="main-footer__social-cont">
              <a target="_blank" rel="noreferrer" href="mailto:muhammadmustakimsurya@gmail.com">
                <img
                  className="main-footer__icon"
                  src={emailIcon}
                  alt="icon"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/m-mustakim-surya/">
                <img
                  className="main-footer__icon"
                  src={linkedinIcon}
                  alt="icon"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="https://github.com/m-mustakim-surya">
                <img
                  className="main-footer__icon"
                  src={githubIcon}
                  alt="icon"
                />
              </a>
            </div>
          </div>
          <div className="main-footer__row main-footer__row-2">
            <h4 className="heading heading-sm text-lt">M. Mustakim Surya</h4>
            <p className="main-footer__short-desc">
              Experienced full stack developer skilled in front-end development, back-end development, UI/UX design, and project management.
            </p>
          </div>
        </div>

        <div className="main-footer__lower">
          &copy; Copyright {crYear}.
        </div>
      </div>
    </footer>
  )
}

export default Footer