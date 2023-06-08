import React from 'react';
import projectImg2 from '../../assets/portfolio/project2.png'

const Project2 = () => {
  return (
    <>
      <section className="project-cs-hero">
        <div className="project-cs-hero__content">
          <h1 className="heading-primary">OurGym</h1>
          <div className="project-cs-hero__info">
            <p className="text-primary">
              OurGym is a Gym Membership system which of course is engaged in sports. This app provide gym className, mentoring, booking system, and payment gateway via third party.
            </p>
          </div>
          <div className="project-cs-hero__cta">
            <a href="https://ourgym-capstone.netlify.app/" className="btn btn--bg" target="_blank" rel="noreferrer">Live Link</a>
          </div>
        </div>
      </section>
      <section className="project-details">
        <div className="main-container">
          <div className="project-details__content">
            <div className="project-details__showcase-img-cont" data-aos="fade-up">
              <img
                src={projectImg2}
                alt="Project"
                className="project-details__showcase-img"
              />
            </div>
            <div className="project-details__content-main" data-aos="fade-up" data-aos-delay="150">
              <div className="project-details__desc">
                <h3 className="project-details__content-title">Project Overview</h3>
                <p className="project-details__desc-para">
                  As a Front-End Developer, I collaborated with UI/UX Designers, Back-End Developers, and Quality Assurance experts to develop OurGym App. This comprehensive gym membership application was developed as a proof of competency test during my time at the Alterra Academy Independent Study Batch 3. It fulfilled the Team Capstone Project assignment, providing fitness enthusiasts with a seamless user experience and efficient management system.
                </p>
                <p className="project-details__desc-para">
                  Our collaborative efforts resulted in a user-friendly application that simplifies gym membership management. The OurGym App showcases my expertise in Front-End Development and highlights my ability to work effectively within a multidisciplinary team to deliver a high-quality product.
                </p>
              </div>
              <div className="project-details__tools-used" data-aos="fade-up">
                <h3 className="project-details__content-title">Tools Used</h3>
                <div className="skills">
                  <div className="skills__skill">HTML</div>
                  <div className="skills__skill">Tailwind CSS</div>
                  <div className="skills__skill">JavaScript</div>
                  <div className="skills__skill">React.js</div>
                  <div className="skills__skill">Axios</div>
                  <div className="skills__skill">Netlify</div>
                  <div className="skills__skill">Git</div>
                  <div className="skills__skill">GitHub</div>
                  <div className="skills__skill">Trello</div>
                </div>
              </div>
              <div className="project-details__links" data-aos="fade-up">
                <h3 className="project-details__content-title">See Live</h3>
                <a
                  href="https://ourgym-capstone.netlify.app/"
                  className="btn btn--med btn--theme project-details__links-btn"
                  target="_blank" rel="noreferrer"
                  >Live Link</a
                >
                <a
                  href="https://github.com/Capstone-Project-KelompokBesar-1/FRONTEND-REACT"
                  className="btn btn--med btn--theme-inv project-details__links-btn"
                  target="_blank" rel="noreferrer"
                  >Code Link</a
                >
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Project2