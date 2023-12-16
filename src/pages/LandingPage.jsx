import Wrapper from "../assets/wrappers/LandingPage.js";

import {
  CardsSection,
  Categories,
  Navbar,
  Footer,
  Intro,
  Illustrations,
} from "../components";

const LandingPage = () => {
  return (
    <Wrapper>
      <Navbar />
      <Intro />
      <Illustrations />
      <CardsSection />
      <Categories />
      <Footer />
    </Wrapper>
  );
};

export default LandingPage;
