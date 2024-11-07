import React, { useState } from 'react';
import portfolioData from '../../data/portfolioData';
import Project from '../Common/Project';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const handleLoadMore = () => {
    setShowAll(true);
  }

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
          {portfolioData.slice(0, 5).map(portfolio => (
              <Project portfolio={portfolio} />
            ))
          }
          {portfolioData.length > 5 && !showAll && (
            <div className="home-hero__cta">
              <button onClick={handleLoadMore} className="btn btn--bg">Load More</button>
            </div>
          )}
          {showAll && portfolioData.slice(5).map(portfolio => (
            <Project portfolio={portfolio} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects