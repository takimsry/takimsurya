import React from 'react';
import projectImg1 from '../../assets/portfolio/project1.png'

const Project1 = () => {
  return (
    <>
      <section className="project-cs-hero">
        <div className="project-cs-hero__content">
          <h1 className="heading-primary">angkutaja</h1>
          <div className="project-cs-hero__info">
            <p className="text-primary">
              angkutaja is a website created to address the house moving needs, especially the transfer of boarding houses for college students in Semarang. It offers a streamlined solution for booking and managing house relocations.
            </p>
          </div>
          <div className="project-cs-hero__cta">
            <a href="https://angkutaja.vercel.app/" className="btn btn--bg" target="_blank" rel="noreferrer">Live Link</a>
          </div>
        </div>
      </section>
      <section className="project-details">
        <div className="main-container">
          <div className="project-details__content">
            <div className="project-details__showcase-img-cont" data-aos="fade-up">
              <img
                src={projectImg1}
                alt="Project1"
                className="project-details__showcase-img"
              />
            </div>
            <div className="project-details__content-main" data-aos="fade-up" data-aos-delay="150">
              <div className="project-details__desc">
                <h3 className="project-details__content-title">Project Overview</h3>
                <p className="project-details__desc-para">
                  In the "Angkutaja" project, I took on multiple roles to create a user-friendly experience. Using Figma, I designed the UI/UX and implemented the front-end with HTML and CSS. For efficient data management, I designed the database with Hasura. Leveraging GraphQL in React.js, I seamlessly integrated the back-end with the front-end through API integration.
                </p>
                <p className="project-details__desc-para">
                  "Angkutaja" showcases my skills in UI/UX design, front-end development, database design, and API integration. This project demonstrates my ability to create a streamlined platform for house moving services, offering convenience and efficiency to users.
                </p>
              </div>
              <div className="project-details__tools-used" data-aos="fade-up">
                <h3 className="project-details__content-title">Tools Used</h3>
                <div className="skills">
                  <div className="skills__skill">HTML</div>
                  <div className="skills__skill">CSS</div>
                  <div className="skills__skill">JavaScript</div>
                  <div className="skills__skill">React.js</div>
                  <div className="skills__skill">Hasura</div>
                  <div className="skills__skill">Apollo GraphQL</div>
                  <div className="skills__skill">Vercel</div>
                  <div className="skills__skill">Figma</div>
                  <div className="skills__skill">Git</div>
                  <div className="skills__skill">GitHub</div>
                  <div className="skills__skill">Trello</div>
                </div>
              </div>
              <div className="project-details__links" data-aos="fade-up">
                <h3 className="project-details__content-title">See Live</h3>
                <a
                  href="https://angkutaja.vercel.app/"
                  className="btn btn--med btn--theme project-details__links-btn"
                  target="_blank" rel="noreferrer"
                  >Live Link</a
                >
                <a
                  href="https://github.com/m-mustakim-surya/angkutaja"
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

export default Project1