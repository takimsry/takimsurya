import React from 'react';
import emailIcon from '../../assets/img/envelope-fill.svg';
import linkedinIcon from '../../assets/img/linkedin-ico.png';
import githubIcon from '../../assets/img/github-ico.png';

const Hero = () => {
  return (
    <section className="home-hero" id="hero">
      <div className="home-hero__content">
        <h1 className="heading-primary">I am <span>M. Mustakim Surya</span></h1>
        <h2 className="heading-secondary">Full Stack Developer</h2>
        <div className="home-hero__info">
          <p className="text-primary">
            Passionate Full Stack Developer with a strong foundation in Front-End and Back-End Development, as well as a keen eye for UI/UX Design.
          </p>
        </div>
        <div className="home-hero__cta">
          <a href="./#projects" className="btn btn--bg">Projects</a>
        </div>
      </div>
      <div className="home-hero__socials">
        <div className="home-hero__social">
          <a href="mailto:muhammadmustakimsurya@gmail.com" className="home-hero__social-icon-link"
          target='_blank' rel="noreferrer">
            <img
              src={emailIcon}
              alt="icon"
              className="home-hero__social-icon"
            />
          </a>
        </div>
        <div className="home-hero__social">
          <a href="https://www.linkedin.com/in/m-mustakim-surya/" className="home-hero__social-icon-link"
          target='_blank' rel="noreferrer"
          >
            <img
              src={linkedinIcon}
              alt="icon"
              className="home-hero__social-icon"
            />
          </a>
        </div>
        <div className="home-hero__social">
          <a href="https://github.com/m-mustakim-surya" className="home-hero__social-icon-link"
          target='_blank' rel="noreferrer"
          >
            <img
              src={githubIcon}
              alt="icon"
              className="home-hero__social-icon"
            />
          </a>
        </div>
      </div>
      <div className="home-hero__mouse-scroll-cont">
        <div className="mouse"></div>
      </div>
    </section>
  )
}

export default Hero