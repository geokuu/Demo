import Wrapper from "../assets/wrappers/Intro.js";
import illustration1 from "../assets/images/illustration-1.svg";
import illustration2 from "../assets/images/illustration-2.svg";

const Intro = () => {
  return (
    <Wrapper>
      <h1 className="slogan">
        Crowdfunding platform where great ideas find support
      </h1>

      <div className="buttons">
        <a className="btn btn1" href="/crowdfunding/">
          Discover
        </a>

        <a className="btn btn1" href="/crowdfunding/">
          Start a project
        </a>
      </div>

      <div className="illustrations">
        <img className="ill-1" src={illustration1} alt="" />
        <img className="ill-2" src={illustration2} alt="" />
      </div>
    </Wrapper>
  );
};

export default Intro;
