import React from 'react';
import emailIcon from '../../assets/img/envelope-fill.svg';
import linkedinIcon from '../../assets/img/linkedin-ico.png';
import githubIcon from '../../assets/img/github-ico.png';
import upworkIcon from '../../assets/img/upwork-ico.png';

const Hero = () => {
  return (
    <section className="home-hero" id="hero">
      <div className="home-hero__content">
        <h1 className="heading-primary">I am <span>M. Mustakim Surya</span></h1>
        <h2 className="heading-secondary">Full Stack Engineer</h2>
        <div className="home-hero__info">
          <p className="text-primary">
            Passionate Full Stack Engineer with solid hands-on experience in both Front-End and Back-End development, as well as a keen eye for UI/UX Design.
          </p>
        </div>
        <div className="home-hero__cta">
          <a href="./#projects" className="btn btn--bg">Projects</a>
        </div>
      </div>
      <div className="home-hero__socials">
        <div className="home-hero__social">
          <a href="mailto:takimsry@gmail.com" className="home-hero__social-icon-link"
            target='_blank' rel="noreferrer">
            <img
              src={emailIcon}
              alt="icon"
              className="home-hero__social-icon"
            />
          </a>
        </div>
        <div className="home-hero__social">
          <a href="https://www.linkedin.com/in/takimsry/" className="home-hero__social-icon-link"
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
          <a href="https://github.com/takimsry" className="home-hero__social-icon-link"
            target='_blank' rel="noreferrer"
          >
            <img
              src={githubIcon}
              alt="icon"
              className="home-hero__social-icon"
            />
          </a>
        </div>
        <div className="home-hero__social">
          <a href="https://www.upwork.com/freelancers/~019336430785e79a23?mp_source=share" className="home-hero__social-icon-link"
            target='_blank' rel="noreferrer"
          >
            <img
              src={upworkIcon}
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