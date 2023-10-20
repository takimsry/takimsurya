import React from 'react';
import portfolioData from '../../data/portfolioData';

const Projects = () => {
  return (
    <section id="projects" className="projects sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-bg" data-aos="fade-up">
          <span className="heading-sec__main">Projects</span>
          <span className="heading-sec__sub">
            Here you'll explore a collection of both personal and client projects that I have crafted, each accompanied by its own dedicated case study.
          </span>
        </h2>

        <div className="projects__content">
          {
            portfolioData.map(portfolio => {
              return(
                <div className="projects__row">
                  <div className="projects__row-img-cont" data-aos="fade-right">
                    <img
                      src={portfolio.image}
                      alt="Software Screenshot"
                      className="projects__row-img"
                      loading="lazy"
                    />
                  </div>
                  <div className="projects__row-content" data-aos="fade-right" data-aos-delay="200">
                    <h3 className="projects__row-content-title">{portfolio.title}</h3>
                    <p className="projects__row-content-desc">
                      {portfolio.detail}
                    </p>
                    <a
                      href={`https://takimsurya.vercel.app/projects/${portfolio.id}`}
                      className="btn btn--med btn--theme dynamicBgClr"
                      >Case Study</a
                    >
                  </div>
                </div>
              )
            })
          }
          
        </div>
      </div>
    </section>
  )
}

export default Projects