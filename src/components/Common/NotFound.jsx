import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="project-cs-hero">
      <div className="project-cs-hero__content">
        <h1 className="heading-primary">🙅‍♂ 404 Not Found</h1>
        <div className="project-cs-hero__cta">
          <Link
            to={"/"}
            className="btn btn--bg"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </section>
  )
};
export default NotFound;