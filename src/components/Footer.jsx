import Wrapper from "../assets/wrappers/Footer.js";
import { ReactSVG } from "react-svg";
import facebook from "../assets/images/facebook.svg";
import instagram from "../assets/images/instagram.svg";
import linkedin from "../assets/images/linkedin.svg";
import x from "../assets/images/x.svg";

const Footer = () => {
  return (
    <Wrapper>
      <div className="footerColumn">
        <h4 className="footerHeading">About</h4>

        <div className="subColumn">
          <a className="footerLink">About us</a>
          <a className="footerLink">Careers</a>
          <a className="footerLink">Blogs</a>
        </div>
      </div>

      <div className="footerColumn">
        <h4 className="footerHeading">Help</h4>

        <div className="subColumn">
          <a className="footerLink">Help center</a>
          <a className="footerLink">Contact us</a>
        </div>
      </div>

      <div className="footerColumn">
        <h4 className="footerHeading">Legal</h4>

        <div className="subColumn">
          <a className="footerLink">Terms & conditions</a>
          <a className="footerLink">Privacy policy</a>
        </div>
      </div>

      <div className="social-icons">
        <a className="social-icon" href="/demo/">
          <ReactSVG src={facebook} />
        </a>
        <a className="social-icon" href="/demo/">
          <ReactSVG src={instagram} />
        </a>
        <a className="social-icon" href="/demo/">
          <ReactSVG src={x} />
        </a>
        <a className="social-icon" href="/demo/">
          <ReactSVG src={linkedin} />
        </a>
      </div>
    </Wrapper>
  );
};

export default Footer;
