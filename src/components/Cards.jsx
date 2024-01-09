import { Card } from "./";
import Wrapper from "../assets/wrappers/Cards.js";
import data from "../assets/data.js";
import PropTypes from "prop-types";
import arrow from "../assets/images/arrow.svg";
import { ReactSVG } from "react-svg";
import { useState, useEffect } from "react";

function Cards({ section }) {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const renderCards = () => {
    const cardList = [];
    let i = 0;
    for (const project of data.projects) {
      if (windowSize <= 900 && i === 2) {
        break;
      } else if (windowSize <= 1160 && i === 3) {
        break;
      }
      cardList.push(<Card key={project.title} project={project} />);
      i++;
    }
    return cardList;
  };

  return (
    <Wrapper>
      <div className="header">
        <h2>{section}</h2>

        <a className="discover" href="/demo/">
          <ReactSVG src={arrow} />
        </a>
      </div>

      <div className="cardsRow">{renderCards()}</div>
    </Wrapper>
  );
}

Cards.propTypes = {
  section: PropTypes.string,
};

export default Cards;
