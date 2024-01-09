import Wrapper from "../assets/wrappers/Navbar.js";
import logo from "../assets/images/logo.svg";
import arrow from "../assets/images/arrow-down.svg";
const Navbar = () => {
  return (
    <Wrapper>
      <div className="left-side">
        <a className="navbar-link" href="/crowdfunding/">
          Discover
        </a>
        <a className="navbar-link start" href="/crowdfunding/"></a>
      </div>

      <a className="logo-container" href="/crowdfunding/">
        <img className="logo" src={logo} alt="logo" />
      </a>

      <div className="right-side">
        <a className="navbar-link" href="/crowdfunding/">
          Sign in
        </a>
        <a className="navbar-link lang" href="/crowdfunding/">
          <img className="lang-icon" src={arrow} />
        </a>
      </div>
    </Wrapper>
  );
};

export default Navbar;
