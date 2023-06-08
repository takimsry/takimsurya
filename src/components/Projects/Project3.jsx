import React from 'react';
import projectImg3 from '../../assets/portfolio/project3.png';

const Project3 = () => {
  return (
    <>
      <section className="project-cs-hero">
        <div className="project-cs-hero__content">
          <h1 className="heading-primary">PERSANI</h1>
          <div className="project-cs-hero__info">
            <p className="text-primary">
              UI/UX project for PERSANI (Indonesian Gymnastics Association) - Central Java, a government organization focused on gymnastics. The project involved creating a high-fidelity prototype for an athlete and data management platform.
            </p>
          </div>
          <div className="project-cs-hero__cta">
            <a href="https://www.figma.com/proto/z4lF9g0a1JLNV63mrYWLRn/PERSANI?type=design&node-id=47-6&scaling=scale-down&page-id=47%3A5&starting-point-node-id=47%3A6" className="btn btn--bg" target="_blank" rel="noreferrer">Live Link</a>
          </div>
        </div>
      </section>
      <section className="project-details">
        <div className="main-container">
          <div className="project-details__content">
            <div className="project-details__showcase-img-cont" data-aos="fade-up">
              <img
                src={projectImg3}
                alt="Project"
                className="project-details__showcase-img"
              />
            </div>
            <div className="project-details__content-main" data-aos="fade-up" data-aos-delay="150">
              <div className="project-details__desc">
                <h3 className="project-details__content-title">Project Overview</h3>
                <p className="project-details__desc-para">
                  As the UI/UX Designer Lead during my internship at PT Semesta Mahakarya Teknologi, I played a crucial role in developing the PERSANI Athlete and Data Management Platform for PERSANI - Central Java, the Indonesian Gymnastics Association. The project aimed to streamline athlete and data management processes within the organization.
                </p>
                <p className="project-details__desc-para">
                  Using Figma, I created visually appealing and intuitive user interfaces to enhance the overall user experience. Through efficient project management with Trello, we successfully developed a platform that simplifies athlete and data management for PERSANI - Central Java, empowering the organization to focus on nurturing gymnastics talent and promoting the sport.
                </p>
              </div>
              <div className="project-details__tools-used" data-aos="fade-up">
                <h3 className="project-details__content-title">Tools Used</h3>
                <div className="skills">
                  <div className="skills__skill">Figma</div>
                  <div className="skills__skill">Trello</div>
                </div>
              </div>
              <div className="project-details__links" data-aos="fade-up">
                <h3 className="project-details__content-title">See Live</h3>
                <a
                  href="https://www.figma.com/proto/z4lF9g0a1JLNV63mrYWLRn/PERSANI?type=design&node-id=47-6&scaling=scale-down&page-id=47%3A5&starting-point-node-id=47%3A6"
                  className="btn btn--med btn--theme project-details__links-btn"
                  target="_blank" rel="noreferrer"
                  >Live Link</a
                >
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Project3