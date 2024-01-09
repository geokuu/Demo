import styled from "styled-components";

const Wrapper = styled.div`
  padding: 58px 50px 58px 50px;
  justify-content: center;
  gap: 84px;
  display: flex;
  background: #ece7e2;
  width: 100%;

  @media only screen and (max-width: 900px) {
    gap: 40px;
  }

  .footer-column {
    flex-direction: column;
    gap: 14px;
    display: flex;
  }

  .footer-heading {
    font-size: 18px;
    font-weight: 700;
  }

  .sub-column {
    flex-direction: column;
    gap: 7px;
    display: flex;
  }

  .footer-link {
    font-size: 13px;
    font-weight: 400;
  }

  .social-icons {
    position: relative;
    height: 25px;
    top: 40px;
    gap: 30px;
    display: flex;
  }

  .social-icon {
    fill: currentColor;
  }
`;

export default Wrapper;
