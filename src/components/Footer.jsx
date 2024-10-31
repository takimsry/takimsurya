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
              <a target="_blank" rel="noreferrer" href="mailto:takimsry@gmail.com">
                <img
                  className="main-footer__icon"
                  src={emailIcon}
                  alt="icon"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/takimsry/">
                <img
                  className="main-footer__icon"
                  src={linkedinIcon}
                  alt="icon"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="https://github.com/takimsry">
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
              Passionate Software Developer with a strong foundation in Front-End and Back-End Development, as well as a keen eye for UI/UX Design.
            </p>
          </div>
        </div>

        <div className="main-footer__lower">
          &copy; {crYear} M. Mustakim Surya
        </div>
      </div>
    </footer>
  )
}

export default Footer