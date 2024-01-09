import Wrapper from "../assets/wrappers/LandingPage.js";

import { CardsSection, Categories, Navbar, Footer, Intro } from "../components";

const LandingPage = () => {
  return (
    <Wrapper>
      <Navbar />
      <Intro />
      <CardsSection />
      <Categories />
      <Footer />
    </Wrapper>
  );
};

export default LandingPage;
