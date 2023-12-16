import styled from "styled-components";

const Wrapper = styled.main`
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

  svg {
    width: 14px;
    height: 15px;
    margin-top: 11px;
    fill: currentColor;
  }

  .cardsRow {
    justify-content: space-between;
    display: flex;
  }
`;

export default Wrapper;
