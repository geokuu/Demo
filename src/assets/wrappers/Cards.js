import styled from "styled-components";

const Wrapper = styled.div`
  flex-direction: column;
  gap: 20px;
  display: flex;

  .header {
    justify-content: space-between;
    align-items: flex-end;
    display: flex;
  }

  .discover {
    font-size: 24px;
    font-weight: 400;
    display: flex;
    gap: 6px;
  }

  .discover::before {
    content: "Discover more";
  }

  @media only screen and (max-width: 900px) {
    .discover::before {
      content: "More";
    }
  }

  svg {
    width: 14px;
    height: 15px;
    margin-top: 11px;
    fill: currentColor;
  }

  .cards-row {
    display: flex;
    gap: 27px;
  }
`;

export default Wrapper;
