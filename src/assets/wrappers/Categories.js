import styled from "styled-components";

const Wrapper = styled.div`
  flex-direction: column;
  display: flex;
  width: var(--section-width);
  margin: auto;
  padding: 40px;
  background: #ece7e2;
  border-radius: 40px;
  gap: 20px;

  .buttonsContainer {
    gap: 20px;
    display: inline-flex;
    flex-wrap: wrap;
  }
`;

export default Wrapper;
