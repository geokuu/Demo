import styled from "styled-components";

const Wrapper = styled.main`
{



  width: 1100px;
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
  
  
.lang-icon{
  margin-top: 3px ;
}

}

`;

export default Wrapper;
