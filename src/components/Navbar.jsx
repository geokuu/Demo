import Wrapper from "../assets/wrappers/Navbar.js";
import logo from "../assets/images/logo.svg";
import arrow from "../assets/images/arrow-down.svg";
const Navbar = () => {
  return (
    <Wrapper>
      <div className="leftSide">
        <a className="navbarLink" href="/demo/">
          Discover
        </a>
        <a className="navbarLink" href="/demo/">
          Start a project
        </a>
      </div>

      <a className="logoContainer" href="/demo/">
        <img className="logo" src={logo} alt="logo" />
      </a>

      <div className="rightSide">
        <a className="navbarLink" href="/demo/">
          Sign in
        </a>
        <a className="navbarLink lang" href="/demo/">
          English
          <img className="lang-icon" src={arrow} />
        </a>
      </div>
    </Wrapper>
  );
};

export default Navbar;
