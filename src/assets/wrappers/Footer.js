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

  .footerColumn {
    flex-direction: column;
    gap: 14px;
    display: flex;
  }

  .footerHeading {
    font-size: 18px;
    font-weight: 700;
  }

  .subColumn {
    flex-direction: column;
    gap: 7px;
    display: flex;
  }

  .footerLink {
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
