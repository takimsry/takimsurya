import React from 'react';
import { useParams } from 'react-router-dom';
import portfolioData from '../../data/portfolioData';

const ProjectDetail = () => {
  const {projectId} = useParams();
  const selectedProject = portfolioData.find(portfolio => portfolio.id === projectId);

  if(!selectedProject){
    return(
      <h1>Project Not Found</h1>
    )
  }

  return (
    <>
      <section className="project-cs-hero">
        <div className="project-cs-hero__content">
          <h1 className="heading-primary">{selectedProject.title}</h1>
          <div className="project-cs-hero__info">
            <p className="text-primary">
              {selectedProject.detail}
            </p>
          </div>
          <div className="project-cs-hero__cta">
            {selectedProject.liveLink && (
              <a
                href={selectedProject.liveLink}
                className="btn btn--bg"
                target="_blank" rel="noreferrer"
              >
                Live Link
              </a>
            )}
          </div>
        </div>
      </section>
      <section className="project-details">
        <div className="main-container">
          <div className="project-details__content">
            <div className="project-details__showcase-img-cont" data-aos="fade-up">
              <img
                src={selectedProject.image}
                alt="Project1"
                className="project-details__showcase-img"
              />
            </div>
            <div className="project-details__content-main" data-aos="fade-up" data-aos-delay="150">
              <div className="project-details__desc">
                <h3 className="project-details__content-title">Project Overview</h3>
                <p className="project-details__desc-para" dangerouslySetInnerHTML={{ __html: selectedProject.overview }}></p>
              </div>
              <div className="project-details__tools-used" data-aos="fade-up">
                <h3 className="project-details__content-title">Tools Used</h3>
                <div className="skills">
                  {
                    selectedProject.tools.map(tool => {
                      return(
                        <div className="skills__skill">{tool}</div>
                      )
                    })
                  }
                </div>
              </div>
              {(selectedProject.liveLink || selectedProject.codeLink || selectedProject.articleLink) && (
                <div className="project-details__links" data-aos="fade-up">
                  <h3 className="project-details__content-title">See Live</h3>
                  {selectedProject.liveLink && (
                    <a
                      href={selectedProject.liveLink}
                      className="btn btn--med btn--theme project-details__links-btn"
                      target="_blank" rel="noreferrer"
                    >
                      Live Link
                    </a>
                  )}
                  {selectedProject.codeLink && (
                    <a
                      href={selectedProject.codeLink}
                      className="btn btn--med btn--theme project-details__links-btn"
                      target="_blank" rel="noreferrer"
                    >
                      Code Link
                    </a>
                  )}
                  {selectedProject.articleLink && (
                    <a
                      href={selectedProject.articleLink}
                      className="btn btn--med btn--theme project-details__links-btn"
                      target="_blank" rel="noreferrer"
                    >
                      Article Link
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProjectDetail