import React from 'react';
import emailIcon from '../../assets/img/envelope-fill.svg';
import linkedinIcon from '../../assets/img/linkedin-ico.png';
import githubIcon from '../../assets/img/github-ico.png';

const Hero = () => {
  return (
    <section class="home-hero">
      <div class="home-hero__content">
        <h1 class="heading-primary">I am <span>M. Mustakim Surya</span></h1>
        <h2 class="heading-secondary">Full Stack Developer</h2>
        <div class="home-hero__info">
          <p class="text-primary">
            Experienced full stack developer skilled in UI/UX design, database design, and web development with React.js, Node.js, and CodeIgniter PHP.
          </p>
        </div>
        <div class="home-hero__cta">
          <a href="./#projects" class="btn btn--bg">Projects</a>
        </div>
      </div>
      <div class="home-hero__socials">
        <div class="home-hero__social">
          <a href="mailto:muhammadmustakimsurya@gmail.com" class="home-hero__social-icon-link"
          target='_blank' rel="noreferrer">
            <img
              src={emailIcon}
              alt="icon"
              class="home-hero__social-icon"
            />
          </a>
        </div>
        <div class="home-hero__social">
          <a href="https://www.linkedin.com/in/m-mustakim-surya/" class="home-hero__social-icon-link"
          target='_blank' rel="noreferrer"
          >
            <img
              src={linkedinIcon}
              alt="icon"
              class="home-hero__social-icon"
            />
          </a>
        </div>
        <div class="home-hero__social">
          <a href="https://github.com/m-mustakim-surya" class="home-hero__social-icon-link"
          target='_blank' rel="noreferrer"
          >
            <img
              src={githubIcon}
              alt="icon"
              class="home-hero__social-icon"
            />
          </a>
        </div>
      </div>
      <div class="home-hero__mouse-scroll-cont">
        <div class="mouse"></div>
      </div>
    </section>
  )
}

export default Hero