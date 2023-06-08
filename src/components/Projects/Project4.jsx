import React from 'react';
import projectImg4 from '../../assets/portfolio/project4.png'

const Project4 = () => {
  return (
    <>
      <section className="project-cs-hero">
        <div className="project-cs-hero__content">
          <h1 className="heading-primary">E-HAS</h1>
          <div className="project-cs-hero__info">
            <p className="text-primary">
              E-HAS (Electronic Halal Assurance System) is a system that aimed to provide small and medium enterprises with a streamlined process to obtain halal certification for their products from MUI (Majelis Ulama Indonesia, the Indonesian Council of Ulama).
            </p>
          </div>
          <div className="project-cs-hero__cta">
            <a href="https://e-has.id/" className="btn btn--bg" target="_blank" rel="noreferrer">Live Link</a>
          </div>
        </div>
      </section>
      <section className="project-details">
        <div className="main-container">
          <div className="project-details__content">
            <div className="project-details__showcase-img-cont" data-aos="fade-up">
              <img
                src={projectImg4}
                alt="Project"
                className="project-details__showcase-img"
              />
            </div>
            <div className="project-details__content-main" data-aos="fade-up" data-aos-delay="150">
              <div className="project-details__desc">
                <h3 className="project-details__content-title">Project Overview</h3>
                <p className="project-details__desc-para">
                  E-HAS (Electronic Halal Assurance System) is a significant project that I contributed to during my internship at PT Semesta Mahakarya Teknologi. As part of the Full Stack Developer team, our objective was to design and develop a streamlined system that facilitates the halal certification process for small and medium enterprises (SMEs) through the Indonesian Council of Ulama (MUI).
                </p>
                <p className="project-details__desc-para">
                  Utilizing MySQL for efficient database design, Figma for UI/UX design, and CodeIgniter PHP for web development, we successfully created a user-friendly platform. E-HAS simplifies the complex certification procedures, enabling SMEs to accurately submit product information and efficiently manage their certification requests. Through this project, I was able to showcase my proficiency in database design, UI/UX design, and web development, demonstrating my capability to deliver impactful solutions that cater to the needs of businesses and promote halal compliance.
                </p>
              </div>
              <div className="project-details__tools-used" data-aos="fade-up">
                <h3 className="project-details__content-title">Tools Used</h3>
                <div className="skills">
                  <div className="skills__skill">HTML</div>
                  <div className="skills__skill">CSS</div>
                  <div className="skills__skill">JavaScript</div>
                  <div className="skills__skill">PHP</div>
                  <div className="skills__skill">CodeIgniter</div>
                  <div className="skills__skill">MySQL</div>
                  <div className="skills__skill">PhpMyAdmin</div>
                  <div className="skills__skill">CPanel</div>
                  <div className="skills__skill">Figma</div>
                  <div className="skills__skill">Git</div>
                  <div className="skills__skill">GitHub</div>
                  <div className="skills__skill">Trello</div>
                </div>
              </div>
              <div className="project-details__links" data-aos="fade-up">
                <h3 className="project-details__content-title">See Live</h3>
                <a
                  href="https://e-has.id/"
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

export default Project4