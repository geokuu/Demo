import Wrapper from "../assets/wrappers/Footer.js";
import { ReactSVG } from "react-svg";
import facebook from "../assets/images/facebook.svg";
import instagram from "../assets/images/instagram.svg";
import linkedin from "../assets/images/linkedin.svg";
import x from "../assets/images/x.svg";

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer-column">
        <h4 className="footer-heading">About</h4>

        <div className="sub-column">
          <a className="footer-link">About us</a>
          <a className="footer-link">Careers</a>
          <a className="footer-link">Blogs</a>
        </div>
      </div>

      <div className="footer-column">
        <h4 className="footer-heading">Help</h4>

        <div className="sub-column">
          <a className="footer-link">Help center</a>
          <a className="footer-link">Contact us</a>
        </div>
      </div>

      <div className="footer-column">
        <h4 className="footer-heading">Legal</h4>

        <div className="sub-column">
          <a className="footer-link">Terms & conditions</a>
          <a className="footer-link">Privacy policy</a>
        </div>
      </div>

      <div className="social-icons">
        <a className="social-icon" href="/crowdfunding/">
          <ReactSVG src={facebook} />
        </a>
        <a className="social-icon" href="/crowdfunding/">
          <ReactSVG src={instagram} />
        </a>
        <a className="social-icon" href="/crowdfunding/">
          <ReactSVG src={x} />
        </a>
        <a className="social-icon" href="/crowdfunding/">
          <ReactSVG src={linkedin} />
        </a>
      </div>
    </Wrapper>
  );
};

export default Footer;
