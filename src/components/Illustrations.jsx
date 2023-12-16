import Wrapper from "../assets/wrappers/Illustrations.js";
import illustration1 from "../assets/images/illustration-1.svg";
import illustration2 from "../assets/images/illustration-2.svg";

const Navbar = () => {
  return (
    <Wrapper>
      <img className="ill-1" src={illustration1} alt="" />
      <img className="ill-2" src={illustration2} alt="" />
    </Wrapper>
  );
};

export default Navbar;
