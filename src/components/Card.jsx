import Wrapper from "../assets/wrappers/Card.js";
import PropTypes from "prop-types";

const Card = ({ project }) => {
  return (
    <Wrapper>
      <div className="card">
        <div className="imageContainer">
          <img src={project.image} alt="" />

          <a className=" btn btn3" href="/demo/">
            {project.type}
          </a>
        </div>

        <div className="about">
          <h3>{project.title}</h3>
          <a className="creator" href="/demo/">
            {project.creator}
          </a>
        </div>

        <div className="footer">
          <div className="bar">
            <div className="bar-background" />
            <div
              className="bar-percentage"
              style={{ width: project.percentage }}
            />
          </div>

          <div className="stats">
            <p>{project.pledged}</p>
            <p>{project.percentage}</p>
            <p className="daysLeft">{project.daysLeft} days left</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

Card.propTypes = {
  project: PropTypes.object,
};
export default Card;
