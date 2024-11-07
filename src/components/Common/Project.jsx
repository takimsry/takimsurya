import { Link } from 'react-router-dom';

const Project = ({portfolio}) => {
  return (
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
      <Link
        to={`/projects/${portfolio.id}`}
        className="btn btn--med btn--theme dynamicBgClr"
      >
        Case Study
      </Link>
    </div>
  </div>
  )
};

export default Project;