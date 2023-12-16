import Wrapper from "../assets/wrappers/Intro.js";

const Intro = () => {
  return (
    <Wrapper>
      <h1 className="slogan">
        Crowdfunding platform where great ideas find support
      </h1>

      <div className="buttons">
        <a className="btn btn1" href="/demo/">
          Discover
        </a>

        <a className="btn btn1" href="/demo/">
          Start a project
        </a>
      </div>
    </Wrapper>
  );
};

export default Intro;
