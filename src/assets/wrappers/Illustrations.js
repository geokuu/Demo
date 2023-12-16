import styled from "styled-components";

const Wrapper = styled.main`
  position: absolute;
  top: 320px;
  width: 1100px;
  text-align: center;
  display: flex;
  flex-direction: column;

  .ill-1 {
    top: 150px;
    left: 20px;
    position: relative;
    width: 470px;
  }

  .ill-2 {
    width: 300px;
    position: absolute;
    align-self: flex-end;
  }
`;

export default Wrapper;
