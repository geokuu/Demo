import { Card } from "./";
import Wrapper from "../assets/wrappers/Cards.js";
import data from "../assets/data.js";
import PropTypes from "prop-types";

function Cards({ section }) {
  return (
    <Wrapper>
      <div className="header">
        <h2>{section}</h2>

        <a className="discover" href="/demo/">
          Discover more
          <svg>
            <path d="M0 7.50006C0 8.18229 0.55306 8.73535 1.23529 8.73535L12.7647 8.73535C13.4469 8.73535 14 8.18229 14 7.50006C14 6.81782 13.4469 6.26476 12.7647 6.26476L1.23529 6.26476C0.55306 6.26476 0 6.81782 0 7.50006Z" />
            <path d="M6.12646 14.1382C6.60887 14.6206 7.39101 14.6206 7.87343 14.1382L13.6381 8.37348C14.1205 7.89107 14.1205 7.10893 13.6381 6.62651L7.87343 0.861809C7.39101 0.379395 6.60887 0.379395 6.12646 0.861809C5.64405 1.34422 5.64405 2.12637 6.12646 2.60878L11.0177 7.5L6.12646 12.3912C5.64405 12.8736 5.64405 13.6558 6.12646 14.1382Z" />
          </svg>
        </a>
      </div>

      <div className="cardsRow">
        {data.projects.map(function (data) {
          return <Card key={data.title} project={data} />;
        })}
      </div>
    </Wrapper>
  );
}

Cards.propTypes = {
  section: PropTypes.string,
};

export default Cards;
