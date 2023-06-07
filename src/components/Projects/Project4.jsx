import React, { useEffect } from 'react';
import projectImg4 from '../../assets/portfolio/project4.png'
import AOS from "aos";
import "aos/dist/aos.css";

const Project4 = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <section class="project-cs-hero">
        <div class="project-cs-hero__content">
          <h1 class="heading-primary">E-HAS</h1>
          <div class="project-cs-hero__info">
            <p class="text-primary">
              E-HAS (Electronic Halal Assurance System) is a system that aimed to provide small and medium enterprises with a streamlined process to obtain halal certification for their products from MUI (Majelis Ulama Indonesia, the Indonesian Council of Ulama).
            </p>
          </div>
          <div class="project-cs-hero__cta">
            <a href="https://e-has.id/" class="btn btn--bg" target="_blank" rel="noreferrer">Live Link</a>
          </div>
        </div>
      </section>
      <section class="project-details">
        <div class="main-container">
          <div class="project-details__content">
            <div class="project-details__showcase-img-cont" data-aos="fade-up">
              <img
                src={projectImg4}
                alt="Project"
                class="project-details__showcase-img"
              />
            </div>
            <div class="project-details__content-main" data-aos="fade-up" data-aos-delay="150">
              <div class="project-details__desc">
                <h3 class="project-details__content-title">Project Overview</h3>
                <p class="project-details__desc-para">
                  E-HAS (Electronic Halal Assurance System) is a significant project that I contributed to during my internship at PT Semesta Mahakarya Teknologi. As part of the Full Stack Developer team, our objective was to design and develop a streamlined system that facilitates the halal certification process for small and medium enterprises (SMEs) through the Indonesian Council of Ulama (MUI).
                </p>
                <p class="project-details__desc-para">
                  Utilizing MySQL for efficient database design, Figma for UI/UX design, and CodeIgniter PHP for web development, we successfully created a user-friendly platform. E-HAS simplifies the complex certification procedures, enabling SMEs to accurately submit product information and efficiently manage their certification requests. Through this project, I was able to showcase my proficiency in database design, UI/UX design, and web development, demonstrating my capability to deliver impactful solutions that cater to the needs of businesses and promote halal compliance.
                </p>
              </div>
              <div class="project-details__tools-used" data-aos="fade-up">
                <h3 class="project-details__content-title">Tools Used</h3>
                <div class="skills">
                  <div class="skills__skill">HTML</div>
                  <div class="skills__skill">CSS</div>
                  <div class="skills__skill">JavaScript</div>
                  <div class="skills__skill">PHP</div>
                  <div class="skills__skill">CodeIgniter</div>
                  <div class="skills__skill">MySQL</div>
                  <div class="skills__skill">PhpMyAdmin</div>
                  <div class="skills__skill">CPanel</div>
                  <div class="skills__skill">Figma</div>
                  <div class="skills__skill">Git</div>
                  <div class="skills__skill">GitHub</div>
                  <div class="skills__skill">Trello</div>
                </div>
              </div>
              <div class="project-details__links" data-aos="fade-up">
                <h3 class="project-details__content-title">See Live</h3>
                <a
                  href="https://e-has.id/"
                  class="btn btn--med btn--theme project-details__links-btn"
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