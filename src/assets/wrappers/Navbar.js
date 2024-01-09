import styled from "styled-components";

const Wrapper = styled.div`
  width: var(--section-width);
  margin: auto;
  padding: 17px 29px 17px 29px;
  background: #ece7e2;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .right-side {
    position: absolute;
    display: flex;
    gap: 27px;
    align-self: flex-end;
  }

  .left-side {
    display: flex;
    gap: 27px;
    align-self: flex-start;
  }

  .navbar-link {
    color: #66574b;
    font-size: 20px;
    font-weight: 400;
  }

  .logo-container {
    position: absolute;
    align-self: center;
    display: flex;
  }

  .logo {
    width: 160px;
  }

  .lang {
    display: flex;
    gap: 5px;
  }

  .lang::before {
    content: "English";
  }

  .start::before {
    content: "Start a project";
  }

  @media only screen and (max-width: 900px) {
    .lang::before {
      content: "Eng";
    }
    .start::before {
      content: "Start";
    }
    .left-side,
    .rightSide {
      gap: 16px;
    }
  }

  .lang-icon {
    margin-top: 3px;
  }
`;

export default Wrapper;
