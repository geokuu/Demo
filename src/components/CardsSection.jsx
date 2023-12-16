import { Cards } from "./";
import Wrapper from "../assets/wrappers/CardsSection.js";
import data from "../assets/data.js";

const CardsSection = () => {
  return (
    <Wrapper>
      {data.sectionNames.map(function (data) {
        return <Cards key={data} section={data} />;
      })}
    </Wrapper>
  );
};

export default CardsSection;
