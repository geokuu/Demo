import Wrapper from "../assets/wrappers/Navbar.js";
import logo from "../assets/images/logo.svg";
import arrow from "../assets/images/arrow-down.svg";
const Navbar = () => {
  return (
    <Wrapper>
      <div className="left-side">
        <a className="navbar-link" href="/">
          Discover
        </a>
        <a className="navbar-link start" href="/"></a>
      </div>

      <a className="logo-container" href="/">
        <img className="logo" src={logo} alt="logo" />
      </a>

      <div className="right-side">
        <a className="navbar-link" href="/">
          Sign in
        </a>
        <a className="navbar-link lang" href="/">
          <img className="lang-icon" src={arrow} />
        </a>
      </div>
    </Wrapper>
  );
};

export default Navbar;
