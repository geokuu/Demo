import styled from "styled-components";

const Wrapper = styled.div`
{
  

  width: var(--section-width);;
  margin: auto;
  padding: 17px 29px 17px 29px;
  background: #ECE7E2;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  

  .rightSide {
    position: absolute;
    display: flex;
    gap: 27px;
    align-self: flex-end;

  }


  .leftSide {

    display: flex;
    gap: 27px;
    align-self: flex-start;
  }


  .navbarLink {
    color: #66574B;
    font-size: 20px;
    font-weight: 400;
  }

  .logoContainer {
    position: absolute;
    align-self: center;
    display: flex;
  }

  .logo {
    width: 160px;
  }
  
  .lang{
    display: flex;
    gap: 5px;
  }
  
  .lang::before{
    content: "English";
  }
  
  .start::before{
    content: "Start a project";
  }
  

  @media only screen and (max-width: 900px) {
    .lang::before{
      content: "Eng";
    }
    .start::before{
      content: "Start";
    }
    .leftSide, .rightSide{
      gap: 16px;
    }
  }



  .lang-icon{
  margin-top: 3px ;
}

}

`;

export default Wrapper;
