import React from 'react';
import projectImg1 from '../../assets/portfolio/project1.png'

const Project1 = () => {
  return (
    <>
      <section class="project-cs-hero">
        <div class="project-cs-hero__content">
          <h1 class="heading-primary">angkutaja</h1>
          <div class="project-cs-hero__info">
            <p class="text-primary">
              angkutaja is a website created to address the house moving needs, especially the transfer of boarding houses for college students in Semarang. It offers a streamlined solution for booking and managing house relocations.
            </p>
          </div>
          <div class="project-cs-hero__cta">
            <a href="https://angkutaja.vercel.app/" class="btn btn--bg" target="_blank" rel="noreferrer">Live Link</a>
          </div>
        </div>
      </section>
      <section class="project-details">
        <div class="main-container">
          <div class="project-details__content">
            <div class="project-details__showcase-img-cont">
              <img
                src={projectImg1}
                alt="Project1"
                class="project-details__showcase-img"
              />
            </div>
            <div class="project-details__content-main">
              <div class="project-details__desc">
                <h3 class="project-details__content-title">Project Overview</h3>
                <p class="project-details__desc-para">
                  In the "Angkutaja" project, I took on multiple roles to create a user-friendly experience. Using Figma, I designed the UI/UX and implemented the front-end with HTML and CSS. For efficient data management, I designed the database with Hasura. Leveraging GraphQL in React.js, I seamlessly integrated the back-end with the front-end through API integration.
                </p>
                <p class="project-details__desc-para">
                  "Angkutaja" showcases my skills in UI/UX design, front-end development, database design, and API integration. This project demonstrates my ability to create a streamlined platform for house moving services, offering convenience and efficiency to users.
                </p>
              </div>
              <div class="project-details__tools-used">
                <h3 class="project-details__content-title">Tools Used</h3>
                <div class="skills">
                  <div class="skills__skill">HTML</div>
                  <div class="skills__skill">CSS</div>
                  <div class="skills__skill">JavaScript</div>
                  <div class="skills__skill">React.js</div>
                  <div class="skills__skill">Hasura</div>
                  <div class="skills__skill">Apollo GraphQL</div>
                  <div class="skills__skill">Vercel</div>
                  <div class="skills__skill">Figma</div>
                  <div class="skills__skill">Git</div>
                  <div class="skills__skill">GitHub</div>
                  <div class="skills__skill">Trello</div>
                </div>
              </div>
              <div class="project-details__links">
                <h3 class="project-details__content-title">See Live</h3>
                <a
                  href="https://angkutaja.vercel.app/"
                  class="btn btn--med btn--theme project-details__links-btn"
                  target="_blank" rel="noreferrer"
                  >Live Link</a
                >
                <a
                  href="https://github.com/m-mustakim-surya/angkutaja"
                  class="btn btn--med btn--theme-inv project-details__links-btn"
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