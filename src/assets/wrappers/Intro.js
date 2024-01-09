import styled from "styled-components";

const Wrapper = styled.div`
  width: calc(var(--section-width) - 180px);
  flex-direction: column;
  align-items: center;
  display: flex;
  gap: 50px;
  margin: 40px 0 330px 0;

  .illustrations {
    position: absolute;
    top: 320px;
    width: var(--section-width);
    display: flex;
    flex-direction: column;
  }

  .ill-1 {
    top: 150px;
    left: 20px;
    position: relative;
    width: 43%;
  }

  .ill-2 {
    width: 27%;
    position: absolute;
    align-self: flex-end;
  }

  .slogan {
    text-align: center;
    font-size: 55px;
    font-weight: 700;
    word-wrap: break-word;
  }

  .buttons {
    gap: 38px;
    display: flex;
    z-index: 1;
  }

  @media only screen and (max-width: 1160px) {
    .illustrations {
      top: 420px;
    }
    margin: 40px 0 280px 0;
  }

  @media only screen and (max-width: 900px) {
    margin: 20px 0 30px 0;
    .illustrations {
      display: none;
    }

    .buttons {
      gap: 30px;
    }
  }
`;

export default Wrapper;
