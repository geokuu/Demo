import styled from "styled-components";

const Wrapper = styled.main`
  flex-direction: column;
  display: flex;
  width: 1100px;
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
